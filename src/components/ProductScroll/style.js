import {StyleSheet} from 'react-native';
import colors from '../common/colors';

const style = (width, height) =>
  StyleSheet.create({
    container: {
      padding: width * 0.05,
      backgroundColor: colors.cream_2,
      position: 'relative',
    },
    productView: {
      width: width * 0.42,
      height: height * 0.28,
      padding: 6,
      marginLeft: 2,
      marginVertical: 3,
      borderRadius: 8,
      borderWidth: 0.5,
      borderColor: colors.black,
      backgroundColor: colors.white,
      justifyContent: 'center',
    },
    whishIcon: {
      width: width * 0.05,
      height: width * 0.05,
      resizeMode: 'contain',
      // alignSelf: 'flex-end',
      // alignItems:'center',
      position: 'absolute',
      zIndex: 1,
      bottom: 85, // Adjust to position the icon as needed
      right: 8, // Adjust to position the icon as needed
    },
    productImage: {
      width: width * 0.43,
      height: width * 0.4,
      resizeMode: 'contain',
      // alignItems:'center',
      alignSelf: 'center',
    },
    productName: {
      fontFamily: 'Lato-Black',
      fontSize: 20,
      color: colors.black,
      alignSelf: 'center',
      paddingBottom: 3,
    },
    productDis: {
      fontFamily: 'Lato-Italic',
      fontSize: 13,
      color: colors.black,
    },
    priceView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    price: {
      fontFamily: 'Lato-Bold',
      fontSize: 18,
      color: colors.black,
    },
    addView: {
      padding: 4,
      backgroundColor: colors.brown,
      borderRadius: 5,
    },
    addText: {
      fontFamily: 'Lato-Bold',
      fontSize: 20,
      color: colors.white,
    },
  });

export default style;
