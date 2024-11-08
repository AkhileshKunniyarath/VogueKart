import {StyleSheet} from 'react-native';
import colors from '../../../../components/common/colors';

const style = (width, height) =>
  StyleSheet.create({
    container: {
      marginVertical: 2,
      backgroundColor: colors.Electric_Purple,
    },
    head: {
      fontFamily: 'Lato-Black',
      fontSize: 20,
      textAlign: 'center',
      color: colors.black,
    },
    flatList: {
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 15,
    },
    innerView: {
      // justifyContent:'center',
      alignItems:'center',
      marginRight: 10,
      marginBottom: 10,
      backgroundColor: colors.alice_blue,
      width: width* 0.22,
      height: height* 0.13,
      borderRadius: 5,
    },
    itemName: {
      fontFamily: 'Lato-BoldItalic',
      fontSize: 14,
      color: colors.black,
    },
    image: {
      width: width* 0.2,
      height: width* 0.2,
      resizeMode: 'cover',
      marginTop:2,
    },
    imageView: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
      // backgroundColor: colors.black,
    },
  });

export default style;