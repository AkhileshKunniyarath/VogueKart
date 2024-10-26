import {StyleSheet} from 'react-native';

const style = (width, height) =>
  StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    banner: {
      width: width * 0.94,
      height: width * 0.43,
      resizeMode: 'contain',
      overflow: 'hidden',
      marginVertical: 5,
      marginHorizontal: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default style;
