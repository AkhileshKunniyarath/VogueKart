import { StyleSheet } from "react-native";
import colors from "../common/colors";


const style = (width,height) => 
  StyleSheet.create({
    mainContainer: {
        height: height * 0.1, 
            flexDirection:'row', 
            alignItems: 'center',
            justifyContent:"space-around",
            backgroundColor: colors.white_lvl_2,
    },
    touchContainer: {
        justifyContent:'center', 
        alignItems:'center',
    },
    iconStyle: {
        width: width * 0.06,
        height: width * 0.06,
        resizeMode:'contain',
    },
    footerText: {
        color:colors.black, 
        fontSize: width * 0.035,
        fontFamily:'Lato-Bold',
        marginTop: width * 0.015,
    },
    dot: {
        fontSize: width * 0.26,
        color: colors.navy_blue_3,
        marginTop:  width * - 0.2,
        marginBottom:  width * -0.09,
        textAlign:'center'
    }
});

export default style;