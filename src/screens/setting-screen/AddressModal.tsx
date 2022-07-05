import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import scale, {verticalScale} from '../../globals/scale';
import {images} from '../../assets/images/map';
import {colors} from '../../globals/colors';
import * as global from '../../globals/global';
import Input from '../../component/text-input/Input';
import DropDown from '../../component/drop-down/DropDown';

const AddressModal = (props: any) => {
  const {
    addressModal,
    setAddressModal,
    street,
    setStreet,
    unitNumber,
    setUnitNumber,
    city,
    setCity,
    zip,
    setZip,
  } = props;
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: verticalScale(36),
          marginHorizontal: scale(30),
        }}>
        <Text style={styles.manageAppointment}>Edit address</Text>
        <TouchableOpacity
          onPress={() => {
            setAddressModal(!addressModal);
          }}>
          <Image source={images.cancle} style={styles.cancle} />
        </TouchableOpacity>
      </View>
      <View>
        <Input
          title="Street and number"
          placeholderTextColor={colors.lightBlack}
          style={{marginTop: verticalScale(40)}}
          placeholder="Street and number"
          value={street}
          onInputChangeHandler={val => {
            setStreet(val);
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginTop: verticalScale(24),
          }}>
          <Input
            title="Unit number"
            placeholderTextColor={colors.lightBlack}
            style={{flex: 1}}
            placeholder="Unit number"
            value={unitNumber}
            maxLength={10}
            keyboardType="phone-pad"
            onInputChangeHandler={val => {
              setUnitNumber(val);
            }}
          />
          <DropDown heading="State" title="Choose" />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginTop: verticalScale(24),
          }}>
          <Input
            title="City"
            placeholderTextColor={colors.lightBlack}
            style={{flex: 1.2}}
            placeholder="Enter"
            value={city}
            maxLength={3}
            onInputChangeHandler={val => {
              setCity(val);
            }}
          />
          <Input
            title="Zip"
            placeholderTextColor={colors.lightBlack}
            style={{flex: 1}}
            placeholder="12345"
            value={zip}
            keyboardType="phone-pad"
            maxLength={4}
            onInputChangeHandler={val => {
              setZip(val);
            }}
          />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          marginBottom: verticalScale(30),
        }}>
        <View style={styles.dashLine} />
        <TouchableOpacity
          onPress={() => {
            setAddressModal(!addressModal);
          }}>
          <View
            style={[
              styles.btnContainer,
              {
                borderColor:
                  street == '' && unitNumber == '' && city == '' && zip == ''
                    ? colors.disableButtonColor
                    : colors.appThemeColor,
                backgroundColor:
                  street == '' && unitNumber == '' && city == '' && zip == ''
                    ? colors.disableButtonColor
                    : colors.appThemeColor,
              },
            ]}>
            <Text style={styles.btnText}>Change address</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.white,
  },
  manageAppointment: {
    fontSize: global.font_24,
    color: colors.lightBlack,
  },
  cancle: {
    tintColor: colors.lightBlack,
    height: 16,
    width: 16,
    marginTop: verticalScale(10),
    marginLeft: scale(24),
  },
  dashLine: {
    borderWidth: 0.6,
    borderColor: colors.lightGray,
  },
  btnContainer: {
    borderWidth: 0.1,
    height: 56,
    marginHorizontal: scale(20),
    borderRadius: 30,
    borderColor: colors.appThemeColor,
    backgroundColor: colors.appThemeColor,
    marginTop: verticalScale(19),
  },
  btnText: {
    fontSize: global.font_16,
    color: colors.white,
    textAlign: 'center',
    marginVertical: verticalScale(18),
  },
});

export default AddressModal;
