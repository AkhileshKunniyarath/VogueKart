import { StyleSheet } from "react-native";
import colors from "../common/colors";


const style = (width,height, isPortrait) => 
  StyleSheet.create({
    mainContainer: {
        height:  isPortrait ? height * 0.085 : height * 0.15, 
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
        width:  isPortrait ? width * 0.06 : width * 0.03,
        height: isPortrait ? width * 0.06 : width * 0.03,
        resizeMode:'contain',
    },
    footerText: {
        color:colors.black, 
        fontSize: isPortrait ? 16 : 16,
        fontFamily:'Lato-Bold',
        marginTop: isPortrait ? width * 0.01 : width * 0.002,
    },
    dot: {
        fontSize: isPortrait ? width * 0.26 : width * 0.13,
        color: colors.navy_blue_3,
        marginTop: isPortrait ? width * - 0.2 : width * - 0.1,
        marginBottom: isPortrait ?  width * -0.09 : width * -0.03,
        textAlign:'center'
    },
    cartCount: {
        position:'absolute',
        right:-13,
        top:-10,
        backgroundColor:colors.green,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50,
        overflow:'hidden',
        paddingHorizontal:8,
        paddingVertical:1,
        zIndex:9,
      },
      count: {
        color:colors.white,
        fontFamily:'Lato-Bold',
        fontSize:14,
        textAlign:'center'
      },
});

export default style;