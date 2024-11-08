import {Image, ScrollView, Text, View} from 'react-native';
import {useDimensionContext} from '../../context';
import style from './style';
import {useEffect, useRef, useState} from 'react';
import CommonHeaderLeft from '../../components/CommonHeaderLeft';
import CommonHeaderRight from '../../components/CommonHeaderRight';
import {useNavigation} from '@react-navigation/native';
import StarRating from 'react-native-star-rating-widget';
import colors from '../../components/common/colors';
import ActionSheet from 'react-native-actions-sheet';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';

const Review = () => {
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
    dimensions.isPortrait,
  );
  const navigation = useNavigation();
  const [rating, setRating] = useState(3.5);
  const  actionSheetRef = useRef(null); 


  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <CommonHeaderLeft type="back" />,
      headerRight: () => <CommonHeaderRight plus={true}  handlePlusIcon={openActionSheet}/>,
      title: 'Reviews',
    });
  }, []);


  const openActionSheet = () => {
    actionSheetRef.current.show();
  }
  return (
    <ScrollView 
    showsVerticalScrollIndicator={false}
    style={responsiveStyle.container}>
      <View
        style={responsiveStyle.ReviewBox}>
        <View
          style={responsiveStyle.ImageView}>
          <Image
            source={require('../../assets/images/profile-drawer.jpeg')}
            style={responsiveStyle.image}
          />
          <View>
            <Text
              style={responsiveStyle.userName}>
              Ashok
            </Text>
            <StarRating starSize={20} rating={rating} onChange={setRating} />
          </View>
        </View>
        <Text
          style={responsiveStyle.reviewText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text>
      </View>
      <ActionSheet ref={actionSheetRef}>
        <View style={responsiveStyle.ActionSheetView}>
          <Text style={responsiveStyle.ActionSheetText}>Write a Review</Text>
          <StarRating starSize={40} rating={rating} onChange={setRating} />
          <CustomTextInput
          placeholder="Write here"
          multiline={true}
          />
          <CustomButton 
          type="primary"
          buttonText ={'Submit Review'}
          />
        </View>

      </ActionSheet>
    </ScrollView>
  );
};

export default Review;
