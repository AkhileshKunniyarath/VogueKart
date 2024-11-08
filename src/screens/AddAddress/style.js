import {StyleSheet} from 'react-native';
import colors from '../../components/common/colors';

const style = (width, height, isPortrait) => 
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor:colors.gray_2,
        },
        textInput : {
            fontFamily: 'Lato-Regular',
            borderRadius: 8,
            fontSize: 16,
            borderWidth: 1,
            borderColor: colors.navy_blue,
            width: 50,
            height: 50,
            // marginTop: 70,
            margin:10,
            alignSelf : 'center',
            backgroundColor: colors.alice_blue,  
            zIndex:1, 
            // flex:1,         
        },
        description: {
            fontFamily: 'Lato-Regular',
            fontSize: 16,
            // backgroundColor:colors.black,
            
        },
        mapView: {
            height: height*0.4,
            width: width,
            justifyContent: 'center',
            alignItems: 'center',
            // marginTop:75,
        },
        TouchView: {
            padding:15,
            marginVertical: 20,
            flexDirection: 'row',
            alignItems: 'center',
        },
        TouchText: {
            fontFamily: 'Lato-Bold',
            fontSize: 18,
            color:colors.black,
        },
        iconView: {
            borderRadius:8,
            padding:10,
            marginRight: 10,
            backgroundColor:colors.navy_blue_2
        }
    });

export default style;
