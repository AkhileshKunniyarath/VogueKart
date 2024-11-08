import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import style from './style';
import {useEffect, useState} from 'react';
import { useDimensionContext } from '../../../../context';
import { useDispatch } from 'react-redux';
import { updateCategories } from '../../../../storage/action';
import { useNavigation } from '@react-navigation/native';

const ShowCategory = () => {
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
    dimensions.isPortrait,
  );
  const navigation = useNavigation();
  const [categories, setCategories] = useState([]);
  const dispatch =useDispatch();

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    await firestore()
      .collection('Categories')
      .get()
      .then(snapshot => {
        if (!snapshot.empty) {
          const result = [];
          snapshot.docs.forEach(doc => {
            if (doc.exists) {
              const responseData = {id: doc.id, ...doc?.data()};
              result.push(responseData);
            }
          });
          setCategories(result);
          dispatch(updateCategories(result));
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleCategories = index => {
    navigation.navigate('Categories',{categories: index})
  };

  return (
    <View style={responsiveStyle.container}>
      <Text style={responsiveStyle.head}>Shop by Category</Text>
      <FlatList
        data={categories}
        numColumns={4}
        contentContainerStyle={responsiveStyle.flatList}
        keyExtractor={(item, index) => String(index)}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity 
            onPress={() => handleCategories(index)}
            style={responsiveStyle.innerView}>
              <View style={responsiveStyle.imageView}>
                <Image
                  style={responsiveStyle.image}
                  source={{uri: item.image}}
                />
              </View>
              <Text style={responsiveStyle.itemName}>"{item.name}"</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default ShowCategory;
