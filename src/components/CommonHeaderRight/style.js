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
        right: 4,
        top: -8,
        backgroundColor:colors.tranRed,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50,
        overflow:'hidden',
        paddingHorizontal:6.5,
        paddingVertical:2.5,
        zIndex:9,
      },
      count: {
        color:colors.red,
        fontFamily:'Lato-Black',
        fontSize:15,
        textAlign:'center'
      },
      flexStyle : {
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
      },
  });

export default style;