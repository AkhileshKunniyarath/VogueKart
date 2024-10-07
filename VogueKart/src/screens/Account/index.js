import React from "react"; 
import { Text, View } from "react-native";
import style from './style';

const Account = () => {
    return ( 
      <View style= {style.container}>
        <Text style= {{fontSize: 50, color: 'black',}}>Account</Text>
      </View>
    );
};
export default Account;