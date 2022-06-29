import {TouchableOpacity, Text, View, Image} from 'react-native';
import React from 'react';
import {styles} from './HelpScreen.styles';
import scale, {verticalScale} from '../../globals/scale';
import {images} from '../../assets/images/map';
import {colors} from '../../globals/colors';

const HelpScreen = () => {
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
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: scale(20),
              }}>
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}>
                <View style={styles.calenderContainer}>
                  <Image
                    source={images.schedule_icon}
                    resizeMode="contain"
                    style={styles.schedule}
                  />
                  <Text style={styles.date}>Every Wednesday </Text>
                </View>
                <View
                  style={[
                    styles.calenderContainer,
                    {marginTop: verticalScale(8)},
                  ]}>
                  <Image
                    source={images.icon_watch}
                    resizeMode="contain"
                    style={styles.watch}
                  />
                  <Text style={styles.time}>3:00 - 3:45 pm PT </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  borderWidth: 1,
                  paddingHorizontal: 30,
                  paddingVertical: 15,
                  borderRadius: 30,
                  borderColor: colors.appThemeColor,
                  backgroundColor: colors.appThemeColor,
                  alignSelf: 'center',
                }}>
                <Image
                  source={images.iconVideo}
                  resizeMode="contain"
                  style={{tintColor: colors.white, marginTop: verticalScale(5)}}
                />
                <Text style={styles.joinNow}>Join now</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HelpScreen;
