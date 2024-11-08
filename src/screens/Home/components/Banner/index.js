import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import style from './style';
import {FlatList, ImageBackground, TouchableOpacity, View} from 'react-native';
import { useDimensionContext } from '../../../../context';

const Banner = () => {
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
  );

  const [bannerItem, setBannerItem] = useState([]);

  useEffect(() => {
    getBanners();
  }, []);

  const getBanners = async () => {
    await firestore()
      .collection('Banners')
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
          setBannerItem(result);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <View>
      <FlatList
        data={bannerItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => String(index)}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity style={responsiveStyle.touch}>
              <ImageBackground
                source={{uri: item.image}}
                style={responsiveStyle.banner}></ImageBackground>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Banner;
