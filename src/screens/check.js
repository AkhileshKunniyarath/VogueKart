import React, {useEffect, useRef, useState} from 'react';
import style from './style';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import CommonHeader from '../../components/CommonHeader';
import CustomSearch from '../../components/CustomSearch';
import Banner from '../../components/Banner';
import RecentBought from './components/RecentBought';
import ShowCategory from './components/ShowCategory';
import ProductScroll from '../../components/ProductScroll';
import OfferProducts from '../../components/OfferProducts';
import firestore from '@react-native-firebase/firestore';
import {useDispatch, useSelector} from 'react-redux';
import {updateWishIds} from '../../storage/action';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import Snackbar from 'react-native-snackbar';
import { useDimensionContext } from '../../context';

const Home = () => {

  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
  );


  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const userId = useSelector(state => state.userId);
  const dispatch = useDispatch();
  const scrollRef = useRef(null);
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const [qun, setQun] = useState(0);


  useEffect(() => {
    if (isFocused) {
      scrollRef.current.scrollTo({y: 0, animated: true});
    }
  }, [isFocused]);

  useEffect(() => {
    getWishIds();
  }, []);

  const getWishIds = async () => {
    await firestore()
      .collection('Wishlist')
      .where('userId', '==', userId)
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          dispatch(updateWishIds([]));
        } else {
          const idArray = [];
          snapshot?.docs.forEach(document => {
            idArray.push(document?.data().productId);
          });
          dispatch(updateWishIds(idArray));
        }
      });
  };

  const handleSearch = async text => {
    setSearchText(text);
    if (text.trim() === '') {
      setSearchResults([]); // Reset results when input is empty
      return;
    }
    await firestore()
      .collection('Products')
      .orderBy('name')
      .startAt(text)
      .endAt(text + '\uf8ff')
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          setSearchResults([]);
          Snackbar.show({
            text: 'No result found! ',
            duration: Snackbar.LENGTH_LONG,
            backgroundColor: 'red',
            textColor: 'white',
          }); 
        } else {
          const results = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
          }));
          setSearchResults(results);
        }
      });
  };
  const handleProduct = (item) => {
    navigation.navigate('ProductDetails', {product: item});
  };

  const addToCart = async () => {
    await firestore()
      .collection('Cart')
      .where('userId', '==', userId)
      .where('productId', '==', item.id)
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          firestore()
            .collection('Cart')
            .add({
              created: '' + Date.now() + '',
              description: item.description,
              name: item.name,
              price: item.price,
              quantity: 1,
              userId: userId,
              productId: item.id,
              image: item.image,
            });
          dispatch(updateCartCount(cartCount + 1));
        } else {
          firestore()
            .collection('Cart')
            .doc(snapshot?.docs[0].id)
            .update({
              quantity: parseInt(snapshot?.docs[0].data().quantity, 10) + 1,
            });
        }
      });
  };

  return (
    <View style={responsiveStyle.main}>
      <CommonHeader />
      <ScrollView
        ref={scrollRef}
        style={responsiveStyle.containerHome}
        nestedScrollEnabled
        showsVerticalScrollIndicator={false}>
        <CustomSearch
          placeholder="Search for products..."
          searchHandler={handleSearch}
        />
        {searchResults.length > 0 ? (
          <View>
            {searchResults.map(item => (
              <Text key={item.id}>
                <TouchableOpacity
                  onPress={() => handleProduct(item)}
                  style={responsiveStyle.productView}>
                  <Image
                    source={{uri: item.image}}
                    style={responsiveStyle.productImage}
                  />
                  <View style={responsiveStyle.productNameView}>
                    <Text style={responsiveStyle.name} numberOfLines={1}>
                      {item.name}
                    </Text>
                    <Text style={responsiveStyle.dis} numberOfLines={1}>
                      {item.description}
                    </Text>
                    <View style={responsiveStyle.priceView}>
                      <View style={responsiveStyle.priceView2}>
                        <Text style={responsiveStyle.price}>
                          ₹ {item.price}
                        </Text>
                        <View style={responsiveStyle.offView}>
                          <Text style={responsiveStyle.offText}>25%</Text>
                        </View>
                      </View>
                      <View style={responsiveStyle.quantityView}>
                        <TouchableOpacity
                          onPress={() => {
                            setQun(qun <= 0 ? qun : qun - 1);
                          }}>
                          <Text style={responsiveStyle.quantityText1}>-</Text>
                        </TouchableOpacity>
                        <Text style={responsiveStyle.quantityText2}>{qun}</Text>
                        <TouchableOpacity
                          onPress={() => {
                            setQun(qun + 1);
                            addToCart();
                          }}>
                          <Text style={responsiveStyle.quantityText1}>+</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </Text> 
            ))}
          </View>
        ) : (
          <>
            <Banner />
            <RecentBought />
            <ShowCategory />
            <ProductScroll />
            <OfferProducts />
          </>
        )}
        <Text style={responsiveStyle.footText}>
          Didn't find what you are looking for ?{' '}
        </Text>

        <View style={responsiveStyle.footButton}>
          <Text style={responsiveStyle.footButtonText}>Browse by Category</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;