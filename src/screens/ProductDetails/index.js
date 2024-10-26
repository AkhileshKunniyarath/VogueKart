import {Text, View} from 'react-native';
import {useDimensionContext} from '../../context';
import style from './style';
import { useRoute } from '@react-navigation/native';

const ProductDetails = () => {
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
    dimensions.isPortrait,
  );
  const route = useRoute();
  const {product} = route.params;
  console.warn(product);


  return (
    <View>
      <Text>ProductDetails</Text>
    </View>
  );
};

export default ProductDetails;
