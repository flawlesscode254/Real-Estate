import { View, Image } from "react-native";
import React from "react";

const Photos = ({ url }) => {
  return (
    <View>
      <Image
        source={{
          uri: url
        }}
        style={{
          width: 150,
          height: 150,
          borderRadius: 7,
          margin: 10
        }}
      />
    </View>
  );
};

export default Photos;
