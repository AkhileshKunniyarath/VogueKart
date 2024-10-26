import React, {useEffect} from 'react';
import style from './style';
import {Image, ScrollView, Text, View} from 'react-native';
import {useDimensionContext} from '../../context';
import OrderTotal from './components/OrderTotal';
import CommonButton from '../../components/CommonButton';
import {useNavigation} from '@react-navigation/native';
import CommonHeaderLeft from '../../components/CommonHeaderLeft';
import colors from '../../components/common/colors';

const Cart = () => {
  const dimensions = useDimensionContext();
  const navigation = useNavigation();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
    dimensions.isPortrait,
  );

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <CommonHeaderLeft />,
    });
  }, []);

  return (
    <ScrollView>
      <View style={responsiveStyle.container}>
        <View style={responsiveStyle.productView}>
          <Image
            source={require('../../assets/images/new-product-comboset-jewellery.jpg')}
            style={responsiveStyle.productImage}
          />
          <View style={responsiveStyle.productNameView}>
            <Text style={responsiveStyle.name} numberOfLines={1}>
              Pendant Set
            </Text>
            <Text style={responsiveStyle.dis} numberOfLines={1}>
              GIVA 925 Silver Rose Gold Pendant Set
            </Text>
            <View style={responsiveStyle.priceView}>
              <View style={responsiveStyle.priceView2}>
                <Text style={responsiveStyle.price}>₹ 2879</Text>
                <View style={responsiveStyle.offView}>
                  <Text style={responsiveStyle.offText}>20%</Text>
                </View>
              </View>
              <View style={responsiveStyle.quantityView}>
                <Text style={responsiveStyle.quantityText1}>-</Text>
                <Text style={responsiveStyle.quantityText2}>0</Text>
                <Text style={responsiveStyle.quantityText1}>+</Text>
              </View>
            </View>
          </View>
        </View>
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
        <OrderTotal />
        <CommonButton buttonText={'Proceed to Checkout'} />
      </View>
    </ScrollView>
  );
};

export default Cart;
