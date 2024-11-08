import React, { useEffect } from 'react';
import style from './style';
import {ScrollView, View} from 'react-native';
import CustomSearch from '../../components/CustomSearch';
import OfferProducts from '../../components/OfferProducts';
import Trending from './components/Trending';
import { useNavigation } from '@react-navigation/native';
import CommonHeaderLeft from '../../components/CommonHeaderLeft';

const Search = () => {
const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <CommonHeaderLeft  />,
    });
  }, []);

  return (
    <View style={style.main}>
      <ScrollView
        style={style.container}
        nestedScrollEnabled
        showsVerticalScrollIndicator={false}>
        <CustomSearch />
        <Trending/>
        <OfferProducts/>
      </ScrollView>
    </View>
  );
};

export default Search;