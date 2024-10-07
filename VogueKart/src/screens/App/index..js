import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import 'react-native-gesture-handler';
import React from "react";
import Login from "../Login";
import SignUp from "../SignUp";
import LoginPhone from "../LoginPhone";
import Home from "../Home";
import { DimensionContextProvider } from "../../context";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Categories from "../Categories";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Cart from "../Cart";
import CustomDrawer from "../../components/CustomDrawer";
import CustomFooter from "../../components/CustomFooter";
import Search from "../Search";
import Offers from "../Offers";
import Orders from "../Orders";
import Wishlist from "../Wishlist";
import Account from "../Account";

const Drawer = createDrawerNavigator();
const AppDrawer = () => {
  return (
    <Drawer.Navigator 
    screenOptions={{headerShown: false,}}
    initialRouteName="MyFooter"
    drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="MyFooter" component={AppFooter}/>
      <Drawer.Screen name="Categories" component={Categories}/>
      <Drawer.Screen name="Orders" component={Orders}/>
      <Drawer.Screen name="Wishlist" component={Wishlist}/>
      <Drawer.Screen name="Account" component={Account}/>
    </Drawer.Navigator>
  );
};

const Footer = createBottomTabNavigator();
const AppFooter = () => {
  return (
    <Footer.Navigator screenOptions={{headerShown: false,}}
    tabBar={props => <CustomFooter {...props} />}>
      <Footer.Screen name="Home" component={Home}/>
      <Footer.Screen name="Categories" component={Categories}/>
      <Footer.Screen name="Search" component={Search}/>
      <Footer.Screen name="Offers" component={Offers}/>
      <Footer.Screen name="Cart" component={Cart}/>

    </Footer.Navigator>
  );
};



const AppStack = createNativeStackNavigator();
const App = () => {
    return(
        <DimensionContextProvider>
          <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false,}}>
                <AppStack.Screen name="Login" component={Login} />
                <AppStack.Screen name="MyDrawer" component={AppDrawer} />
                <AppStack.Screen name="SignUp" component={SignUp} />
                <AppStack.Screen name="LoginPhone" component={LoginPhone} />
            </AppStack.Navigator>
          </NavigationContainer>
        </DimensionContextProvider>
    );
};

export default App;