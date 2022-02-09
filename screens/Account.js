import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

import { Ionicons } from "@expo/vector-icons";

const Account = () => {
  return (
    <View>
      <LinearGradient
        start={{ x: 0, y: 0.75 }}
        end={{ x: 1, y: 0.25 }}
        colors={["#2F4697", "#1E8796"]}
        style={{
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Ionicons color={"#04e064"} name="person" size={100} />
        <Text
          style={{
            color: "#FFFFFF",
          }}
        >
          Username
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: "#e00438",
            paddingVertical: 5,
            paddingHorizontal: 40,
            borderRadius: 6,
            alignItems: "center",
            marginTop: 150,
          }}
        >
          <Text
            style={{
              color: "#FFFFFF",
              letterSpacing: 1,
            }}
          >
            Log out
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default Account;
