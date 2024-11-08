import React, {useEffect, useState} from 'react';
import style from './style';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {useDimensionContext} from '../../context';
import CommonSectionHeader from '../CommonSectionHeader';
import firestore from '@react-native-firebase/firestore';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import { updateCartCount } from '../../storage/action';

const OfferProducts = () => {
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
  );
  const [products, setProducts] = useState([]);

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

  return (
    <View style={responsiveStyle.container}>
      <CommonSectionHeader
        head={'Say Hello To Offers!'}
        content={'Best prices ever of all the time.'}
        rightText={'See All'}
      />

      <View>
        <FlatList
          data={products}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => String(index)}
          renderItem={({item, index}) => (
            <RenderItem item={item} index={index} />
          )}
        />
      </View>
    </View>
  );
};

const RenderItem = ({item, index}) => {
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
  );
  const navigation = useNavigation();
  const {userId, cartCount} = useSelector(state => state);

  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  const handleProduct = () => {
    navigation.navigate('ProductDetails', {product: item});
  };

  const addToCart = async () => {
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
              quantity: parseInt(snapshot?.docs[0].data().quantity, 10) + 1,
            });
        }
      });
  };

  return (
    <TouchableOpacity onPress={handleProduct}>
      <View style={responsiveStyle.productView}>
        <Image
          source={{uri: item.image}}
          style={responsiveStyle.productImage}
        />
        <View style={responsiveStyle.productNameView}>
          <Text style={responsiveStyle.name} numberOfLines={3}>
            {item.name}
          </Text>
          <Text style={responsiveStyle.des} numberOfLines={4}>
            ({item.description})
          </Text>
          <View style={responsiveStyle.priceView}>
            <View style={responsiveStyle.priceView2}>
              <Text style={responsiveStyle.price}>₹ {item.price}</Text>
              <View style={responsiveStyle.offView}>
                <Text style={responsiveStyle.offText}>20% Off. </Text>
              </View>
            </View>
            <View style={responsiveStyle.quantityView}>
              <TouchableOpacity
                onPress={() => {
                  setQuantity(quantity <= 0 ? quantity : quantity - 1);
                  addToCart();
                }}>
                <Text style={responsiveStyle.quantityText1}>-</Text>
              </TouchableOpacity>
              <Text style={responsiveStyle.quantityText2}>{quantity}</Text>
              <TouchableOpacity
                onPress={() => {
                  setQuantity(quantity + 1);
                  addToCart();
                }}>
                <Text style={responsiveStyle.quantityText1}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default OfferProducts;
