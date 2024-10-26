import {FlatList, Image, Text, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import style from './style';
import {useEffect, useState} from 'react';
import { useDimensionContext } from '../../../../context';
import { useDispatch } from 'react-redux';
import { updateCategories } from '../../../../storage/action';

const ShowCategory = () => {
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
    dimensions.isPortrait,
  );
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
            <View style={responsiveStyle.innerView}>
              <View style={responsiveStyle.imageView}>
                <Image
                  style={responsiveStyle.image}
                  source={{uri: item.image}}
                />
              </View>
              <Text style={responsiveStyle.itemName}>"{item.name}"</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default ShowCategory;
