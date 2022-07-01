import {
  Image,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';
import {styles} from './ContactusScreen.styles';
import {verticalScale} from '../../globals/scale';
import {colors} from '../../globals/colors';
import {images} from '../../assets/images/map';

export default function ContactusScreen(props: any) {
  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <View style={styles.headingContainer}>
          <Text style={styles.greetings}>Welcome!</Text>
        </View>
        <Text style={styles.contactUs}>Please tell us we can help.</Text>
      </View>
      {/* footer */}
      <View style={styles.footer}>
        <ScrollView>
          {/* server chat */}
          <View style={[styles.chatContainer, {marginTop: verticalScale(24)}]}>
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
          <View style={[styles.chatContainer, {marginTop: verticalScale(24)}]}>
            <View style={styles.chatclientContainer}>
              <Text style={styles.chatclient}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac eget
                dignissim in consequat pretium.
              </Text>
            </View>
          </View>
          {/* client chat */}
          <View style={[styles.chatContainer, {marginTop: verticalScale(16)}]}>
            <View style={styles.chatclientContainer}>
              <Text style={styles.chatclient}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac eget
                dignissim in consequat pretium.
              </Text>
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            justifyContent: 'flex-end',
            // marginTop: verticalScale(60),
            marginBottom: verticalScale(39),
          }}>
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
      </View>
    </View>
  );
}
