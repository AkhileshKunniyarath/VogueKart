import {useEffect, useState} from 'react';
import {ActivityIndicator, Modal, ScrollView, Text, View} from 'react-native';
import CommonHeaderLeft from '../../components/CommonHeaderLeft';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDimensionContext} from '../../context';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import style from './style';
import colors from '../../components/common/colors';
import CustomButton from '../../components/CustomButton';
import firestore from '@react-native-firebase/firestore';
import Snackbar from 'react-native-snackbar';

const OrderDetails = () => {
  const dimension = useDimensionContext();
  const responsiveStyle = style(dimension.windowWidth, dimension.windowHeight);
  const navigation = useNavigation();
  const route = useRoute();
  const {item} = route.params;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <CommonHeaderLeft
          type="back"
          action={() => navigation.navigate('Orders')}
        />
      ),
      title: 'Order Summary',
    });
  }, []);

  const reOrder = async () => {
    try {
      setLoading(true);
      const smallId = Math.random();
      await firestore()
        .collection('Orders')
        .add({
          orderId: String(smallId).slice(4, 12).toUpperCase(),
          created: Date.now(),
          updated: Date.now(),
          orderStatus: 'Ordered',
          totalAmount: item.totalAmount,
          address: item.address,
          userId: item.userId,
          paymentMethod: 'online',
          cartItems: item.cartItems,
          userName: item.userName,
          userEmail: item.userEmail,
          userPhone: item.userPhone,
          expDelDate: '',
        })
        .then(async res => {
          if (res) {
            setTimeout(() => {
              Snackbar.show({
                text: 'Your Order is  successfully placed ',
                duration: Snackbar.LENGTH_LONG,
                backgroundColor: colors.green,
                textColor: colors.white,
              });
              setLoading(false);
            }, 1000);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={responsiveStyle.container}>
      <Modal animationType="fade" transparent={true} visible={loading}>
        <View
          style={{
            height: '100%',
            width: '100%',
            backgroundColor: 'rgba(0,0,0,0.7)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator size={'large'} color={colors.white} />
        </View>
      </Modal>
      <ScrollView
        contentContainerStyle={{paddingBottom: 150}}
        showsVerticalScrollIndicator={false}
        style={responsiveStyle.scrollView}>
        {/* section 1  Order Status*/}
        <View style={responsiveStyle.sect_1mainView}>
          <Feather name="box" size={50} color={colors.white} />
          <View style={responsiveStyle.sect_1View}>
            <Text style={responsiveStyle.orderIdText}>
              Order Id: #{item?.orderId ?? 'UF5HK68'}
            </Text>
            <Text style={responsiveStyle.orderedText}>
              {item?.orderStatus ?? ''}
            </Text>
          </View>
        </View>

        {/* section 2  Item details*/}
        <View style={responsiveStyle.sect_2containView}>
          <Text style={responsiveStyle.ItemHedText}>Items:</Text>
          {item?.cartItems &&
            item.cartItems.map((ele, index) => {
              return (
                <View key={index} style={responsiveStyle.sect_2mainView}>
                  <View style={responsiveStyle.sect_2quantityView}>
                    <Text style={responsiveStyle.quantityText}>
                      {ele.quantity}
                    </Text>
                  </View>
                  <FontAwesome5
                    name="star-of-life"
                    size={16}
                    color={colors.black_lvl_2}
                  />

                  <View style={responsiveStyle.sect_2Name_DesView}>
                    <Text style={responsiveStyle.eleNameText}>{ele.name}</Text>
                    <Text style={responsiveStyle.eleDesText}>
                      {ele.description}
                    </Text>
                  </View>
                  <View style={responsiveStyle.sect_2priceView}>
                    <Text style={responsiveStyle.priceText}> ₹{ele.price}</Text>
                  </View>
                </View>
              );
            })}
        </View>

        {/* section 3 Payment Details */}

        <View style={responsiveStyle.sect_3containView}>
          <Text style={responsiveStyle.payDetailText}>Payment Details</Text>
          <View style={responsiveStyle.sect_3mainView}>
            {/* left side  */}
            <View style={responsiveStyle.sect_3firstView}>
              <Text style={responsiveStyle.bagTotal}>Bag Total</Text>
              <Text style={responsiveStyle.couponDiscount}>
                Coupon Discount
              </Text>
              <Text style={responsiveStyle.Delivery}>Delivery</Text>
            </View>

            {/* right side */}
            <View style={responsiveStyle.sect_3secondView}>
              <Text style={responsiveStyle.totalPrice}>₹1000</Text>
              <Text style={responsiveStyle.applyCoupon}>Apply Coupon</Text>
              <Text style={responsiveStyle.deliveryCharge}>₹50.00</Text>
            </View>
          </View>

          {/* total  */}
          <View style={responsiveStyle.sect_3TotalAmountView}>
            <Text style={responsiveStyle.TotalAmount}>Total Amount</Text>
            <Text style={responsiveStyle.TotalRs}>₹{item.totalAmount}</Text>
          </View>
        </View>

        {/* section 4  */}

        {/* address  */}
        <View style={responsiveStyle.sect_4addView}>
          <Text style={responsiveStyle.addressHead}>Address:</Text>
          <Text style={responsiveStyle.address}>Akhilesh K </Text>
          <Text style={responsiveStyle.address}>Kunniyarath house,</Text>
          <Text style={responsiveStyle.address}>Thiruvazhiyode po, 679514</Text>
        </View>

        {/* Payment Method  */}
        <View style={responsiveStyle.sect_4payMethodContainView}>
          <Text style={responsiveStyle.payMethod}>Payment Method:</Text>
          <View style={responsiveStyle.sect_4iconView}>
            <FontAwesome name="cc-visa" size={30} color={colors.navy_blue} />
            <View style={responsiveStyle.sect_4payMethodView}>
              <Text style={responsiveStyle.card}> **** **** **** 7867 </Text>
              <Text style={responsiveStyle.online}>
                {item?.paymentMethod ?? ''}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={responsiveStyle.ButtonView}>
        <CustomButton
          type="primary"
          handleButtonPress={reOrder}
          buttonText={'Reorder'}
        />
      </View>
    </View>
  );
};

export default OrderDetails;
