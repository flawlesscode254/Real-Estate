import { View, Text } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const Pricing = ({ type, description }) => {
  return (
    <View>
        <Text
          style={{
            marginBottom: 20,
            color: "orangered"
          }}
        >
          {description}
        </Text>
        <LinearGradient
          start={{ x: 0, y: 0.75 }}
          end={{ x: 1, y: 0.25 }}
          colors={["#1E8796", "#2F4697", "transparent"]}
          style={{
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 9,
            backgroundColor: "#354BA2",
            paddingVertical: 5,
            width: 90,
          }}
        >
          <Text
            style={{
              color: "#FFFF",
            }}
          >
            {type}
          </Text>
        </LinearGradient>
    </View>
  )
}

export default Pricing