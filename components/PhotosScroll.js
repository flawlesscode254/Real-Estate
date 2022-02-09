import { ScrollView } from 'react-native'
import React from 'react'

import Photos from './Photos'

const PhotosScroll = () => {
  return (
    <ScrollView horizontal>
    <Photos
      url={
        "https://media.istockphoto.com/photos/beautiful-living-room-interior-with-hardwood-floors-and-and-view-of-picture-id1208205959?k=20&m=1208205959&s=612x612&w=0&h=bd4L_M7u2hPksL11njclcxgMWezFgSnKW1gBs9K-Xn0="
      }
    />
    <Photos
      url={
        "https://www.decoraid.com/wp-content/uploads/2018/07/Luxurious-interior-design-living-room-and-fireplace-in-a-beautiful-house-2500x1412.jpeg"
      }
    />
    <Photos
      url={
        "https://media-exp1.licdn.com/dms/image/C4E1BAQGzjeqz5bcWtg/company-background_10000/0/1600902984865?e=2159024400&v=beta&t=JA6jy5eCtCqmFrcF6uHX1k7O288srG6s2xDJgYW4cGM"
      }
    />
    <Photos
      url={
        "https://s3images.coroflot.com/user_files/individual_files/large_444208_m_hlsgxamutawrmhlrpqu2omb.jpg"
      }
    />
    <Photos
      url={
        "https://cdn.mos.cms.futurecdn.net/nVe3taWDVD8wnFbFYTLto7-768-80.jpg"
      }
    />
  </ScrollView>
  )
}

export default PhotosScroll