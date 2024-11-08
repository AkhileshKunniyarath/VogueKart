import { StyleSheet } from "react-native";
import colors from "../../components/common/colors";

const style = (width,height) =>  
    StyleSheet.create({
    container: {
        height: height ,
    },
    TopBg: {
        width:width,
        height:height * 0.17,
        resizeMode:'cover',
    },
    ScrollView: {
        flex: 1,
        marginTop: -width * 0.025,
        backgroundColor: colors.white_Bg,
        borderTopLeftRadius: width * 0.05,
        borderTopRightRadius: width * 0.05,
        overflow: 'hidden',
        padding: width * 0.03,
    },
    logo: {
        width: width * 0.5,
        height: width * 0.1,
        resizeMode: 'contain',
        marginTop: width *0.05,
    },
    loginText: {
        fontFamily: 'Lato-Bold',
        fontSize: 22,
        color: colors.anchor,
        marginTop: width * 0.1,
        marginVertical: width * 0.05 ,
    },
    getStarted: {
        fontFamily: 'Lato-Regular',
        fontSize: 18,
        color: colors.steel,
        textAlign: 'center',
    },
    errorText: {
        fontFamily: 'Lato-Italic',
        fontSize: 16,
        color: colors.red,
    },
});

export default style;