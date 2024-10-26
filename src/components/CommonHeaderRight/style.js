import {StyleSheet} from 'react-native';
import colors from '../common/colors';

const style = (width, height) =>
  StyleSheet.create({
    padding : {
      paddingRight : 15,
    },
    image: {
        width: 30, 
        height: 30, 
        resizeMode: 'contain',
    },
    cartCount: {
        position:'absolute',
        right: 5,
        top:-5,
        backgroundColor:colors.green,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50,
        overflow:'hidden',
        paddingHorizontal:6.5,
        paddingVertical:2.5,
        zIndex:9,
      },
      count: {
        color:colors.white,
        fontFamily:'Lato-Bold',
        fontSize:14,
        textAlign:'center'
      },
  });

export default style;