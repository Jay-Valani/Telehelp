import { TouchableOpacity, Image, Text, View } from "react-native";
import React from "react";
import scale, { verticalScale } from "../../Globals/scale";
import { colors } from "../../Globals/color";
import {styles} from "./Feedback.styles"

const FeedbackScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.heading}>Enjoying this App?</Text>
        <Text style={styles.subHeading}>
          Hi there! We’d love to know if you’re having a great experience.
        </Text>
        <View style={{ flexDirection: "row", marginTop: verticalScale(24) }}>
          <View
            style={{
              borderWidth: 0.5,
              borderColor: colors.lightGray,
              height: 100,
              width: "50%",
              borderBottomLeftRadius: 10,
            }}
          >
            <TouchableOpacity>
              <Image
                source={require("./assets/sad.png")}
                resizeMode="contain"
                style={styles.moodEmoji}
              />
              <Text style={styles.moodTxt}>Not Really</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderWidth: 0.5,
              borderColor: colors.lightGray,
              height: 100,
              width: "50%",
              borderBottomRightRadius: 10,
            }}
          >
            <TouchableOpacity>
              <Image
                source={require("./assets/good.png")}
                resizeMode="contain"
                style={styles.moodEmoji}
              />
              <Text style={styles.moodTxt}>Yes!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FeedbackScreen;
