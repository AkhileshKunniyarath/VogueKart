import {Text, View} from 'react-native';
import colors from '../../../components/common/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useDimensionContext } from '../../../context';
import style from './style';

const MoreInfo = props => {
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
    dimensions.isPortrait,
  );

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: dimensions.windowWidth * 0.43,
          justifyContent: 'center',
          backgroundColor: colors.light_gray,
          padding: 15,
          borderRadius: 5,
        }}>
        <Text style={responsiveStyle.descriptionDetail}>
          1 set (2 items) /₹3000.00
        </Text>
        <AntDesign name="down" size={20} color={colors.gray} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: dimensions.windowWidth * 0.43,
          justifyContent: 'center',
          backgroundColor: colors.light_gray,
          padding: 15,
          borderRadius: 5,
        }}>
        <Text style={responsiveStyle.descriptionDetail}>Delivery Time</Text>
        <AntDesign name="down" size={20} color={colors.gray} />
      </View>
    </View>
  );
};

export default MoreInfo;
