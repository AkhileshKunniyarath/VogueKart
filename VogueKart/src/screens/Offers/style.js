import {StyleSheet} from 'react-native';
import colors from '../../components/common/colors';

const style = (width, height) =>
  StyleSheet.create({
    main: {
      flex: 1,
    },
    container: {
      height: height,
    },
    contentStyle: {
      alignSelf: 'center', marginVertical: height * 0.05,
    },
    renderView: {
      flexDirection: 'row',
      alignItems: 'center',
      width: width,
      alignSelf: 'center',
      justifyContent: 'center',
      marginBottom: height * 0.018,
    },
    offCircleView:{
      marginRight: (-height * 0.025) / 2, 
      zIndex: 99,
    },
    circleRight:{
      width: 25,
      height: 25,
      borderRadius: 25 / 2,
      backgroundColor: colors.white_Bg,
    },
    circleCenter:{
      width: 25,
      height: 25,
      borderRadius: 25 / 2,
      backgroundColor: colors.white_Bg,
      marginTop: -25 / 2,
    }
  });

export default style;