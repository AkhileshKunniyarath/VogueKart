import {Image, Text, TouchableOpacity, View} from 'react-native';
import style from './style';
import {useNavigation} from '@react-navigation/native';
import {useDimensionContext} from '../../context';

const CommonHeaderRight = props => {
  const navigation = useNavigation();
  const dimension = useDimensionContext();
  const responsiveStyle = style(dimension.windowWidth, dimension.windowHeight);

  const handleClick = () => {
      navigation.navigate('Cart');
  };

  return (
    <>
    {props.cart ? (
      <TouchableOpacity style={responsiveStyle.padding} onPress={handleClick}>
        <>
        <View style={responsiveStyle.cartCount}>
            <Text style={responsiveStyle.count}>3</Text>
        </View>
        <Image 
          source={require('../../assets/images/cart.png')}
          style={responsiveStyle.image} 
          />
        </>
      </TouchableOpacity>
      ) : null}
    </>
  );
};

export default CommonHeaderRight;