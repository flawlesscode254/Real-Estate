import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import BottomDetails from "../components/BottomDetails";

const Details = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#000000",
      }}
    >
      <ImageBackground
        style={{
          width: "100%",
          aspectRatio: 5 / 3,
        }}
        source={{
          uri: "https://www.constructionkenya.com/wp-content/uploads/2017/12/Modern-Prefab-home.jpg",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{
            backgroundColor: "yellow",
            width: 35,
            alignItems: "center",
            justifyContent: "center",
            margin: 10,
            borderRadius: 999,
            height: 35,
          }}
        >
          <Ionicons color={"#000000"} name="arrow-back" size={27} />
        </TouchableOpacity>
      </ImageBackground>
      <View
        style={{
          backgroundColor: "#000000",
          padding: 10,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <View>
          <Text
            style={{
              color: "#FFFFFF",
              marginBottom: 5,
            }}
          >
            Hilton House
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Ionicons
              style={{
                marginRight: 5,
              }}
              color={"#FFFFFF"}
              name="location"
              size={20}
            />
            <Text
              style={{
                color: "#FFFFFF",
                marginRight: 15,
              }}
            >
              Collorado
            </Text>
            <Ionicons
              style={{
                marginRight: 5,
              }}
              color={"#FFFFFF"}
              name="map"
              size={20}
            />
            <Text
              style={{
                color: "#FFFFFF",
                marginRight: 15,
              }}
            >
              2,000 sq/m
            </Text>
            <Ionicons
              style={{
                marginRight: 5,
              }}
              color={"#FFFFFF"}
              name="bed"
              size={20}
            />
            <Text
              style={{
                color: "#FFFFFF",
              }}
            >
              4 bedrooms
            </Text>
          </View>
        </View>
      </View>
      <BottomDetails />
    </View>
  );
};

export default Details;
