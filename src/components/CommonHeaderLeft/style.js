import {StyleSheet} from 'react-native';

const style = (width, height) =>
  StyleSheet.create({

    padding: {
      paddingLeft: 15,
    },
    image: {width: 20, height: 20, resizeMode: 'contain'},
  });

export default style;