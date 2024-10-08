import React, { useEffect } from "react"; 
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useDimensionContext } from "../../context";
import style from "./style";

const CustomFooter = ({state, descriptors, navigation}) => {
    const dimensions = useDimensionContext();
    const responsiveStyle = style(
        dimensions.windowWidth,
        dimensions.windowHeight,
    );

    return ( 
      <View 
        style={responsiveStyle.mainContainer}>
                {state.routes.map((route, index) => {
                    const isFocused = state.index === index;
                    const icon =
                    route.name === 'Home' 
                    ? require('../../assets/images/home.png') 
                    : route.name === 'Categories' 
                    ? require('../../assets/images/categories.png')
                    : route.name === 'Search'
                    ? require('../../assets/images/search.png')
                    : route.name === 'Offers'
                    ? require('../../assets/images/offers.png')
                    : require('../../assets/images/cart.png');
                    return(
                <TouchableOpacity 
                    key={index}
                    onPress={() => navigation.navigate(route.name)}
                    style={responsiveStyle.touchContainer}>
                    <Image 
                        source={icon} 
                        style={responsiveStyle.iconStyle} 
                    />
                    <Text 
                      style={responsiveStyle.footerText}>
                    {route.name}
                    </Text>
                    {isFocused ? <Text style={responsiveStyle.dot}>.</Text> : null}

                </TouchableOpacity>
            );
        })}
      </View>
    );
};
export default CustomFooter;
