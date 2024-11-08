import {StyleSheet} from 'react-native';
import colors from '../../components/common/colors';

const style = (width, height) =>
  StyleSheet.create({
    container: {
      height: height*0.95,
      padding: 15,
      // paddingHorizontal: 15,
    },
    removeView:{
      position:'absolute',
      top: 5,
      right:8,
      overflow:'hidden',
    },
    remove:{
      width:20,
      height:20,
      resizeMode:'contain',
    },
    productView: {
      alignSelf: 'center',
      borderRadius: 15,
      flexDirection: 'row',
      alignItems: 'center',
      width: width * 0.95,
      padding: 15,
      backgroundColor: colors.white,
      marginTop: 10,
      marginBottom:15,
    },
    cartIcon: {
      width: 35,
      height: 35,
      resizeMode: 'contain',
      marginRight: 15,
    },
    cartCount:{
      position:'absolute',
      right:10,
      top:-10,
      width:23,
      height:23,
      backgroundColor: colors.green,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10,
      overflow:'hidden',
      zIndex:9,
    },
    count:{
      color:colors.white,
        fontFamily:'Lato-Black',
        fontSize:16,
        textAlign:'center',
    },
    productImage: {
      width: 90,
      height: 90,
      resizeMode: 'contain',
      borderRadius: 10,
    },
    secondView: {
      borderLeftColor: colors.iron,
      borderLeftWidth: 1.5,
      padding: 10,
      marginLeft: 10,
      width:width*0.65,
      overflow:'hidden',
    },
    title: {
      fontFamily: 'Lato-Bold',
      fontSize: 18,
      color: colors.black,
      lineHeight: 35,
    },
    price:{
      fontFamily: 'Lato-Bold',
      fontSize: 15,
      color: colors.black,
    },
    desc: {
      fontFamily: 'Lato-Regular',
      fontSize: 14,
      color: colors.pebble,
    },
    bottomView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 5,
    },
    offView: {
      borderRadius: 15,
      backgroundColor: colors.navy_blue_2,
      padding: 5,
      marginHorizontal: 5,
    },
    offText: {
      fontFamily: 'Lato-Regular',
      fontSize: 14,
      color: colors.white,
    },
    cartView: {
      borderRadius: 15,
      borderColor: colors.brown,
      borderWidth: 1,
      padding: 5,
      marginHorizontal: 5,
    },
    cartText: {
      fontFamily: 'Lato-Regular',
      fontSize: 14,
      color: colors.brown,
    },
  });

export default style;