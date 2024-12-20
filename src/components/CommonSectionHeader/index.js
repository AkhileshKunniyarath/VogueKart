import {Text, View} from 'react-native';
import style from './style';
import { useDimensionContext } from '../../context';
import { useNavigation } from '@react-navigation/native';

const CommonSectionHeader = props => {
    const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
    dimensions.isPortrait,
  );
  const navigation = useNavigation();
  const handleNavigate = () => {
    navigation.navigate('Shop', {type: 'all'});
  };
  return (
    <View style={responsiveStyle.headView}>
      <View>
        <Text style={responsiveStyle.headText}>{props.head}</Text>
        <Text style={responsiveStyle.contentText}>{props.content}</Text>
      </View>
      <Text style={responsiveStyle.seeAll} onPress={handleNavigate}>{props.rightText}</Text>
    </View>
  );
};

export default CommonSectionHeader;