import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Main from "../screens/Main";
import Home from "../screens/Home";
import Favorites from "../screens/Favorites";
import Account from "../screens/Account";
import Cart from "../screens/Cart";

const MainStack = () => {
  const Stack = createMaterialBottomTabNavigator();

  const tabBarOptions = {
    style: {
      backgroundColor: "#FFF",
      paddingBottom: 12,
      paddingTop: 12,
      height: 70,
    },
  };

  const screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused }) => {
      let iconName = "home";

      switch (route.name) {
        case "Home":
          iconName = "home";
          break;
        case "Search":
          iconName = "search";
          break;
        case "Favorites":
          iconName = "heart";
          break;
        case "Account":
          iconName = "person";
          break;
        case "Cart":
          iconName = "cart";
          break;
        default:
          iconName = "home";
      }
      return (
        <Ionicons
          name={iconName}
          size={24}
          color={focused ? "#f00c45" : "#FFFFFF"}
        />
      );
    },
  });

  return (
    <Stack.Navigator
      tabBarOptions={tabBarOptions}
      screenOptions={screenOptions}
      barStyle={{
        backgroundColor: "black",
      }}
      labeled={false}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Search" component={Main} />
      <Stack.Screen name="Favorites" component={Favorites} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Account" component={Account} />
    </Stack.Navigator>
  );
};

export default MainStack;
