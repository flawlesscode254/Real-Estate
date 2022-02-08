import { View, TextInput } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Search = () => {
  return (
    <View>
      <View
        style={{
          margin: 10,
          backgroundColor: "#e3e8e5",
          paddingHorizontal: 10,
          paddingVertical: 2,
          borderRadius: 7,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <TextInput
          style={{
            flex: 1,
            height: 35,
            paddingLeft: 5,
          }}
          placeholder="Enter name to search"
        />
        <Ionicons name="search" size={24} />
      </View>
    </View>
  );
};

export default Search;
