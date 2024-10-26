import { Dimensions, StyleSheet } from "react-native";
import colors from "../common/colors";


const {width,height} = Dimensions.get('screen');
const style = StyleSheet.create({
    button: {
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    icon: {
        width: width * 0.07,
        height: width * 0.07,
        marginRight: width * 0.07,
    },

});

export default style;