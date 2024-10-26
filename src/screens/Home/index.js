import React from 'react';
import style from './style';
import {ScrollView, Text, View} from 'react-native';
import CommonHeader from '../../components/CommonHeader';
import CustomSearch from '../../components/CustomSearch';
import RecentBought from './components/RecentBought';
import ProductScroll from '../../components/ProductScroll';
import OfferProducts from '../../components/OfferProducts';
import Banner from './components/Banner';
import ShowCategory from './components/ShowCategory';

const Home = () => {
  return (
    <View style={style.main}>
      <CommonHeader />
      <ScrollView
        style={style.container}
        nestedScrollEnabled
        showsVerticalScrollIndicator={false}>
        <CustomSearch />
        <Banner />
        <RecentBought />
        <ProductScroll/>
        <ShowCategory />
        <OfferProducts/>

        <Text style={style.footText}>Didn't find what you are looking for ? </Text>

        <View style={style.footButton}>
          <Text style={style.footButtonText}>Browse by Category</Text>
        </View>

      </ScrollView>
    </View>
  );
};

export default Home;