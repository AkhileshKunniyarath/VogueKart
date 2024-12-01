import {StyleSheet} from 'react-native';
import colors from '../../components/common/colors';

const style = (width, height) =>
  StyleSheet.create({
    container: {
      height: height* 0.94,
      width: width,
    },
    flatView:{
      backgroundColor: colors.blue_2,
      borderRadius: 12,
      padding: 10,
      marginTop:15,
      marginHorizontal: 15,
    },
    innerView:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomColor: colors.pebble,
      borderBottomWidth: 2,
      paddingBottom: 10,
      // backgroundColor: colors.green,
      overflow: 'hidden',
      padding: 10,
    },
    orderId:{
      color: colors.black,
      fontFamily: 'Lato-Bold',
      fontSize: 16,
      lineHeight: 20,
    },
    mapImage:{
      width: 100,
      height: 100,
      borderRadius: 15,
      resizeMode: 'cover',
      // position:'absolute',
    },
    bottomView:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 15,
    },
    bottomText:{
      color: colors.black,
      fontFamily: 'Lato-Regular',
      fontSize: 16,
    },
    blueText:{
      color: colors.navy_blue,
      fontFamily: 'Lato-Bold',
      fontSize: 16,
      lineHeight: 30,

    },
    address:{
      color: colors.iron,
      fontFamily: 'Lato-Regular',
      fontSize: 15,
      lineHeight: 20,
      overflow: 'hidden',
      
    },
    paidText:{
      color: '#000',
      fontFamily: 'Lato-Regular',
      fontSize: 16,
    },
    orderedText:{
      color: colors.orange,
      fontFamily: 'Lato-Regular',
      fontSize: 15,
      lineHeight: 20,

    },
  });

export default style;