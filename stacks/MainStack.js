import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Main from "../screens/Main";
import Home from "../screens/Home";

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

        default:
          iconName = "home";
      }
      return (
        <Ionicons
          name={iconName}
          size={24}
          color={focused ? "#4287f5" : "#a3a2a2"}
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
    </Stack.Navigator>
  );
};

export default MainStack;
