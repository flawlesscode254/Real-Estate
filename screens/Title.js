import { View, Text } from "react-native";
import React from "react";

const Title = () => {
  return (
    <View>
      <Text
        style={{
          fontSize: 19,
          fontWeight: "bold",
          letterSpacing: 2,
          paddingLeft: 15,
          paddingTop: 10,
          color: "#f00c45"
        }}
      >
        Qwako
      </Text>
    </View>
  );
};

export default Title;
