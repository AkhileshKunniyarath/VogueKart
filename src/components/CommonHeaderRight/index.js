import {Image, Share, Text, TouchableOpacity, View} from 'react-native';
import style from './style';
import {useNavigation} from '@react-navigation/native';
import {useDimensionContext} from '../../context';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../common/colors';
import { useSelector } from 'react-redux';

const CommonHeaderRight = props => {
  const navigation = useNavigation();
  const {cartCount} = useSelector(state => state);
  const dimension = useDimensionContext();
  const responsiveStyle = style(dimension.windowWidth, dimension.windowHeight);

  const handleClick = async type => {
    if (type === 'Cart') {
      navigation.navigate('Cart');
    } else {
      if (type === 'share') {
        const result = await Share.share({
          message:
            'React Native | A framework for building native apps using React',
        });
        if (result.action === Share.sharedAction) {
          if (result.activityType) {
            // shared with activity type of result.activityType
          } else {
            // shared
          }
        } else if (result.action === Share.dismissedAction) {
          // dismissed
        }
      }
    }
  };

  return (
    <View style={responsiveStyle.flexStyle}>
      {props.share ? (
        <TouchableOpacity style={responsiveStyle.padding} onPress={() => handleClick('share')}>
          <EvilIcons name="share-google" size={38} color={colors.black} />
        </TouchableOpacity>
      ) : null}
      {props.cart ? (
        <TouchableOpacity style={responsiveStyle.padding} onPress={() => handleClick('Cart')}>
          <>
            <View style={responsiveStyle.cartCount}>
              <Text style={responsiveStyle.count}>{cartCount}</Text>
            </View>
            <Image
              source={require('../../assets/images/cart.png')}
              style={responsiveStyle.image}
            />
          </>
        </TouchableOpacity>
      ) : null}
      {props.plus ? (
        <TouchableOpacity
          style={responsiveStyle.padding}
          onPress={props.handlePlusIcon}>
          <Feather name="plus-square" size={25} color={colors.black} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default CommonHeaderRight;
