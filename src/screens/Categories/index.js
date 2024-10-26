import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import style from './style';
import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomSearch from '../../components/CustomSearch';
import CommonHeaderLeft from '../../components/CommonHeaderLeft';
import {useNavigation} from '@react-navigation/native';
import { useDimensionContext } from '../../context';
import { useSelector } from 'react-redux';

const Categories = () => {
  const dimension = useDimensionContext();
  const navigation = useNavigation();
  const responsiveStyle = style(dimension.windowWidth, dimension.windowHeight);
  const {categories} = useSelector(state => state);
  const [products, setProducts] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <CommonHeaderLeft />,
    });
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

  const handleCategoryTouch = index => {
    setActive(index);
  };

  return (
    <View style={responsiveStyle.main}>
      <ScrollView
        style={responsiveStyle.container}
        nestedScrollEnabled
        showsVerticalScrollIndicator={false}>
        <CustomSearch />
        <View style={responsiveStyle.rowstyle}>
          {/* sidebar */}
          <View>
            <FlatList
              data={categories}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={responsiveStyle.catFlatstyle}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    style={responsiveStyle.catTouch}
                    onPress={() => handleCategoryTouch(index)}>
                    <Image
                      source={{uri: item.image}}
                      style={responsiveStyle.catImage}
                    />
                  </TouchableOpacity>
                );
              }}
            />
          </View>
          {/* content */}
          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              <ImageBackground
                source={require('../../assets/images/cat-page-img.jpeg')}
                style={responsiveStyle.backImage}>
                <Text style={responsiveStyle.catName}>
                  {categories[active]?.name}
                </Text>
              </ImageBackground>

              <FlatList
                numColumns={2}
                data={products}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={responsiveStyle.prostyle}
                renderItem={({item, index}) => {
                  return (
                    <TouchableOpacity style={responsiveStyle.proContaioner}>
                      <View style={responsiveStyle.imageBg}>
                        <Image
                          source={{uri: item.image}}
                          style={responsiveStyle.proImage}
                        />
                      </View>
                      <Text style={responsiveStyle.catProName}>
                        {item.name}
                      </Text>
                      <Text style={responsiveStyle.catPrice}>
                        ₹ {item.price}
                      </Text>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default Categories;
