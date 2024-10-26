import {StyleSheet} from 'react-native';
import colors from '../../components/common/colors';

const style = (width, height, isPortrait) =>
  StyleSheet.create({
    catItem: {
      fontFamily: 'Lato-Bold',
      fontSize:  isPortrait ? 18 : 14,
      color: colors.navy_blue_2,
    },
    catItemView: {
      margin: 10,
    },
    categories: {
      backgroundColor: colors.home_header,
    },
    contentStyle: {
      justifyContent: 'space-around',
      alignItems: 'center',
    },

    mainContainer: {
        width: width,
        height:isPortrait? height*0.94 :height*0.71,
    },
    CatContainer: {
        width: width,
        height: isPortrait? height*0.045 :height*0.08,
    },
    productContainer: {
      paddingHorizontal: 15,
      marginBottom: isPortrait? width*0.28 :width*0.08,
    },
    productView: {
      width: '100%',
      padding: 10,
      marginRight: 15,
      marginVertical: 5,
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
      width : '75%' ,
      borderLeftWidth: 1,
      paddingHorizontal: 12,
      marginRight: 100,
      overflow: 'hidden',
    },
    name: {
      fontFamily: 'Lato-Bold',
      fontSize: 20,
      color: colors.black,
    },
    des: {
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
  });
export default style;
