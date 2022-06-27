import {TouchableOpacity, Image, Text, View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import scale, {verticalScale} from '../../../globals/scale';
import {images} from '../../../assets/images/map';
import {styles} from './MonthComponent.styles';

const MonthComponent = (props: any) => {
  const {onMonthSubmit, setSwitchDate, switchDate} = props;
  return (
    <View style={{flex: 1}}>
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
              <Text style={styles.name}>Francis Marjoram</Text>
              <Text style={styles.profession}>Therapist</Text>
            </View>
            <Image source={images.face} style={styles.face} />
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
                <Text style={styles.date}>Wednesday April 7, 2022 </Text>
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
          </View>
          <View style={styles.line} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: scale(20),
            }}>
            <Text style={styles.repeat}>Repeats Weekly</Text>
            <Image
              source={images.iconThreeDots}
              resizeMode="contain"
              style={[styles.watch]}
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MonthComponent;