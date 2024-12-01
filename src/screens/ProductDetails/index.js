import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import style from './style';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useEffect, useRef, useState} from 'react';
import CommonHeaderLeft from '../../components/CommonHeaderLeft';
import CommonHeaderRight from '../../components/CommonHeaderRight';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../components/common/colors';
import StarRating from 'react-native-star-rating-widget';
import MoreInfo from './components/MoreInfo';
import ExtraInfo from './components/ExtraInfo';
import ProductReview from './components/ProductReview';
import DeliveryInfo from './components/DeliveryInfo';
import ProductScroll from '../../components/ProductScroll';
import firestore from '@react-native-firebase/firestore';
import { updateCartCount, updateWishIds } from '../../storage/action';
import { useDispatch, useSelector } from 'react-redux';
import { useDimensionContext } from '../../context';
import Snackbar from 'react-native-snackbar';

const ProductDetails = props => {
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
    dimensions.isPortrait,
  );
  const cartCount = useSelector(state => state.cartCount);
  const userId = useSelector(state => state.userId);
  const wishIds = useSelector(state => state.wishIds);
  const navigation = useNavigation();
  const [ProductDetailsObj, setProductDetails] = useState({});
  const [rating, setRating] = useState(4);
  const scrollRef = useRef(null);
  const route = useRoute();
  const {product} = route.params;
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <CommonHeaderLeft type="back" />,
      headerRight: () => <CommonHeaderRight cart={true} share={true} />,
      title: '',
    });
  }, []);

  useEffect(() => {
    setProductDetails(product);
  }, [product]);

  const navigationNeeded = (val, item) => {
    if (val) {
      scrollRef.current.scrollTo({x: 0, y: 0, Animated: true});
      setProductDetails(item);
    }
  };

  const handleQuantity = type => {
    if (type === 'plus') {
      setQuantity(quantity + 1);
    } else {
      if (quantity === 1) {
        return;
      } else {
        setQuantity(quantity - 1);
      }
    }
  };

  const handleAddToCart = async () => {
    await firestore()
      .collection('Cart')
      .where('userId', '==', userId)
      .where('productId', '==', ProductDetailsObj)
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          firestore().collection('Cart').add({
            created: Date.now(),
            description: ProductDetailsObj.description,
            name: ProductDetailsObj.name,
            price: ProductDetailsObj.price,
            quantity: quantity,
            userId: userId,
            productId: ProductDetailsObj.id,
            image: ProductDetailsObj.image,
          });
          dispatch(updateCartCount(cartCount + 1));
        } else {
          firestore()
          .collection('Cart')
          .doc(snapshot?.docs[0].id)
          .update({
          quantity: parseInt(snapshot?.docs[0].data().quantity, 10)+ quantity,
        });
      }
      });
  };

  const addToWishlist = productDetails => {
    firestore()
      .collection('Wishlist')
      .where('userId', '==', userId)
      .where('productId', '==', productDetails.id)
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          firestore()
            .collection('Wishlist')
            .add({
              created: Date.now(),
              updated: Date.now(),
              description: productDetails.description,
              name: productDetails.name,
              price: productDetails.price,
              userId: userId,
              productId: productDetails.id,
              image: productDetails.image,
              categoryId: productDetails.categoryId,
            })
            .then(resp => {
              dispatch(updateWishIds([...wishIds, productDetails.id]));
              Snackbar.show({
                text: 'Item added to Wishlist',
                duration: Snackbar.LENGTH_SHORT,
                backgroundColor: colors.green,
                textColor: colors.white,
              });
            });
        } else {
          Snackbar.show({
            text: 'Item is in your Wishlist',
            duration: Snackbar.LENGTH_SHORT,
            backgroundColor: colors.green,
            textColor: colors.white,
          });
        }
      });
  };

  return (
    <View >
      <ScrollView ref={scrollRef}>
        {/* <View > */}
        <View style={responsiveStyle.heart}>
        <TouchableOpacity onPress={() => addToWishlist(ProductDetailsObj)}>
            <Image
              source={
                wishIds.includes(ProductDetailsObj.id)
                  ? require('../../assets/images/wishlist-product-inner.png')
                  : require('../../assets/images/wishlist-product-outline.png')
              }
              style={responsiveStyle.whishIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={responsiveStyle.productImagView}>
          <Image
            source={{uri: ProductDetailsObj.image}}
            style={responsiveStyle.productImage}
          />
        </View>
        <View style={responsiveStyle.mainView}>
          <View style={responsiveStyle.Padding}>
            <Text style={responsiveStyle.productName}>
              {ProductDetailsObj.name}
            </Text>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <StarRating rating={rating} onChange={setRating} />
              <Text style={responsiveStyle.ratingText}>(3 rating)</Text>
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={responsiveStyle.productPrice}>
                ₹{parseFloat(ProductDetailsObj.price).toFixed(2)}
              </Text>
              <Text style={responsiveStyle.offerText}>25% Off</Text>
            </View>

            <MoreInfo />

            <View style={responsiveStyle.descriptionView}>
              <Text style={responsiveStyle.descriptionHead}>
                ProductDetails
              </Text>
              <Text style={responsiveStyle.descriptionDetail}>
                {ProductDetailsObj.description}
              </Text>
            </View>
            {/* </View> */}
            <ExtraInfo />
            <ProductReview product={props} />
            <DeliveryInfo />
          </View>
          <ProductScroll isNavigationNeeded={navigationNeeded} />
        </View>
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          bottom: 0.0001,
          alignSelf: 'center',
          // padding: 5,
          backgroundColor: colors.dark_green,
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          
        }}>
        <View
          style={{
            padding: 10,
            borderRadius: 8,
            backgroundColor: colors.white,
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            left:50,
          }}>
          <TouchableOpacity onPress={() => handleQuantity('minus')}>
            <AntDesign name="minus" size={20} color={colors.black} />
          </TouchableOpacity>
          <Text
            style={{
              color: colors.black,
              fontFamily: 'Lato-Black',
              fontSize: 20,
              marginHorizontal: 15,
            }}>
            {quantity}
          </Text>
          <TouchableOpacity onPress={() => handleQuantity('plus')}>
            <Feather name="plus" size={20} color={colors.black} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity 
        style={{
          backgroundColor: colors.yellow_2,
          width:'50%',
          alignItems: 'center',

        }}
        onPress={handleAddToCart}>
          <Text
            style={{
              margin:21,
              overflow:'hidden',
              color: colors.black,
              fontFamily: 'Lato-Bold',
              fontSize: 22,
            }}>
            Add to Cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetails;
