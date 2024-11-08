import {Image, Text, TouchableOpacity, View} from 'react-native';
import colors from '../../../components/common/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDimensionContext} from '../../../context';
import StarRating from 'react-native-star-rating-widget';
import {useState} from 'react';
import style from './style';
import { useNavigation } from '@react-navigation/native';

const ProductReview = props => {
  const {product} =props;
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
    dimensions.isPortrait,
  );
  const navigation = useNavigation();
  const [rating, setRating] = useState(3.5);
  const handleRedirect = () => {
    navigation.navigate('Review', {product: product});
  };

  return (
    <View style={{marginVertical: 20}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginVertical: 5,
        }}>
        <Text
          style={{
            color: colors.black_lvl_3,
            fontFamily: 'Lato-Regular',
            fontSize: 18,
          }}>
          Product Review (1)
        </Text>
        <TouchableOpacity onPress={handleRedirect}>
          <Text
            style={{
              color: colors.green,
              fontFamily: 'Lato-Bold',
              fontSize: 16,
            }}>
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          padding: 15,
          backgroundColor: colors.gray,
          borderRadius: 14,
          marginVertical: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <Image
            source={require('../../../assets/images/profile-drawer.jpeg')}
            style={{
              width: 50,
              height: 50,
              resizeMode: 'contain',
              borderRadius: 25,
              overflow: 'hidden',
            }}
          />
          <View>
            <Text
              style={{
                color: colors.black,
                fontFamily: 'Lato-Bold',
                fontSize: 18,
                marginLeft: 10,
              }}>
              Ashok
            </Text>
            <StarRating starSize={20} rating={rating} onChange={() => {}} />
          </View>
        </View>
        <Text
          style={{
            color: colors.black_lvl_3,
            fontFamily: 'Lato-Regular',
            fontSize: 16,
          }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text>
      </View>
    </View>
  );
};

export default ProductReview;
