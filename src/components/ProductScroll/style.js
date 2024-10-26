import {StyleSheet} from 'react-native';
import colors from '../common/colors';

const style = (width, height) =>
  StyleSheet.create({
    container: {
        padding:15, 
        backgroundColor: colors.cream_2,
    },
    productView : {
      width: width* 0.45,
      height: height* 0.31,
      padding: 6,
      marginLeft: 2,
      marginVertical: 3,
      borderRadius: 8,
      borderWidth: 0.5,
      borderColor: colors.black,
      backgroundColor: colors.white,
      justifyContent: 'center',
    },
    whishIcon : {
      width: width* 0.05,
      height: width* 0.05,
      resizeMode: 'contain',
      alignSelf: 'flex-end',
      alignItems:'center',
    },
    productImage: {
      width: width* 0.43,
      height: width* 0.425,
      resizeMode: 'contain',
      alignItems:'center',
      alignSelf: 'center',
    },
    productName : {
      fontFamily: 'Lato-Black',
      fontSize: 20,
      color: colors.black,
      alignSelf: 'center',
    },
    productDis : {
      fontFamily: 'Lato-Italic',
      fontSize: 13,
      color: colors.black,
    },
    priceView : {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    price : {
      fontFamily: 'Lato-Bold',
      fontSize: 18,
      color: colors.black,

    },
    addView : {
      padding: 5,
      backgroundColor: colors.lightGreen,
      borderRadius: 5,
    },
    addText : {
      fontFamily: 'Lato-Bold',
      fontSize: 20,
      color: '#fff',
    },
  });

export default style;