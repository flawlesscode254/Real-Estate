import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const Options = ({ title }) => {
  return (
    <View>
      <TouchableOpacity style={{
          marginHorizontal: 25,
          borderWidth: 0.5,
          width: 70,
          alignItems: "center",
          padding: 5,
          borderColor: "#c2c4c3",
          borderRadius: 4
      }}>
          <Text style={{
              fontWeight: "bold",
              letterSpacing: 1,
              color: "#0229c7"
          }}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Options;
