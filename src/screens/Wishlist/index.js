import React, {useEffect, useState} from 'react';
import style from './style';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {useDimensionContext} from '../../context';
import {useIsFocused, useNavigation, useRoute} from '@react-navigation/native';
import CommonHeaderLeft from '../../components/CommonHeaderLeft';
import {useDispatch, useSelector} from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import colors from '../../components/common/colors';
import {updateCartCount} from '../../storage/action';
import CommonHeaderRight from '../../components/CommonHeaderRight';

const Wishlist = () => {
  const navigation = useNavigation();
  const cartCount = useSelector(state => state.cartCount);
  const userId = useSelector(state => state.userId);
  const isFocused = useIsFocused();
  const route = useRoute();
  const dispatch = useDispatch();
  const dimension = useDimensionContext();
  const responsiveStyle = style(dimension.windowWidth, dimension.windowHeight);
  const [wishItems, setWishItems] = useState([]);

  const handleProduct = item => {
    if (route.name === 'ProductDetails') {
      isNavigationNeeded(true, item);
    } else {
      navigation.navigate('ProductDetails', {product: item});
    }
  };

  // useEffect(() => {
  //   getWishlist();
  // }, []);

  useEffect(() => {
    if (isFocused) {
      getWishlist();
    }
  }, [isFocused]);

  useEffect(() => {
    getWishlist();
    navigation.setOptions({
      headerLeft: () => <CommonHeaderLeft />,
      headerRight: () => <CommonHeaderRight cart={true} />,
    });
  }, []);

  

  const getWishlist = async () => {
    await firestore()
      .collection('Wishlist')
      .where('userId', '==', userId)
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          setWishItems([]);
        } else {
          const objArray = [];
          snapshot?.docs.forEach(document => {
            const result = {id: document.id, ...document?.data()};
            objArray.push(result);
          });
          setWishItems(objArray);
        }
      });
  };

  const addToCart = async itemToAdd => {
    await firestore()
      .collection('Cart')
      .where('userId', '==', userId)
      .where('productId', '==', item.id)
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          firestore().collection('Cart').add({
            created: Date.now(),
            description: itemToAdd.description,
            name: itemToAdd.name,
            price: itemToAdd.price,
            quantity: 1,
            userId: userId,
            productId: itemToAdd.id,
            image: itemToAdd.image,
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

  const removeItem = async itemToRemove => {
    await firestore()
      .collection('Wishlist')
      .doc(itemToRemove.id)
      .delete()
      .then(() => {
        const filteredWishlist = wishItems.filter(
          ele => ele.id !== itemToRemove.id,
        );
        setWishItems(filteredWishlist);
      });
  };

  const navigateToShop = () => {
    navigation.navigate('Shop', {type: 'all'});
  };

  return (
    <View style={responsiveStyle.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={wishItems}
        ListEmptyComponent={() => {
          return (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                padding: 15,
              }}>
              <Text
                style={{
                  fontFamily: 'Lato-Bold',
                  fontSize: 22,
                  color: colors.green,
                }}>
                Your Wishlist is Empty
              </Text>
              <TouchableOpacity style={{padding: 25}} onPress={navigateToShop}>
                <Text
                  style={{
                    fontFamily: 'Lato-Regular',
                    fontSize: 19,
                    color: colors.black,
                  }}>
                  Go To Shop
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
        renderItem={({item, index}) => {
          return (
            // <View style={responsiveStyle.ProductView}>
            //   <TouchableOpacity style={responsiveStyle.ProductTouch}>
            //   <Image
            //     source={{uri: item.image}}
            //     style={responsiveStyle.productImage}
            //   />
            //   <View style={responsiveStyle.secondView}>
            //     <Text style={responsiveStyle.name} numberOfLines={2}>
            //       {item.name}
            //     </Text>
            //     <Text style={responsiveStyle.desc} numberOfLines={4}>
            //       {item.description}
            //     </Text>
            //     <View style={responsiveStyle.bottomView}>
            //       <Text style={responsiveStyle.price}>₹ {item.price}</Text>
            //       <TouchableOpacity
            //         onPress={() => addToCart(item)}
            //         style={responsiveStyle.cartView}>
            //         <Text style={responsiveStyle.cartText}>Add to Cart</Text>
            //       </TouchableOpacity>
            //     </View>
            //   </View>
            //   </TouchableOpacity>
            //   <TouchableOpacity
            //     onPress={() => removeItem(item)}
            //     style={responsiveStyle.removeView}>
            //     <Image
            //       source={require('../../assets/images/delete.png')}
            //       style={responsiveStyle.remove}
            //     />
            //   </TouchableOpacity>
            // </View>

            <TouchableOpacity onPress={() => handleProduct(item)}>
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
                    </View>
                    <TouchableOpacity
                      onPress={() => addToCart(item)}
                      style={responsiveStyle.cartView}>
                      <Text style={responsiveStyle.cartText}>Add to Cart</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <TouchableOpacity
                  onPress={() => removeItem(item)}
                  style={responsiveStyle.removeView}>
                  <Image
                    source={require('../../assets/images/delete.png')}
                    style={responsiveStyle.remove}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Wishlist;
