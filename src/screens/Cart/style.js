import {StyleSheet} from 'react-native';
import colors from '../../components/common/colors';

const style = (width, height, isPortrait) =>
  StyleSheet.create({
    container: {
      height: height,
      padding:15,
    },
    productView: {
      width: '100%',
      padding: 10,
      marginRight: 15,
      marginVertical: 15,
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.white,
      overflow: 'hidden',
    },
    productImage: {
      width: 120,
      height: 120,
      resizeMode: 'contain',
      alignSelf: 'center',
      marginVertical: 10,
      marginLeft: -10,
    },
    productNameView: {
      borderLeftWidth: 1,
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
    priceView2: {
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
      backgroundColor: colors.navy_blue_2,
      marginHorizontal: 10,
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
      borderColor: colors.black,
      overflow: 'hidden',
      padding: 5,
    },
    quantityText1: {
      fontFamily: 'Lato-Bold',
      fontSize: 16,
      color: colors.black,
      marginHorizontal: 6,
    },
    quantityText2: {
      fontFamily: 'Lato-Bold',
      fontSize: 18,
      color: colors.brown,
      marginHorizontal: 6,
    },
    renderView: {
      flexDirection: 'row',
      alignItems: 'center',
      width: width,
      alignSelf: 'center',
      justifyContent: 'center',
      marginBottom: height * 0.018,
    },
    offCircleView: {
      marginRight: (-height * 0.025) / 2, 
      zIndex: 99,
    },
    circleRight:{
      width: 25,
      height: 25,
      borderRadius: 25 / 2,
      backgroundColor: colors.white_Bg,
    },
    circleCenter:{
      width: 25,
      height: 25,
      borderRadius: 25 / 2,
      backgroundColor: colors.white_Bg,
      marginTop: -25 / 2,
    },
  });

export default style;