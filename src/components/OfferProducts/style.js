import {StyleSheet} from 'react-native';
import colors from '../common/colors';

const style = (width, height) =>
  StyleSheet.create({
    container: {
        padding: 10, 
        backgroundColor: colors.alice_blue,
    },
    // headView: {
    //   flexDirection: 'row',
    //   alignItems: 'center',
    //   justifyContent: 'space-between',
    // },
    productView: {
      width: width * 0.95,
      // padding: 10,
      // marginRight: 15,
      marginVertical: 3,
      // borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.white,
      overflow: 'hidden',
      borderTopLeftRadius: 30,
      borderBottomLeftRadius: 70,
      borderTopRightRadius: 70,
      borderBottomRightRadius: 30,
      borderWidth: 0.5,
      borderColor: colors.black,
    },
    productImage: {
      width: width * 0.24,
      height: height* 0.12,
      resizeMode: 'contain',
      alignSelf: 'center',
      marginVertical: 10,
      marginLeft: -5,
    },
    productNameView: {
      borderLeftWidth: 1.5,
      paddingHorizontal: 12,
      marginRight: 100,
    },
    name: {
      fontFamily: 'Lato-Bold',
      fontSize: 20,
      color: colors.black,
    },
    dis: {
      fontFamily: 'Lato-Regular',
      fontSize: 16,
      color: colors.black,
    },
    priceView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 10,
    },
    priceView2:{
      flexDirection: 'row',
      alignItems: 'center',
    },
    price: {
      fontFamily: 'Lato-Bold',
      fontSize: 18,
      color: colors.black,
    },
    offView: {
      padding: 5,
      borderRadius: 15,
      backgroundColor: colors.brown,
      marginHorizontal: 10,
      borderWidth: 1,
    },
    offText: {
      fontFamily: 'Lato-Bold',
      fontSize: 16,
      color: colors.white,
      marginHorizontal: 10,
    },
    quantityView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      borderRadius: 15,
      borderWidth: 1,
      // borderColor: '#ec97ab',
      overflow: 'hidden',
      padding: 6,
    },
    quantityText1:{
      fontFamily: 'Lato-Bold',
      fontSize: 16,
      color: colors.black,
      marginHorizontal: 8,
    },
    quantityText2:{
      fontFamily: 'Lato-Bold',
      fontSize: 18,
      color: colors.red,
      marginHorizontal: 8,
    }
  });

export default style;