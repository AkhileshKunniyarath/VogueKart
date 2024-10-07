import React from "react"; 
import { Text, View } from "react-native";
import style from './style';

const Categories = () => {
    return ( 
      <View style= {style.container}>
        <Text style= {{fontSize: 50, color: 'black',}}>Categories</Text>
      </View>
    );
};
export default Categories;