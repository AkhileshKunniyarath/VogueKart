import {Image, TouchableOpacity, View} from 'react-native';
import style from './style';
import {useNavigation} from '@react-navigation/native';
import {useDimensionContext} from '../../context';

const CommonHeaderLeft = props => {
  const navigation = useNavigation();
  const dimension = useDimensionContext();
  const responsiveStyle = style(dimension.windowWidth, dimension.windowHeight);

  const handleClick = () => {
    if (props.type === 'back') {
      navigation.goBack();
    } else {
      navigation.toggleDrawer();
    }
  };

  return (
    <View>
      <TouchableOpacity style={responsiveStyle.padding} onPress={handleClick}>
        <Image
          source={
            props.type === 'back'
              ? require('../../assets/images/left-arrow-header.png')
              : require('../../assets/images/left-drawer-icon.jpg')
          }
          style={responsiveStyle.image}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CommonHeaderLeft;