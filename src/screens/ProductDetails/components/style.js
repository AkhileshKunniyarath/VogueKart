import {StyleSheet} from 'react-native';
import colors from '../../../components/common/colors';

const style = (width, height, isPortrait) =>
  StyleSheet.create({
    descriptionHead: {
      fontFamily: 'Lato-Bold',
      fontSize: 19,
      color: colors.black,
    },
    descriptionDetail: {
      fontFamily: 'Lato-Regular',
      fontSize: 16,
      color: colors.gray,
    },
    DeliveryHead : {
      fontFamily: 'Lato-Bold',
      fontSize: 18,
      color: colors.black,
      marginBottom: 10,
    },
    DlvyCommonText: {
      fontFamily: 'Lato-Regular',
      fontSize: 16,
      color: colors.gray,
      lineHeight:25,
    },
  });

export default style;
