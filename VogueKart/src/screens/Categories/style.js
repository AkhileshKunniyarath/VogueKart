import { Dimensions, StyleSheet } from "react-native";
import colors from "../../components/common/colors";


const {width, height} = Dimensions.get('screen');
const style = StyleSheet.create({
    container: {
        height: height,
        backgroundColor: colors.white_lvl_3,
    },
});

export default style;