import {StyleSheet} from 'react-native';
import colors from '../common/colors';

const style = (width, height, isPortrait) =>
  StyleSheet.create({
    container:{
        borderRadius:15,
        backgroundColor: colors.navy_blue_2,
        padding:15,
        width: width* 0.85,
        justifyContent:'center',
        alignItems:'center',
        margin: width* 0.04,
    },
    text:{
        color:colors.white,
        fontFamily:'Lato-Bold',
        fontSize:24,
    },
  });

export default style;