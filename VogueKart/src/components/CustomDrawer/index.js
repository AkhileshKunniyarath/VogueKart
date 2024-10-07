import React from "react"; 
import { Image, Text, TouchableOpacity, View } from "react-native";
import colors from "../common/colors";
import style from "./style";
import { useDimensionContext } from "../../context";
import { useNavigation } from "@react-navigation/native";

const CustomDrawer = () => {
    const dimensions = useDimensionContext();
    const responsiveStyle = style(
        dimensions.windowWidth,
        dimensions.windowHeight,
    );
    const navigation = useNavigation();
    const contents = [{
        itemId: 0,
        itemName: 'Home',
        navigateTo: 'Home',
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
    },{
        itemId: 4,
        itemName: 'Your Account',
        navigateTo: 'Account',
        icon: require('../../assets/images/account.png'),
    },]

    return ( 
      <View style={responsiveStyle.mainCon}>

        {/* profile */}
        <View 
          style={{
            flexDirection: 'row', 
            alignItems: "center", 
            borderBottomWidth: 1.1,
            paddingVertical: 15,
            }}>
            <View 
              style={{
                width: 75, 
                height: 75, 
                borderRadius: 75/2,
                backgroundColor: colors.white_lvl_3,
                justifyContent: 'center',
                alignItems: 'center',
                }}>
                <Text style={{fontSize: 25, fontFamily: 'Lato-Bold'}}>X</Text>
            </View>
            <View style={{marginLeft: 15, width: '80%',}}>
                <Text style={{fontFamily:'Lato-Bold',fontSize: 20,}}>Akhilesh k</Text>
                <Text style={{fontFamily:'Lato-Regular',fontSize: 15}}>
                    akhilesh.ktm123@gmail.com</Text>
            </View>
        </View>

        {/* drawer  contents */}
        <View style={{marginVertical: 15,}}>
            <View>
                {contents.map((item, index) => {
                    return(
                        <TouchableOpacity 
                        key={item.itemId}
                        onPress={() => navigation.navigate(item.navigateTo)}
                            style={responsiveStyle.drawerView}>
                        <View 
                            style={responsiveStyle.drawerInnerView}>
                        <Image source={item.icon} 
                            style={responsiveStyle.icon}/>
                        <Text 
                            style={responsiveStyle.drawerText}>
                            {item.itemName}
                        </Text>
                        </View>
                        <Image source={require('../../assets/images/arrow-right.png')}
                            style={responsiveStyle.iconSecond}/>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>

        {/* Logout */}
        <View 
            style={responsiveStyle.logoutView}>
                <Image source={require('../../assets/images/arrow-right.png')}
                style={responsiveStyle.icon}/>
                <Text 
                style={responsiveStyle.logoutText}>
                    Logout
                </Text>
            </View>
            {/*contact support*/}
            <View style={responsiveStyle.supportView}>
                <Text style={responsiveStyle.supportHead}>Contact Support</Text>
                <Text style={responsiveStyle.supportContent}>
                    If you have any problem with the app, feel free to contact our 24 hours support system
                </Text>
                <View style={responsiveStyle.supportTouch}>
                <Text style={responsiveStyle.supportText}>Contact</Text>
                </View>
            </View>
        </View>
    );
};
export default CustomDrawer;