import { StyleSheet } from "react-native";
import colors from "../common/colors";


const style = (width,height) => 
  StyleSheet.create({
    container: {
        justifyContent:'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    innerView : {
        flexDirection: 'row',
        alignItems: 'center',

    },
    search: {
        borderWidth : 1,
        borderColor : colors.navy_blue,
        backgroundColor: colors.lightblue,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems:'center',
        borderRadius: 20,
        padding: 5,
        width: width * 0.95,
    },
    searchIcon : {
        width: 35,
        height: 35,
        resizeMode: 'contain',
    },
    textInput: {
        fontFamily: 'Lato-Regular',
        fontSize: 18,
        marginHorizontal: 10,
        color: colors.black,
    },
    micIcon : {
        width: 25,
        height: 25,
        resizeMode: 'contain',
        marginRight: 10,
    },
});

export default style;