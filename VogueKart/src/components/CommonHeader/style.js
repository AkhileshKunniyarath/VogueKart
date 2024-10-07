import { StyleSheet } from "react-native";
import colors from "../common/colors";


const style = (width,height) => 
  StyleSheet.create({
    container: {
        flexDirection: 'row', 
        justifyContent:'space-between',
        alignItems: 'center',
        height: width * 0.16,
        backgroundColor: colors.white_Bg,
        padding: width * 0.04,
    },
    sideIcon : {
        resizeMode: 'contain',
        height:width * 0.1,
        width:width * 0.1,
    },
    logo: {
        resizeMode: 'contain',
        height:width * 0.1,
        width:width * 0.35,
    },
});

export default style;