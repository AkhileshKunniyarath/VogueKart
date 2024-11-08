import React, {useCallback, useEffect, useState} from 'react';
import style from './style';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {useDimensionContext} from '../../context';
import OrderTotal from './components/OrderTotal';
import CommonButton from '../../components/CommonButton';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import CommonHeaderLeft from '../../components/CommonHeaderLeft';
import colors from '../../components/common/colors';
import {useDispatch, useSelector} from 'react-redux';
import {updateCartCount} from '../../storage/action';
import Snackbar from 'react-native-snackbar';

const Cart = () => {
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
    dimensions.isPortrait,
  );
  const {userId, cartCount, email , mobileNumber} = useSelector(state => state);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [cartProducts, setCartProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [charges, setCharges] = useState(50);

  useFocusEffect(
    useCallback(() => {
      getCartProducts();
    }, []),
  );

  useEffect(() => {
    if (cartProducts.length > 0) {
      setCharges(50);
    } else {
      setCharges(0);
    }
  }, [cartProducts]);

  const getCartProducts = async () => {
    await firestore()
      .collection('Cart')
      .where('userId', '==', userId)
      .get()
      .then(snapshot => {
        if (!snapshot.empty) {
          const result = [];
          let totalAmount = 0;
          snapshot.docs.forEach(doc => {
            if (doc.exists) {
              const amount =
                parseFloat(doc?.data().price) * parseInt(doc?.data().quantity);
              totalAmount = totalAmount + amount;
              const responseData = {id: doc.id, ...doc?.data()};
              result.push(responseData);
            }
          });
          setTotal(totalAmount);
          setCartProducts(result);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <CommonHeaderLeft />,
    });
  }, []);

  const updateArray = productInfo => {
    const result = cartProducts.filter(x => {
      return x.id !== productInfo.id;
    });
    setTotal(total - parseFloat(productInfo.price));

    setCartProducts(result);
    dispatch(updateCartCount(cartCount - 1));
  };

  const handleTotal = (type, productInfo) => {
    if (type === 'add') {
      setTotal(total + parseFloat(productInfo.price));
    } else {
      setTotal(total - parseFloat(productInfo.price));
    }
  };

  const onButtonPress = () => {
    if(cartProducts.length > 0){
      if(email === '' || mobileNumber === ''){
        Snackbar.show({
          text: 'You have to complete your profile to continue',
          duration: Snackbar.LENGTH_SHORT,
          backgroundColor: colors.red,
          textColor: colors.white,
        });
        navigation.navigate('Account');
      }else{
        navigation.navigate('AddAddress', {cartProducts: cartProducts});
      }

    } else {
      Snackbar.show({
        text: 'Your cart is empty',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: colors.red,
        textColor: colors.white,
      });
    }
  }

  return (
    <View style={responsiveStyle.container}>
      <FlatList
        data={cartProducts}
        extraData={cartProducts}
        keyExtractor={(item, index) => String(index)}
        // contentContainerStyle={responsiveStyle.FlatList}
        renderItem={({item, index}) => (
          <RenderItem
            item={item}
            index={index}
            updateArray={updateArray}
            handleTotal={handleTotal}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => {
          return (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                padding: 30,
              }}>
              <Text
                style={{
                  fontFamily: 'Lato-Black',
                  color: colors.black,
                  fontSize: 25,
                  marginTop: 10,
                }}>
                Cart is empty
              </Text>
              <TouchableOpacity>
                <Text>Go to Shop</Text>
              </TouchableOpacity>
            </View>
          );
        }}
        ListFooterComponent={() => (
          <>
            <View style={responsiveStyle.renderView}>
              {/* startcode */}
              <View style={responsiveStyle.offCircleView}>
                <View style={responsiveStyle.circleRight}></View>
                <View style={responsiveStyle.circleRight}></View>
                <View style={responsiveStyle.circleRight}></View>
                <View style={responsiveStyle.circleRight}></View>
              </View>

              <View
                style={{
                  width: '67%',
                  height: 100,
                  backgroundColor: colors.blue,
                  padding: 20,
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text
                    style={{
                      fontFamily: 'Lato-Bold',
                      color: colors.brown,
                      fontSize: 50,
                      marginTop: -7,
                      marginLeft: -4,
                    }}>
                    20
                  </Text>
                  <View>
                    <Text
                      style={{
                        fontFamily: 'Lato-Regular',
                        color: colors.brown,
                        fontSize: 25,
                        marginTop: 10,
                      }}>
                      %
                    </Text>
                    <Text
                      style={{
                        fontFamily: 'Lato-Bold',
                        color: colors.brown,
                        fontSize: 16,
                      }}>
                      OFF
                    </Text>
                  </View>
                  <View style={{marginLeft: 5}}>
                    <Text
                      style={{
                        fontFamily: 'Lato-Bold',
                        color: colors.black,
                        fontSize: 18,
                      }}>
                      On your first Order
                    </Text>
                    <Text
                      style={{
                        fontFamily: 'Lato-Regular',
                        color: colors.black,
                        fontSize: 14,
                      }}>
                      For Order Above 2500 Rupees only
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  justifyContent: 'space-between',
                  height: 100,
                  backgroundColor: colors.blue,
                }}>
                <View style={responsiveStyle.circleCenter}></View>
                <View
                  style={[
                    responsiveStyle.circleCenter,
                    {marginBottom: -25 / 2},
                  ]}></View>
              </View>
              <View
                style={{
                  width: '25%',
                  height: 100,
                  backgroundColor: colors.blue,
                  padding: 10,
                }}>
                <Text
                  style={{
                    fontFamily: 'Lato-Bold',
                    color: colors.black,
                    fontSize: 15,
                    marginRight: 3,
                  }}>
                  Use Code
                </Text>
                <View
                  style={{
                    marginVertical: 10,
                    padding: 8,
                    justifyContent: 'center',
                    borderRadius: 15,
                    backgroundColor: colors.green,
                    overflow: 'hidden',
                    marginRight: 7,
                    marginLeft: -5,
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Lato-Regular',
                      color: colors.white,
                      alignSelf: 'center',
                    }}>
                    J3O5B7
                  </Text>
                </View>
              </View>
              {/* end code */}
              <View style={{marginLeft: -25 / 2}}>
                <View style={responsiveStyle.circleRight}></View>
                <View style={responsiveStyle.circleRight}></View>
                <View style={responsiveStyle.circleRight}></View>
                <View style={responsiveStyle.circleRight}></View>
              </View>
            </View>
            <View style={responsiveStyle.OrderTotal}>
              <OrderTotal total={total} charges={charges} />
              <CommonButton buttonText={'Proceed to Checkout'} 
              onButtonPress={onButtonPress}
              />
            </View>
          </>
        )}
      />
    </View>
  );
};

