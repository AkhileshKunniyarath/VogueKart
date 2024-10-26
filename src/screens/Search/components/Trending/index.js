import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import style from './style';
import {FlatList, Image, Text, View} from 'react-native';
import {useDimensionContext} from '../../../../context';
import { useSelector } from 'react-redux';

const Trending = () => {
  const dimension = useDimensionContext();
  const responsiveStyle = style(dimension.windowWidth, dimension.windowHeight);
  const {categories} = useSelector(state => state);


  return (
    <View style={responsiveStyle.main}>
      <Text style={responsiveStyle.title}>Trending Category</Text>
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => String(index)}
        contentContainerStyle={responsiveStyle.flatList}
        renderItem={({item, index}) => {
          return <View style={responsiveStyle.imageCon}>
            <Image source={{uri: item.image}} style={responsiveStyle.image}/>
          </View>
        }}
      />
    </View>
  );
};

export default Trending;