import React from "react"; 
import { View } from "react-native";
import style from './style';
import CommonHeader from "../../components/CommonHeader";
import CustomSearch from "../../components/CustomSearch";
import Banner from "./components/Banner";
import RecentBought from "./components/RecentBought";

const Home = () => {
    return <View style= {style.container}>
        <CommonHeader/>
        <CustomSearch/>
        <Banner/>
        <RecentBought/>
        
    </View>;
};
export default Home;