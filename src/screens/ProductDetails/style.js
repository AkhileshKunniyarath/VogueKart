import {StyleSheet} from 'react-native';
import colors from '../../components/common/colors';

const style = (width, height, isPortrait) => 
    StyleSheet.create({
          // productContainer: {
            // position: 'relative', // Allows child elements to use absolute positioning
            // width: width,
            // alignItems: 'center',
            // backgroundColor: colors.white_lvl_1,
            // marginBottom: 15,
          // },
          heart: {
            position: 'absolute',
            top: 15, // Adjust to position the icon as needed
            right: 30, // Adjust to position the icon as needed
            zIndex: 1, // Ensures the icon is on top of the image
          },
          whishIcon: {
            width: width * 0.07,
            height: width * 0.07,
            resizeMode: 'contain',
            // alignSelf: 'flex-end',
            // alignItems:'center',
            // position: 'absolute',
            // zIndex: 1,
            // top: 10, // Adjust to position the icon as needed
            // right: -10, // Adjust to position the icon as needed
          },
          productImagView : {
            width: width,
            height: height*0.39,
            marginVertical: 2.5,
            justifyContent: 'center',
            alignItems: 'center',
            overflow : 'hidden',
            backgroundColor: colors.white_Bg,
            // borderBottomWidth: 0.5,
          },
          productImage: {
            width: width*0.95,
            height: width*0.89,
            resizeMode: 'contain',
            marginTop: 15,
            overflow: 'hidden'
          },
          mainView : {
            backgroundColor: colors.white,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            width:width,
            shadowColor: colors.black,
            shadowOffset: {width: 2, height: 2},
            shadowOpacity: 0.2,
            shadowRadius: 5,
            elevation: 15,
            marginBottom: 60,
          },
          Padding: {
            padding: width*0.05,
          },
          productName : {
            fontFamily: 'Lato-Bold',
            fontSize : 22,
            color: colors.black,
            marginBottom: 10,
          },
          ratingText : {
            fontFamily: 'Lato-Regular',
            fontSize : 20,
            color: colors.black_lvl_3,
            marginLeft: 10,
          },
          productPrice : {
            fontFamily: 'Lato-Bold',
            fontSize : 28,
            color: colors.black_lvl_3,
            marginVertical: 10,

          },
          offerText : {
            fontFamily: 'Lato-Black',
            fontSize : 20,
            color: colors.green,
            marginLeft: 10,
          },
          descriptionView : {
            borderBottomWidth:1,
            borderBottomColor:colors.gray_2,
            paddingVertical: 10,
          },
          descriptionHead : {
            fontFamily: 'Lato-Bold',
            fontSize : 19,
            color: colors.black,
          },
          descriptionDetail: {
            fontFamily: 'Lato-Regular',
            fontSize : 16,
            color: colors.gray,
          },
    });
export default style;
