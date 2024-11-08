import React, { useEffect } from 'react';
import style from './style';
import {Text, View, Image, FlatList, TouchableOpacity} from 'react-native';
import {useDimensionContext} from '../../context';
import CustomSearch from '../../components/CustomSearch';
import CommonHeaderLeft from '../../components/CommonHeaderLeft';
import { useNavigation } from '@react-navigation/native';

const Orders = () => {
  const navigation = useNavigation();
  const dimension = useDimensionContext();
  const responsiveStyle = style(dimension.windowWidth, dimension.windowHeight);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <CommonHeaderLeft />,
    });
  }, []);

  const ordersArray = [
    {
      id: '0',
      orderId: '#BUXG7V8',
      orderDate: '11/12/2023, 4:09 PM',
      address1: '1800 Elis St, San Fransisco, CA',
      address2: '854119, USA',
      price: '6843',
      quantity: '3',
    },
    {
      id: '1',
      orderId: '#HBOHB88',
      orderDate: '16/04/2022, 7:10 AM',
      address1: '1800 Alies St, San Fransisco, CA',
      address2: '854119, USA',
      price: '7547',
      quantity: '5',
    },
    {
      id: '2',
      orderId: '#NIFY86F',
      orderDate: '02/08/2022, 2:46 PM',
      address1: '1800 Elvis St, San Fransisco, CA',
      address2: '854119, USA',
      price: '356',
      quantity: '2',
    },
    {
      id: '3',
      orderId: '#JHVCUW7',
      orderDate: '15/02/2023, 5:32 PM',
      address1: '1800 Elsy St, San Fransisco, CA',
      address2: '854119, USA',
      price: '8464',
      quantity: '7',
    },
    {
      id: '4',
      orderId: '#JFH8643',
      orderDate: '31/05/2023, 2:37 PM',
      address1: '1800 Peter St, San Fransisco, CA',
      address2: '854119, USA',
      price: '3464',
      quantity: '4',
    },
  ];

  return (
    <View style={responsiveStyle.container}>
      <CustomSearch filter={true} />
      <FlatList
        data={ordersArray}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <TouchableOpacity style={responsiveStyle.flatView}>
              <View style={responsiveStyle.innerView}>
                <View>
                  <Text style={responsiveStyle.orderId}>
                    ID: {item.orderId}
                  </Text>
                  <Text style={responsiveStyle.orderedText}>
                    Ordered on:{item.orderDate}
                  </Text>
                  <Text style={responsiveStyle.address}>{item.address1}</Text>
                  <Text style={responsiveStyle.address}>{item.address2}</Text>
                  <Text style={responsiveStyle.paidText}>
                    Paid:{' '}
                    <Text style={responsiveStyle.blueText}>{item.price}</Text>,
                    Items:{' '}
                    <Text style={responsiveStyle.blueText}>
                      {item.quantity}
                    </Text>
                  </Text>
                </View>
                <Image
                  source={require('../../assets/images/map-image.jpg')}
                  style={responsiveStyle.mapImage}
                />
              </View>
              <View style={responsiveStyle.bottomView}>
                <Text style={responsiveStyle.bottomText}>Order Shipped</Text>
                <Text style={responsiveStyle.bottomText}>
                  Rate & Review Products
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item, index) => String(index)}
      />
    </View>
  );
};

export default Orders;