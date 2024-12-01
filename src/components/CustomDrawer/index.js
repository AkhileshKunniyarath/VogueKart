import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import colors from '../common/colors';
import style from './style';
import {useDimensionContext} from '../../context';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {signout} from '../../storage/action';

const CustomDrawer = () => {
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
    dimensions.isPortrait,
  );
  const navigation = useNavigation();
  const dispatch = useDispatch();
    const firstName = useSelector(state => state.firstName);
    const lastName = useSelector(state => state.lastName);
    const email = useSelector(state => state.email);
    const mobileNumber = useSelector(state => state.mobileNumber);
    const profileImage = useSelector(state => state.profileImage);

  const contents = [
    {
      itemId: 0,
      itemName: 'Home',
      navigateTo: 'MyFooter',
      icon: require('../../assets/images/home.png'),
    },
    {
      itemId: 1,
      itemName: 'Shop By Category',
      navigateTo: 'Categories',
      icon: require('../../assets/images/shopByCategory.png'),
    },
    {
      itemId: 2,
      itemName: 'Orders',
      navigateTo: 'Orders',
      icon: require('../../assets/images/orders.png'),
    },
    {
      itemId: 3,
      itemName: 'Your Wishlist',
      navigateTo: 'Wishlist',
      icon: require('../../assets/images/wishlist.png'),
    },
    {
      itemId: 4,
      itemName: 'Your Account',
      navigateTo: 'Account',
      icon: require('../../assets/images/account.png'),
    },
  ];

  const handleSignout = () => {
    dispatch(signout());
  };

  return (
    <View style={responsiveStyle.mainCon}>
      {/* profile */}
      <TouchableOpacity
        style={responsiveStyle.accountTouch}
        onPress={() => navigation.navigate('Account')}>
        <View style={responsiveStyle.accountImgView}>
          <Image
            source={
              profileImage === ''
                ? require('../../assets/images/profile-drawer.jpeg')
                : {uri: profileImage}
            }
            style={responsiveStyle.image}
          />
        </View>
        <View style={responsiveStyle.nameView}>
          <Text style={responsiveStyle.name}>
            {firstName} {lastName}
          </Text>
          <Text style={responsiveStyle.email}>{email}</Text>
        </View>
      </TouchableOpacity>

      {/* drawer  contents */}
      <View style={responsiveStyle.commonMargin}>
        <View>
          {contents.map((item, index) => {
            return (
              <TouchableOpacity
                key={item.itemId}
                onPress={() => navigation.navigate(item.navigateTo)}
                style={responsiveStyle.drawerView}>
                <View style={responsiveStyle.drawerInnerView}>
                  <Image source={item.icon} style={responsiveStyle.icon} />
                  <Text style={responsiveStyle.drawerText}>
                    {item.itemName}
                  </Text>
                </View>
                <Image
                  source={require('../../assets/images/arrow-right.png')}
                  style={responsiveStyle.iconSecond}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      {/* Logout */}
      <TouchableOpacity
        onPress={handleSignout}
        style={responsiveStyle.logoutView}>
        <Image
          source={require('../../assets/images/arrow-right.png')}
          style={responsiveStyle.icon}
        />
        <Text style={responsiveStyle.logoutText}>Logout</Text>
      </TouchableOpacity>

      {/*contact support*/}
      <View style={responsiveStyle.supportView}>
        <Text style={responsiveStyle.supportHead}>Contact Support</Text>
        <Text style={responsiveStyle.supportContent}>
          If you have any problem with the app, feel free to contact our 24
          hours support system
        </Text>
        <View style={responsiveStyle.supportTouch}>
          <Text style={responsiveStyle.supportText}>Contact</Text>
        </View>
      </View>
    </View>
  );
};
export default CustomDrawer;
