import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../components/common/colors';
const {width, height} = Dimensions.get('screen');

const style = StyleSheet.create({
  main:{
    flex:1,
  },
  container: {
    height: height,
    backgroundColor: colors.home_header,
  },
});

export default style;