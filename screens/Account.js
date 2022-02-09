import { View, Text } from "react-native";
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
        <Text style={{
            color: "#FFFFFF"
        }}>Account</Text>
      </LinearGradient>
    </View>
  );
};

export default Account;
