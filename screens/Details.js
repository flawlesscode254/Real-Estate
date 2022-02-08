import React from "react";
import { View, Text, ImageBackground, ScrollView, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Photos from "../components/Photos";

const Details = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#000000",
      }}
    >
      <ImageBackground
        style={{
          width: "100%",
          aspectRatio: 5 / 3,
        }}
        source={{
          uri: "https://www.constructionkenya.com/wp-content/uploads/2017/12/Modern-Prefab-home.jpg",
        }}
      ></ImageBackground>
      <View
        style={{
          backgroundColor: "#000000",
          padding: 10,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <View>
          <Text
            style={{
              color: "#FFFFFF",
              marginBottom: 5,
            }}
          >
            Hilton House
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Ionicons
              style={{
                marginRight: 5,
              }}
              color={"#FFFFFF"}
              name="location"
              size={20}
            />
            <Text
              style={{
                color: "#FFFFFF",
                marginRight: 15,
              }}
            >
              Collorado
            </Text>
            <Ionicons
              style={{
                marginRight: 5,
              }}
              color={"#FFFFFF"}
              name="map"
              size={20}
            />
            <Text
              style={{
                color: "#FFFFFF",
                marginRight: 15,
              }}
            >
              2,000 sq/m
            </Text>
            <Ionicons
              style={{
                marginRight: 5,
              }}
              color={"#FFFFFF"}
              name="bed"
              size={20}
            />
            <Text
              style={{
                color: "#FFFFFF",
              }}
            >
              4 bedrooms
            </Text>
          </View>
        </View>
      </View>
      <View
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
            Price
          </Text>
          <Text style={{
              marginBottom: 20
          }}>$24 per night</Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 22,
              letterSpacing: 1,
            }}
          >
            Description
          </Text>
          <Text style={{
              marginBottom: 20
          }}>
            Lorem ipsum dolor sit amet consectetur adipisicing . Sapiente
            reprehenderit nesciunt quis sit facere, eveniet est excepturi
            adipisci nisi ipsam perspiciatis explicabo quas incidunt magni enim
            voluptate corporis iure repellat!
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 22,
              letterSpacing: 1,
              marginBottom: 10
            }}
          >
            Photos
          </Text>
          <ScrollView horizontal>
            <Photos 
                url={"https://media.istockphoto.com/photos/beautiful-living-room-interior-with-hardwood-floors-and-and-view-of-picture-id1208205959?k=20&m=1208205959&s=612x612&w=0&h=bd4L_M7u2hPksL11njclcxgMWezFgSnKW1gBs9K-Xn0="}
            />
            <Photos 
                url={"https://www.decoraid.com/wp-content/uploads/2018/07/Luxurious-interior-design-living-room-and-fireplace-in-a-beautiful-house-2500x1412.jpeg"}
            />
            <Photos 
                url={"https://media-exp1.licdn.com/dms/image/C4E1BAQGzjeqz5bcWtg/company-background_10000/0/1600902984865?e=2159024400&v=beta&t=JA6jy5eCtCqmFrcF6uHX1k7O288srG6s2xDJgYW4cGM"}
            />
            <Photos 
                url={"https://s3images.coroflot.com/user_files/individual_files/large_444208_m_hlsgxamutawrmhlrpqu2omb.jpg"}
            />
            <Photos 
                url={"https://cdn.mos.cms.futurecdn.net/nVe3taWDVD8wnFbFYTLto7-768-80.jpg"}
            />
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Details;
