import { View, Text, ScrollView } from "react-native";
import React from "react";
import PhotosScroll from "./PhotosScroll";

import Pricing from "./Pricing";

const BottomDetails = () => {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
      }}
    >
      <View
        style={{
          margin: 15,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 22,
            letterSpacing: 1,
          }}
        >
          Pricing
        </Text>
        <View
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "row",
            width: "100%",
          }}
        >
          <Pricing 
            type={"Book"}
            description={"$24 per night"}
          />
          <Pricing 
            type={"Buy"}
            description={"$450,000"}
          />
        </View>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 22,
            letterSpacing: 1,
          }}
        >
          Description
        </Text>
        <Text
          style={{
            marginBottom: 20,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing . Sapiente
          reprehenderit nesciunt quis sit facere, eveniet est excepturi adipisci
          nisi ipsam perspiciatis explicabo quas incidunt magni enim voluptate
          corporis iure repellat!
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 22,
            letterSpacing: 1,
            marginBottom: 10,
          }}
        >
          Photos
        </Text>
        <PhotosScroll />
      </View>
    </ScrollView>
  );
};

export default BottomDetails;
