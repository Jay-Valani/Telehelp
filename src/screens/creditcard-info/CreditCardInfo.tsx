import {Image, Text, View, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import scale, {verticalScale} from '../../globals/scale';
import {images} from '../../assets/images/map';
import {colors} from '../../globals/colors';
import {styles} from './CreditCardInfo.styles';

const CreditCardInfo = (props: any) => {
  return (
    <View style={styles.container}>
      <View style={{backgroundColor: colors.appThemeColor, flex: 0.2}}>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: scale(23),
            marginTop: verticalScale(80),
          }}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Image
              source={images.back_arrow}
              resizeMode="contain"
              style={styles.back_arrow}
            />
          </TouchableOpacity>
          <Text style={styles.heading}>Credit Card Info</Text>
        </View>
      </View>

      <View style={{flex: 0.8}}>
        <View style={styles.card}>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: verticalScale(16),
              marginHorizontal: scale(20),
              justifyContent: 'space-between',
            }}>
            <View style={{flex: 1}}>
              <Text style={styles.info}>Credit card info</Text>
              <Text style={styles.description}>MasterCard **** 5778</Text>
            </View>
          </View>
        </View>

        {/* button */}
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            marginBottom: verticalScale(25),
          }}>
          <TouchableOpacity>
            <Text
              style={[
                styles.btnText,
                {color: colors.appThemeColor, marginTop: verticalScale(24)},
              ]}>
              I want to upload a new credit card
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CreditCardInfo;
