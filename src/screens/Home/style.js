import {StyleSheet, Dimensions} from 'react-native';
import colors from "../../components/common/colors";

const {width, height} = Dimensions.get('screen');
const style = StyleSheet.create({
  container: {
    height: height,
    backgroundColor: colors.alice_blue,
  },
  main:{
    flex:1,
  },
  footText:{
    fontFamily:'Lato-Bold',
    fontSize:25,
    color:colors.anchor,
    padding:15,
  },
  footButton:{
    padding:15,
    backgroundColor:colors.navy_blue_2,
    width:'45%',
    marginHorizontal:15,
    justifyContent:'center',
    alignItems:'center',
    marginBottom:30,
    borderRadius: 10,
  },
  footButtonText:{
    color:colors.white,
    fontFamily:'Lato-Bold',
    fontSize:18,
  }
});

export default style;