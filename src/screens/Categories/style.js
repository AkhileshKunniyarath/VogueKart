import {StyleSheet} from 'react-native';
import colors from '../../components/common/colors';

const style = (width, height) =>
  StyleSheet.create({
    main: {
      flex: 1,
      backgroundColor: colors.alice_blue,
    },
    container: {
      height: height,

    },
    catImage: {
      width: width * 0.22,
      height: width * 0.2,
      resizeMode: 'contain',
      margin: 10,
      
    },
    catFlatstyle: {
      padding: 10,
      backgroundColor: colors.green_2,
      width: width * 0.3,
      justifyContent: 'center',
      alignItems: 'center',
    },
    catTouch: {
      borderBottomColor: colors.black,
      borderBottomWidth: 0.8,
    },
    rowstyle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: colors.home_header
    },
    backImage: {
      width: width * 0.7,
      height: height * 0.17,
      resizeMode: 'contain',
      justifyContent: 'center',
      alignSelf: 'center',
      borderRadius: 8,
      overflow: 'hidden',
    },
    catName: {
      fontFamily: 'Lato-Bold',
      fontSize: 22,
      textAlign: 'center',
      padding: 2,
      color:colors.black,
    },
    proContaioner: {
      width:width*0.33,
      padding: 5,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    proImage: {
      width: width * 0.3,
      height: width * 0.3,
      resizeMode: 'contain',
      alignSelf: 'center',
    },
    prostyle: {
      justifyContent: 'center',
      padding: 10,
    },
    imageBg: {
      backgroundColor: colors.black,
      padding: 1,
      justifyContent: 'center',
      // borderRadius: 15,
    },
    catProName: {
      fontFamily: 'Lato-Bold',
      fontSize: 18,
      textAlign: 'center',
      padding: 2,
      color: colors.black,
    },
    catPrice: {
      fontFamily: 'Lato-Regular',
      fontSize: 14,
      textAlign: 'center',
      color: colors.black,
    },
  });

export default style;