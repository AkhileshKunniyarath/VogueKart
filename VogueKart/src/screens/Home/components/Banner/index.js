import React from "react"; 
import { FlatList, Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import style from './style';
import { useDimensionContext } from "../../../../context";


const Banner = () => {
    const dimensions = useDimensionContext();
    const responsiveStyle = style(
        dimensions.windowWidth,
        dimensions.windowHeight,
    );
    const bannerItems = [
        {
            id : 0,
            head: '',
            content: '',
            image : require('../../../../assets/images/ban_sale.png'),
        },
        {
            id : 1,
            head: '',
            content: '',
            image : require('../../../../assets/images/ban_jackets.png'),
        },
        {
            id : 2,
            head: '',
            content: '',
            image : require('../../../../assets/images/ban_watch.png'),
        },
    ];
    return (
        <View>
            <FlatList 
        data={bannerItems}
        horizontal
        showsHorizontalScrollIndicator = {false}
        renderItem={({item, index}) => {
            return (
                <View style={responsiveStyle.Container}>
                    <ImageBackground source={item.image} style={responsiveStyle.banner} >
                    <View style={responsiveStyle.innerView}>
                        <TouchableOpacity style={responsiveStyle.touchInner}>
                        <Text style={responsiveStyle.head}>{item.head}</Text>
                        <Text style={responsiveStyle.content}>{item.content}</Text>
                        <TouchableOpacity style={responsiveStyle.touch}>
                        <Text style={responsiveStyle.touchText}>Shop now</Text>
                        </TouchableOpacity>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
                </View>
                
                );
            }} 
        />
        </View>
        
    );
};

export default Banner;