import { View } from "react-native";
import React from "react";

import Option from "../components/Options";

const Options = () => {
  return (
    <View
      style={{
        margin: 10,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        width: "100%"
      }}
    >
        <Option title={"Homes"} />
        <Option title={"Prices"} />
    </View>
  );
};

export default Options;
