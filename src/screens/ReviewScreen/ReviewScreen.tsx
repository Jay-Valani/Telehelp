import { TouchableOpacity, Image, Text, View } from "react-native";
import React, { useState } from "react";
import scale, { verticalScale } from "../../Globals/scale";
import { colors } from "../../Globals/color";
import { styles } from "./ReviewScreen.styles";
import { images } from "../../Assests/Images/map";

const ReviewScreen = () => {
  const [defaultRating, setDefaultRating] = useState(1);
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
  const starFilled = require("./assets/star_filled.png");
  const starEmpty = require("./assets/star.png");
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.appLogoContainer}>
          <Image
            source={images.app_logo}
            resizeMode="contain"
            style={styles.app_logo}
          />
        </View>
        <Text style={styles.heading}>Review Telehelp?</Text>
        <Text style={styles.subHeading}>
          Tap a star to rate it on the {"\n"} App Store.
        </Text>
        <View
          style={{
            borderWidth: 0.5,
            borderColor: colors.lightGray,
            marginTop: verticalScale(18),
          }}
        />
        <View style={styles.customRatingBarStyle}>
          {maxRating.map((item, key) => {
            return (
              <TouchableOpacity
                activeOpacity={0.7}
                key={item}
                onPress={() => setDefaultRating(item)}
              >
                <Image
                  style={styles.starImageStyle}
                  source={item <= defaultRating ? starFilled : starEmpty}
                />
              </TouchableOpacity>
            );
          })}
        </View>
        <View
          style={{
            borderWidth: 0.5,
            borderColor: colors.lightGray,
            marginTop: verticalScale(18),
          }}
        />
        <Text style={styles.notNow}>Not now</Text>
      </View>
    </View>
  );
};

export default ReviewScreen;
