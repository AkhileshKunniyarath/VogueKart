import React from "react"; 
import { Image, TextInput, View } from "react-native";
import style from './style';
import { useDimensionContext } from "../../context";
import colors from "../common/colors";
 
const CustomSearch = () => {
    const dimensions = useDimensionContext();
    const responsiveStyle = style(
        dimensions.windowWidth,
        dimensions.windowHeight,
    );
    return (
        <View style= {responsiveStyle.container}>
            <View style={responsiveStyle.search}>
                <View style={responsiveStyle.innerView}>
                <Image source={require('../../assets/images/search_header.png')} 
                style={responsiveStyle.searchIcon}
                />
                <TextInput placeholder="Search Here" 
                placeholderTextColor={colors.black_lvl_2}
                cursorColor={colors.navy_blue}
                style={responsiveStyle.textInput}
                selectionColor={colors.navy_blue_2}
                />
                </View>
                <Image source={require('../../assets/images/voice.png')} 
                style={responsiveStyle.micIcon}
                />
            </View>
        </View>
    );
};
export default CustomSearch;