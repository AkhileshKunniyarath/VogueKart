import React from "react";
import { Image, Text, TouchableOpacity, Dimensions } from "react-native";
import style from './style';
import colors from "../common/colors";

const {width,height} = Dimensions.get('screen');
const CustomButton = props => {
    const {type, handleButtonPress, buttonText,icon} = props;
    return(
        <TouchableOpacity 
        onPress={handleButtonPress}
        style={[
            style.button,
            {
                backgroundColor: type === 'primary' ? colors.navy_blue_2 : colors.gray_2 ,
                marginVertical: type === 'primary' ? width * 0.08 : width * -0.06 ,
                padding: type === 'primary' ? width * 0.042 : width * 0.03,
                // marginTop: type === 'primary' ? height * 0.05 :  height * 0.005,
                marginBottom: type === 'secondary' ? height * 0.039 :  height * 0.02,
            },
            ]}>
                {type !== 'primary' ? <Image source={icon} style={style.icon} /> : null}
            <Text 
            style={[
                {
                    color : type === 'primary' ? colors.white : colors.black_lvl_3,
                    fontFamily: type === 'primary' ? 'Lato-Bold' : 'Lato-Regular' ,
                    fontSize: type === 'primary' ? 20 : 16 ,
                },
            ]}>
                    {buttonText}</Text>
        </TouchableOpacity>
    );
};

export default CustomButton;