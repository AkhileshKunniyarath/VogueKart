import {StyleSheet} from 'react-native';
import colors from '../../components/common/colors';

const style = (width, height, isPortrait) =>
  StyleSheet.create({
    container: {
      padding: 15,
    },
    ReviewBox: {
      padding: 15,
      backgroundColor: colors.white,
      borderRadius: 14,
      marginVertical: 10,
    },
    ImageView: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    image: {
      width: 50,
      height: 50,
      resizeMode: 'contain',
      borderRadius: 25,
      overflow: 'hidden',
    },
    userName: {
      color: colors.black,
      fontFamily: 'Lato-Bold',
      fontSize: 18,
      marginLeft: 10,
    },
    reviewText: {
      color: colors.black_lvl_3,
      fontFamily: 'Lato-Regular',
      fontSize: 16,
    },
    ActionSheetView: {
      padding: 20,
    },
    ActionSheetText: {
      color: colors.black,
      fontSize: 22,
      fontFamily: 'Lato-Black',
      lineHeight:50,
    },
  });

export default style;
