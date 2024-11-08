import {StyleSheet} from 'react-native';
import colors from '../../../../components/common/colors';

const style = (width, height) =>
  StyleSheet.create({
    Container: {
      backgroundColor: colors.blue_2,
      borderRadius: 15, 
      padding: 10,
      margin: 1,
      marginVertical: 5,
    },
    image: {
      width: 60,
      height: 60,
      resizeMode: 'contain',
    },
    contentView: {
      backgroundColor: colors.white,
      padding: 15,
      marginHorizontal: 8,
      borderRadius: 100,
      justifyContent: 'center',
    },
    headText: {
      fontFamily: 'Lato-Bold',
      fontSize: 19,
      color: colors.black,
      marginBottom :width *0.02,
      marginLeft: width *0.02,
    },
  });

export default style;