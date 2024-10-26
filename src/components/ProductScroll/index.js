import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import style from './style';
import {FlatList, Image, Text, View} from 'react-native';
import {useDimensionContext} from '../../context';
import CommonSectionHeader from '../CommonSectionHeader';

const ProductScroll = () => {
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
    dimensions.isPortrait,
  );

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    await firestore()
      .collection('Products')
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          console.log('Its empty');
        } else {
          const result = [];
          snapshot.docs.forEach(doc => {
            if (doc.exists) {
              result.push(doc.data());
            }
          });
          setProducts(result);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <View style={responsiveStyle.container}>
      <CommonSectionHeader
        head={'Newly Arrived'}
        content={'Pay Less, Get More'}
        rightText={'See All'}
      />

      <View>
        <FlatList
          data={products}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => String(index)}
          renderItem={({item, index}) => {
            return (
              <View style={responsiveStyle.productView}>
                <Image
                  source={{uri: item.image}}
                  style={responsiveStyle.productImage}
                />
                <Image
                  source={require('../../assets/images/wishlist-product-outline.png')}
                  style={responsiveStyle.whishIcon}
                />
                <Text style={responsiveStyle.productName} numberOfLines={1}>
                  {item.name}
                </Text>
                <Text style={responsiveStyle.productDis} numberOfLines={2}>
                  {item.description}
                </Text>
                <View style={responsiveStyle.priceView}>
                  <Text style={responsiveStyle.price}>{item.price}</Text>
                  <View style={responsiveStyle.addView}>
                    <Text style={responsiveStyle.addText}>+</Text>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default ProductScroll;
