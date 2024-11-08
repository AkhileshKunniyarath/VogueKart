import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import style from './style';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {useDimensionContext} from '../../context';
import CommonSectionHeader from '../CommonSectionHeader';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import { updateCartCount } from '../../storage/action';

const ProductScroll = props => {
  const {isNavigationNeeded} = props;
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
    dimensions.isPortrait,
  );
  const {userId, cartCount} = useSelector(state => state);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute();
  const [products, setProducts] = useState([]);

  const handleProduct = item => {
    if (route.name === 'ProductDetails') {
      isNavigationNeeded(true, item);
    } else {
      navigation.navigate('ProductDetails', {product: item});
    }
  };

  const addToCart = async item => {
    await firestore()
      .collection('Cart')
      .where('userId', '==', userId)
      .where('productId', '==', item.id)
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          firestore().collection('Cart').add({
            created: Date.now(),
            description: item.description,
            name: item.name,
            price: item.price,
            quantity: 1,
            userId: userId,
            productId: item.id,
            image: item.image,
          });
          dispatch(updateCartCount(cartCount + 1));
        } else {
          firestore()
          .collection('Cart')
          .doc(snapshot?.docs[0].id)
          .update({
          quantity: parseInt(snapshot?.docs[0].data().quantity, 10)+ 1,
        });
      }
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    await firestore()
      .collection('Products')
      .get()
      .then(snapshot => {
        if (!snapshot.empty) {
          const result = [];
          snapshot.docs.forEach(doc => {
            if (doc.exists) {
              const responseData = {id: doc.id, ...doc?.data()};
              result.push(responseData);
            }
          });
          setProducts(result);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleProductsRender = ({item, index}) => {
    return (
      <TouchableOpacity onPress={() => handleProduct(item)}>
        <View style={responsiveStyle.productView}>
          <Image
            source={{uri: item.image}}
            style={responsiveStyle.productImage}
          />
          <Image
            source={require('../../assets/images/wishlist-product-outline.png')}
            style={responsiveStyle.whishIcon}
          />
          <Text style={responsiveStyle.productName} numberOfLines={1}>
            {item.name}
          </Text>
          <Text style={responsiveStyle.productDis} numberOfLines={2}>
            {item.description}
          </Text>
          <View style={responsiveStyle.priceView}>
            <Text style={responsiveStyle.price}>{item.price}</Text>
            <TouchableOpacity
              onPress={() => addToCart(item)}
              style={responsiveStyle.addView}>
              <Text style={responsiveStyle.addText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={responsiveStyle.container}>
      <CommonSectionHeader
        head={'Newly Arrived'}
        content={'Pay Less, Get More'}
        rightText={'See All'}
      />

      <View>
        <FlatList
          data={products}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={handleProductsRender}
        />
      </View>
    </View>
  );
};

export default ProductScroll;
