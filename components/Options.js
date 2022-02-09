import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const Options = ({ title }) => {
  return (
    <View>
      <TouchableOpacity style={{
          marginHorizontal: 25,
          width: 100,
          alignItems: "center",
          padding: 5,
          borderRadius: 4,
          backgroundColor: "#000000"
      }}>
          <Text style={{
              fontWeight: "bold",
              letterSpacing: 1,
              color: "#FFFFFF"
          }}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Options;