const RenderItem = ({item, index, updateArray, handleTotal}) => {
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
    dimensions.isPortrait,
  );
  const navigation = useNavigation();
  const {userId} = useSelector(state => state);
  const [quantity, setQuantity] = useState(item.quantity);

  useEffect(() => {
    setQuantity(item.quantity);
  }, [item]);

  const addToCart = async () => {
    await firestore()
      .collection('Cart')
      .where('userId', '==', userId)
      .where('productId', '==', item.productId)
      .get()
      .then(snapshot => {
        firestore()
          .collection('Cart')
          .doc(snapshot?.docs[0].id)
          .update({
            quantity: parseInt(snapshot?.docs[0].data().quantity, 10) + 1,
          });
        handleTotal('add', item);
      });
  };

  const removeItem = async () => {
    if (quantity <= 1) {
      // remove from cart
      await firestore()
        .collection('Cart')
        .doc(item.id)
        .delete()
        .then(() => {
          updateArray(item);
        });
    } else {
      // update quantity
      setQuantity(quantity - 1);
      firestore()
        .collection('Cart')
        .doc(item.id)
        .update({
          quantity: parseInt(snapshot?.docs[0].data().quantity, 10) - 1,
        });
      handleTotal('minus', item);
    }
  };

  const redirectToProductDetails = () => {
    navigation.navigate('ProductDetails', {product: item});
  };

  return (
    <TouchableOpacity
      onPress={redirectToProductDetails}
      style={responsiveStyle.productView}>
      <Image source={{uri: item.image}} style={responsiveStyle.productImage} />
      <View style={responsiveStyle.productNameView}>
        <Text style={responsiveStyle.name} numberOfLines={3}>
          {item.name}
        </Text>
        <Text style={responsiveStyle.des} numberOfLines={4}>
          ({item.description})
        </Text>
        <View style={responsiveStyle.priceView}>
          <View style={responsiveStyle.priceView2}>
            <Text style={responsiveStyle.price}>₹{item.price}</Text>
            <View style={responsiveStyle.offView}>
              <Text style={responsiveStyle.offText}>20%</Text>
            </View>
          </View>
          <View style={responsiveStyle.quantityView}>
            <TouchableOpacity onPress={removeItem}>
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
    </TouchableOpacity>
  );
};

export default Cart;
