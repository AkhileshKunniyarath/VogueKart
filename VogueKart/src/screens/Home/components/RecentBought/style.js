import { StyleSheet } from "react-native";
import colors from "../../../../components/common/colors";


const style = (width,height) => 
  StyleSheet.create({
    Container: {
        backgroundColor: colors.blue_2,
        borderRadius: 15, 
        padding: 10,
        margin: 1,
    },
    head: {
        fontFamily: 'Lato-Bold',
        fontSize: 19,
        color: colors.black,
        marginBottom :width *0.02,
        marginLeft: width *0.02,
    },
    contentView : {
        backgroundColor: colors.white,
        padding: 15,
        marginHorizontal: 8,
        borderRadius: 100,
        justifyContent: 'center',
    },
    image : {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
    
});

export default style;