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
        right:-10,
        top:-10,
        backgroundColor:colors.black_lvl_3,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50,
        overflow:'hidden',
        paddingHorizontal:6.5,
        paddingVertical:2,
        // alignSelf:'center',
        zIndex:9,
      },
      count: {
        color:colors.white,
        fontFamily:'Lato-Black',
        fontSize:16,
        textAlign:'center',
      },
});

export default style;