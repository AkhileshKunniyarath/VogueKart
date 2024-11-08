import {StyleSheet} from 'react-native';
import colors from '../../components/common/colors';

const style = (width, height, isPortrait) =>
  StyleSheet.create({
    container: {
      marginTop:15,
      backgroundColor:colors.gray_2
    },
    FlatList: {
      marginBottom: 10,
    },
    productView: {
      width: width,
      height: width * 0.45,
      marginVertical: 0.6,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.white,
      overflow: 'hidden',
      borderRadius: 5,
      // paddingBottom: 10,

    },
    productImage: {
      width: width * 0.4,
      height: height * 0.13,
      resizeMode: 'contain',
      alignSelf: 'center',
      overflow: 'hidden',
    },
    productNameView: {
      paddingHorizontal: 1.2,
      width: width * 0.545,
      height: width * 0.44,
      overflow: 'hidden',
      paddingLeft: 5,
    },
    name: {
      fontFamily: 'Lato-Bold',
      fontSize: 21,
      color: colors.black,
      lineHeight: 30,
    },
    des: {
      fontFamily: 'Lato-Regular',
      fontSize: 16,
      color: colors.black,
      lineHeight: 20,
    },
    priceView: {
      flexDirection: 'column',
      alignItems: 'center',
      marginVertical: 8,
      width: width * 0.545,
      height: width * 0.35,
    },
    priceView2: {
      width: width * 0.545,
      height: width * 0.1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 8,
    },
    price: {
      fontFamily: 'Lato-Regular',
      fontSize: 28,
      color: colors.black,
    },
    offView: {
      padding: 6,
      borderRadius: 15,
      backgroundColor: colors.brown,
      marginHorizontal: 10,
      borderWidth: 1,
    },
    offText: {
      fontFamily: 'Lato-Bold',
      fontSize: 16,
      color: colors.white,
      marginHorizontal: 5,
    },
    quantityView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      borderRadius: 10,
      borderWidth: 1,
      overflow: 'hidden',
      padding: 3,
    },
    quantityText1: {
      fontFamily: 'Lato-Bold',
      fontSize: 30,
      color: colors.black,
      marginHorizontal: 10,
    },
    quantityText2: {
      fontFamily: 'Lato-Bold',
      fontSize: 20,
      color: colors.red,
      marginHorizontal: 8,
    },
    renderView: {
      width:width,
      height:width*0.3,
      flexDirection: 'row',
      alignItems: 'center',
      width: width,
      alignSelf: 'center',
      justifyContent: 'center',
      paddingTop:20,
      backgroundColor:colors.white_Bg,
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
    OrderTotal: {
      backgroundColor: colors.white_Bg,
      marginBottom:5,
      padding:10,
    },
  });

export default style;