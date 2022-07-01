import {Image, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {images} from '../../assets/images/map';
import {styles} from './CancleAppointment.styles';
import scale, {verticalScale} from '../../globals/scale';
import {colors} from '../../globals/colors';

const CancleAppointment = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: verticalScale(36),
          marginHorizontal: scale(30),
        }}>
        <Text style={styles.manageAppointment}>Cancle appointment</Text>
        <TouchableOpacity onPress={() => {}}>
          <Image
            source={images.cancle}
            // resizeMode="contain"
            style={styles.cancle}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.subHeading}>
        Are you sure you want to cancel this appointment?
      </Text>
      <View style={styles.card}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: verticalScale(25),
            marginHorizontal: scale(20),
            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={styles.name}>Francis Marjoram</Text>
            <Text style={styles.profession}>Therapist</Text>
          </View>
          <Image
            source={images.face}
            resizeMode="contain"
            style={styles.faceImage}
          />
        </View>
        <View
          style={{
            borderWidth: 0.5,
            borderColor: colors.lightGray,
            marginTop: verticalScale(16),
            marginHorizontal: scale(20),
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            marginTop: verticalScale(22),
            marginLeft: scale(20),
          }}>
          <Image
            source={images.icon_calender}
            resizeMode="contain"
            style={styles.calenderImage}
          />
          <Text style={styles.date}>Wednesday April 7, 2022</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: verticalScale(12),
            marginLeft: scale(20),
          }}>
          <Image
            source={images.icon_watch}
            resizeMode="contain"
            style={styles.timeImage}
          />
          <Text style={styles.date}>3:00 - 3:45 pm PT</Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          // marginBottom: verticalScale(30),
        }}>
        <TouchableOpacity>
          <View style={styles.btnContainer}>
            <Text style={styles.btnText}>Cancle</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={[
              styles.btnText,
              {color: colors.appThemeColor, marginTop: verticalScale(24)},
            ]}>
            Dismiss
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CancleAppointment;
