import {Text, View} from 'react-native';
import {useDimensionContext} from '../../../context';
import CustomTextInput from '../../../components/CustomTextInput';
import style from './style';


const DeliveryInfo = () => {
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
    dimensions.isPortrait,
  );
  return (
    <View>
      <Text
        style={responsiveStyle.DeliveryHead}>
        Check Delivery
      </Text>
      <Text
        style={responsiveStyle.DlvyCommonText}>
        Enter PinCode to Check Delivery date/pickup option.
      </Text>
      <CustomTextInput
        type={'default'}
        check={true}
        handleText={() => console.log('Hello')}
        placeholder={'Pin Code'}
      />
      <Text
        style={responsiveStyle.DlvyCommonText}>
        Free Delivery on orders above 200.00.
      </Text>
      <Text
        style={responsiveStyle.DlvyCommonText}>
        Cash-on Delivery available.
      </Text>
      <Text
        style={responsiveStyle.DlvyCommonText}>
        Easy 21 Day return and exchange.
      </Text>
    </View>
  );
};

export default DeliveryInfo;
