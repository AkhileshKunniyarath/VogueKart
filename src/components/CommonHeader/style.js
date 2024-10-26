import { StyleSheet } from "react-native";
import colors from "../common/colors";


const style = (width, height , isPortrait) => 
  StyleSheet.create({
    container: {
        flexDirection: 'row', 
        justifyContent:'space-between',
        alignItems: 'center',
        height: isPortrait ? width * 0.18 : width*0.09,
        backgroundColor: colors.white_Bg,
        padding: width * 0.04,
        elevation: 8,
        marginTop: -7,
       

    },
    sideIcon : {
        resizeMode: 'contain',
        height:isPortrait? width * 0.12 : width*0.06,
        width: isPortrait? width * 0.14 : width*0.08,
    },
    logo: {
        resizeMode: 'contain',
        height:isPortrait?  width * 0.4 : width*0.15,
        width:isPortrait? width * 0.4: width* 0.15,
    },
});

export default style;