import {TouchableOpacity, Text, View, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import {styles} from './HelpScreen.styles';
import scale, {verticalScale} from '../../globals/scale';
import {images} from '../../assets/images/map';
import {colors} from '../../globals/colors';
import { useNavigation } from '@react-navigation/native';

const HelpScreen = (props: any) => {
  const [videoChat, setVideoChat] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setVideoChat(!videoChat);
    }, 5000);
  }, [videoChat]);
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTxt}>Telehelp</Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.footerHeadingContainer}>
          <Text style={styles.week}>Upcoming</Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.scheduleSession}>Schedule a session</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <View style={[styles.card, {marginTop: verticalScale(20)}]}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: scale(20),
              }}>
              <View
                style={{
                  flexDirection: 'column',
                }}>
                <Text style={styles.name}>James Sacci</Text>
                <Text style={styles.profession}>Therapist</Text>
              </View>
              <Image source={images.face2} style={styles.face} />
            </View>
            <View style={styles.line} />
            <TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                  borderWidth: 1,
                  paddingHorizontal: 100,
                  paddingVertical: 15,
                  borderRadius: 30,
                  borderColor:
                    videoChat == false
                      ? colors.disableButtonColor
                      : colors.appThemeColor,
                  backgroundColor:
                    videoChat == false
                      ? colors.disableButtonColor
                      : colors.appThemeColor,
                  alignSelf: 'center',
                }}>
                <Image
                  source={images.iconVideo}
                  resizeMode="contain"
                  style={{
                    tintColor: colors.white,
                    marginTop: verticalScale(5),
                  }}
                />
                <Text style={styles.joinNow}>Join now</Text>
              </View>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                marginTop: verticalScale(18),
              }}>
              <Image
                source={images.icon_watch}
                resizeMode="contain"
                style={{width: 15, height: 15}}
              />
              <Text style={styles.timeZone}>1:00 - 2:00 pm PT</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={[styles.card1, {marginTop: verticalScale(20)}]}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: scale(20),
              }}>
              <View
                style={{
                  flexDirection: 'column',
                }}>
                <Text style={styles.name}>24/7 Helpline</Text>
                <Text style={styles.profession}>Online Help</Text>
              </View>
              <Image source={images.blue_logo} style={styles.face} />
            </View>
            <View style={styles.line} />
            <TouchableOpacity onPress={() => {navigation.navigate("contactUs")}}>
              <View
                style={{
                  flexDirection: 'row',
                  borderWidth: 1,
                  paddingHorizontal: 110,
                  paddingVertical: 15,
                  borderRadius: 30,
                  borderColor: colors.appThemeColor,
                  backgroundColor: colors.appThemeColor,
                  alignSelf: 'center',
                }}>
                <Text style={styles.joinNow}>Chat now</Text>
              </View>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HelpScreen;
