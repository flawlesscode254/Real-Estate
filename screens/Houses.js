import { ScrollView } from "react-native";
import React from "react";

import Image from "../components/Image";

const Houses = () => {
  return (
    <ScrollView
      style={{
        marginBottom: 150,
      }}
    >
      <Image
        url={
          "https://www.constructionkenya.com/wp-content/uploads/2017/12/Modern-Prefab-home.jpg"
        }
      />
      <Image
        url={
          "https://images.adsttc.com/media/images/5e1d/02c3/3312/fd58/9c00/06e9/large_jpg/NewHouse_SA_Photo_01.jpg?1578959519"
        }
      />
      <Image
        url={
          "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/michael-jordan-house-1596225133.jpg?crop=1xw:1xh;center,top&resize=480:*"
        }
      />
      <Image
        url={
          "https://www.ft.com/__origami/service/image/v2/images/raw/https://d1e00ek4ebabms.cloudfront.net/production/7f26891f-91fc-42dc-bf9a-bf33ff8275c9.jpg?source=next&amp;fit=scale-down&amp;quality=highest&amp;width=1067"
        }
      />
    </ScrollView>
  );
};

export default Houses;
