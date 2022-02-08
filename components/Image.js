import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Image = ({ url }) => {
  const navigation = useNavigation();

  const goDetail = () => {
    navigation.navigate("Details");
  };

  return (
    <TouchableOpacity
      onPress={goDetail}
      style={{
        marginHorizontal: 10,
        marginVertical: 15,
      }}
    >
      <ImageBackground
        source={{
          uri: url,
        }}
        style={{
          width: "100%",
          aspectRatio: 5 / 3,
        }}
        imageStyle={{
          borderTopLeftRadius: 7,
          borderTopRightRadius: 7,
        }}
      >
        <View
          style={{
            backgroundColor: "#ffea00",
            width: 70,
            alignItems: "center",
            margin: 6,
            padding: 3,
            borderRadius: 5,
          }}
        >
          <Text
            style={{
              color: "#000000",
              fontWeight: "bold",
              letterSpacing: 1,
            }}
          >
            One Sale
          </Text>
        </View>
      </ImageBackground>
      <View
        style={{
          backgroundColor: "#000000",
          padding: 10,
          borderBottomLeftRadius: 7,
          borderBottomRightRadius: 7,
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
    </TouchableOpacity>
  );
};

export default Image;
