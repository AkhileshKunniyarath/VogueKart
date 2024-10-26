import {Text, View} from 'react-native';
import style from './style';
import { useDimensionContext } from '../../context';

const CommonButton = props => {
    const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
    dimensions.isPortrait,
  );
  return (
    <View style={responsiveStyle.container}>
      <Text style={responsiveStyle.text}>{props.buttonText}</Text>
    </View>
  );
};

export default CommonButton;