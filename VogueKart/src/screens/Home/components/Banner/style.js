import { StyleSheet } from "react-native";
import colors from "../../../../components/common/colors";


const style = (width,height) => 
  StyleSheet.create({
    Container: {
        backgroundColor: colors.alice_blue,
        width: width* 0.96,
        height: width*0.48,
        justifyContent: 'center',
    },
    banner : {
      width : width * 0.94,
      height :  width * 0.41,
      resizeMode : 'contain',
      borderRadius : 10,
      overflow : 'hidden',
      margin : 0,
    },
    innerView : {
      padding: 15,
    },
    head : {
      fontFamily : 'Lato-Black',
      fontSize:18,
    },
    content : {
      fontFamily:'Lato-Regular',
      fontSize: 18,
    },
    touchInner : {
      backgroundColor: colors.transparent,
      width : width * 0.94,
      height: width * 0.41,
      borderRadius: 10,
      overflow: 'hidden',
    },
    touch : {
      padding: 5,
      justifyContent : 'center',
      alignItems: 'center',
      width: width * 0.17,
      marginVertical: width * 0.08,
      borderColor: colors.white,
      borderWidth: 2,
      marginLeft : width * 0.03,
    },
    touchText : {
      fontFamily: 'Lato-Bold',
      fontSize: 16,
      color: colors.white,
    },
});

export default style;