import { Dimensions, StyleSheet } from "react-native";
import colors from "../common/colors";


const {width,height} = Dimensions.get('screen');
const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.lightblue,
        padding: width * 0.015,
        borderRadius: 8,
        marginVertical: width * 0.025,
        borderWidth: 1,
        borderColor: colors.gray,
    },
    textInput: {
        color: colors.black_lvl_3,
        fontSize: 17,
        fontFamily:'Lato-Regular',
    },
    icon: {
        width: width * 0.075,
        height: height * 0.025,
        resizeMode: 'contain',
    }
});

export default style;