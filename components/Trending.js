import { View, Text } from 'react-native'
import React from 'react'

import PhotosScroll from './PhotosScroll'

const Trending = ({ title }) => {
  return (
    <View style={{
        margin: 10
    }}>
      <Text style={{
          fontWeight: "bold",
          letterSpacing: 1,
          fontSize: 18
      }}>{title}</Text>
      <PhotosScroll />
    </View>
  )
}

export default Trending