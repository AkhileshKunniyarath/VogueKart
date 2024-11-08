import {StyleSheet} from 'react-native';
import colors from '../../components/common/colors';

const style = (width, height, isPortrait) =>
  StyleSheet.create({
    container: {
        borderWidth:1,
        borderRadius: 12,
        borderColor: colors.red,
        padding : 10,
        alignItems:'center',
        backgroundColor:colors.tranRed,
    },
    title: {
        color: colors.red,
        fontFamily : 'Lato-Bold',
        fontSize : 20,
    },
  });

export default style;
