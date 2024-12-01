import {StyleSheet} from 'react-native';
import colors from '../common/colors';

const style = (width, height) =>
  StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 10,
    },
    newContainer:{
      flexDirection:'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginVertical: 10,
    },
    search: {
      borderWidth: 0.75,
      borderColor: colors.black,
      backgroundColor: colors.white_lvl_1,
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      borderRadius: 15,
      padding: 4,
      width: width * 0.96,
    },
    newStyle:{
      borderWidth: 0.75,
      borderColor: colors.black,
      backgroundColor: colors.alice_blue,
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      borderRadius: 15,
      padding: 4,
      width: width * 0.83,
    },
    searchIcon: {
      width: 40,
      height: 32,
      resizeMode: 'contain',
    },
    micIcon : {
      // position: 'absolute',
      // right:10,
      width: 40,
      height: 24,
      resizeMode: 'contain',
    },
    textInput: {
      flex: 1,
      fontFamily: 'Lato-Regular',
      fontSize: 17,
      width:width * 0.60,
      marginLeft:width * 0.01,
      color:colors.black_lvl_2
    },
    innerView: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    filter:{
      fontFamily:'Lato-Bold',
      fontSize:18,
      color: colors.black_lvl_3,
    },
  });

export default style;