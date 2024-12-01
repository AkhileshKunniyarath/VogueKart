import {StyleSheet} from 'react-native';
import colors from '../../components/common/colors';

const style = (width, height) =>
  StyleSheet.create({
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
  },
  productView: {
    width: '100%',
    padding: 10,
    marginRight: 15,
    marginVertical: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  productImage: {
    width: 110,
    height: 110,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginVertical: 3,
    marginLeft: -10,
  },
  productNameView: {
    borderLeftWidth: 1,
    paddingHorizontal: 8,
    marginRight: 100,
  },
  name: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#000',
  },
  dis: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#000',
  },
  priceView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  priceView2:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: '#000',
  },
  offView: {
    padding: 5,
    borderRadius: 15,
    backgroundColor: '#48301f',
    marginHorizontal: 8,
  },
  offText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
    color: '#fff',
    marginHorizontal: 10,
  },
  quantityView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#845b49',
    overflow: 'hidden',
    padding: 5,
  },
  quantityText1:{
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
    color: '#000',
    marginHorizontal: 6,
  },
  quantityText2:{
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: '#48301f',
    marginHorizontal: 6,
  }

});

export default style;