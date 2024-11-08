import {StyleSheet} from 'react-native';
import colors from '../../../../components/common/colors';

const style = (width, height, isPortrait) =>
  StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 15,
        borderBottomColor: colors.black,
        borderBottomWidth: 2,
      },
      head:{
        fontFamily: 'Lato-Bold',
        fontSize: 20,
        color: colors.black,
        lineHeight: 50,
      },
      content:{
        fontFamily: 'Lato-Regular',
        fontSize: 16,
        color: colors.black,
        lineHeight: 30,
      },
      endContent:{
        fontFamily: 'Lato-Regular',
        fontSize: 16,
        color: colors.black,
        lineHeight: 30,
        marginBottom: 10,
      },
      headEnd:{
        fontFamily: 'Lato-Bold',
        fontSize: 20,
        color: colors.white,
        lineHeight: 50,
      },
      total:{
        fontFamily: 'Lato-Bold',
        fontSize: 20,
        color: colors.black,
        lineHeight: 50,
      }

  });

export default style;