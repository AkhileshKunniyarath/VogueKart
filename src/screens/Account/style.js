import {StyleSheet} from 'react-native';
import colors from '../../components/common/colors';

const style = (width, height, isPortrait) =>
  StyleSheet.create({
    container: {
      height: height,
      padding: 20,
    },
    head: {
      fontFamily: 'Lato-Bold',
      fontSize: 25,
      color: colors.black,
      textAlign: 'center',
    },
    userImage: {
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 10,
    },
    bigImage: {
      width: width * 0.8,
      height: width * 0.8,
    },
    image: {
      width: width * 0.4,
      height: width * 0.4,
      borderRadius: width * 0.2,
    },
    modalBg: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.7)',
    },
    edit: {
      width: 30,
      height: 30,
      resizeMode: 'contain',
    },
    editTouch: {
      position: 'absolute',
      right: 6,
      bottom: 2,
    },
    close: {
      backgroundColor: colors.white,
      borderRadius: 25,
      position: 'absolute',
      zIndex: 9,
      right: 24,
      top: height * 0.23,
    },
    closeOptions: {
      backgroundColor: colors.white,
      borderRadius: 25,
      position: 'absolute',
      zIndex: 9,
      right:width * -0.1,
      bottom: 112,
    },
    chooseOptions: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.black_shade,
    },
    chooseView: {
      backgroundColor:colors.white,
      borderRadius: 10,
      height: 100,
      width: 220,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    cameraHolder: {
      backgroundColor: colors.blue,
      height: 50,
      width: 75,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    galleryHolder: {
      backgroundColor: colors.blue,
      height: 50,
      width: 75,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    camera: {
      height: 35,
      width: 35,
    },
    gallery: {
      height: 35,
      width: 35,
    },
  });

export default style;