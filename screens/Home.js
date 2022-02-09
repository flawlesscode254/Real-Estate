import { View, ScrollView, Text } from "react-native";
import React from "react";

import Title from "./Title";
import Trending from "../components/Trending";

const Home = () => {
  return (
    <View>
      <View
        style={{
          backgroundColor: "#02124a"
        }}
      >
        <Title />
        <Text
          style={{
            margin: 10,
            color: "#FFFFFF",
            fontSize: 23,
            letterSpacing: 1,
            textAlign: "center"
          }}
        >
          Properties in Nairobi
        </Text>
      </View>
      <ScrollView style={{
          marginBottom: 80
      }}>
        <Trending title={"Trending Homes"} />
        <Trending title={"Trending Lands"} />
        <Trending title={"Trending Apartments"} />
      </ScrollView>
    </View>
  );
};

export default Home;
