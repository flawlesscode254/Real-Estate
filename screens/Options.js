import { View } from "react-native";
import React from "react";

import Option from "../components/Options";

const Options = () => {
  return (
    <View
      style={{
        margin: 10,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <Option title={"Homes"} />
      <Option title={"Land"} />
      <Option title={"Apartments"} />
    </View>
  );
};

export default Options;
