import {
  Image,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import { styles } from "./ContactusScreen.styles";
import { images } from "../../Assests/Images/map";
import { verticalScale } from "../../Globals/scale";
import { colors } from "../../Globals/color";

export default function ContactusScreen(props: any) {
  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <View style={styles.headingContainer}>
          <Text style={styles.greetings}>Welcome!</Text>
          <TouchableOpacity onPress={() => {}}>
            <Image
              source={images.cancle}
              resizeMode="contain"
              style={styles.cancle}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.contactUs}>Please tell us we can help.</Text>
      </View>
      {/* footer */}
      <View style={styles.footer}>
        <ScrollView>
          {/* server chat */}
          <View
            style={[styles.chatContainer, { marginTop: verticalScale(24) }]}
          >
            <View style={styles.appLogoContainer}>
              <Image
                source={images.app_logo}
                resizeMode="contain"
                style={styles.appLogo}
              />
              <View style={styles.greenSpot} />
            </View>
            <View style={styles.chatServerContainer}>
              <Text style={styles.chatServer}>
                You are currently in queue.We will respond as soon as possible.
              </Text>
            </View>
          </View>
          {/* client chat */}
          <View
            style={[styles.chatContainer, { marginTop: verticalScale(24) }]}
          >
            <View style={styles.chatclientContainer}>
              <Text style={styles.chatclient}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac eget
                dignissim in consequat pretium.
              </Text>
            </View>
          </View>
          {/* client chat */}
          <View
            style={[styles.chatContainer, { marginTop: verticalScale(16) }]}
          >
            <View style={styles.chatclientContainer}>
              <Text style={styles.chatclient}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac eget
                dignissim in consequat pretium.
              </Text>
            </View>
          </View>
          {/* server chat */}
          <View
            style={[styles.chatContainer, { marginTop: verticalScale(24) }]}
          >
            <View
              style={[
                styles.appLogoContainer,
                { marginTop: verticalScale(100) },
              ]}
            >
              <Image
                source={images.app_logo}
                resizeMode="contain"
                style={styles.appLogo}
              />
              <View style={styles.greenSpot} />
            </View>
            <View style={styles.chatServerContainer}>
              <TouchableOpacity onPress={() => {}}>
                <Text style={styles.options}>Option A</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {}}
                style={{
                  borderTopWidth: 0.5,
                  borderBottomWidth: 0.5,
                  borderColor: colors.gray,
                }}
              >
                <Text style={styles.options}>Option B</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                <Text
                  style={[styles.options, { marginBottom: verticalScale(12) }]}
                >
                  Option C
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* write message */}
          <View
            style={{
              justifyContent: "flex-end",
              marginTop: verticalScale(60),
              marginBottom: verticalScale(39),
            }}
          >
            <View style={{ borderWidth: 0.5, borderColor: colors.gray }} />
            <View style={styles.messageContainer}>
              <TextInput
                placeholder="Write a message"
                placeholderTextColor={colors.gray}
                style={styles.message}
              />
              <TouchableOpacity>
                <View style={styles.vectorContainer}>
                  <Image
                    source={images.vector}
                    resizeMode="contain"
                    style={styles.vector}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
