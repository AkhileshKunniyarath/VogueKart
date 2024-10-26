import {StyleSheet} from 'react-native';
import colors from '../../../../components/common/colors';

const style = (width, height) =>
  StyleSheet.create({
    main: {
      flex: 1,
      marginBottom: 10,
    },
    title: {
      fontFamily: 'Lato-Bold',
      fontSize: 20,
      color: colors.black,
      marginLeft: 10,
    },
    flatList: {
      alignItems: 'center',
      marginVertical: 15,
      height: height * 0.12,
      backgroundColor : colors.Electric_Purple,
    },
    imageCon: {
      alignItems: 'center',
      justifyContent: 'center',
      width: width * 0.2,
      height: height * 0.095,
      resizeMode: 'contain',
      borderRadius: 50,
      overflow: 'hidden',
      marginRight: 8,
      backgroundColor : colors.white,
    },
    image: {
      width: width * 0.19,
      height: height * 0.09,
      resizeMode: 'contain',
      borderRadius: 50,
      overflow: 'hidden',
    },
  });

export default style;