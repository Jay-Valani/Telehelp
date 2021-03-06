import {Image, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import {styles} from './PersonalInfo.styles';
import scale, {verticalScale} from '../../globals/scale';
import {images} from '../../assets/images/map';
import Input from '../../component/text-input/Input';
import {colors} from '../../globals/colors';
import DropDown from '../../component/drop-down/DropDown';
import Modal from 'react-native-modal';
import InsuranceCard from '../InsuranceCard/InsuranceCard';

const PersonalInfo = (props: any) => {
  const {
    isPersonalInfoDone,
    onConfirm,
    profileModalVisible,
    setProfileModalVisible,
  } = props;
  const [insuranceName, setInsuranceName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNUmber] = useState('');
  const [dob, setDob] = useState('');
  const [memberId, setMemberId] = useState('');
  const [groupId, setGroupId] = useState('');
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: verticalScale(28),
          marginLeft: scale(20),
          marginRight: scale(28),
          justifyContent: 'space-between',
        }}>
        <Text style={styles.personalInfo}>Personal info</Text>
        <TouchableOpacity
          onPress={() => {
            setProfileModalVisible(!profileModalVisible);
          }}>
          <Image
            source={images.cancle}
            resizeMode="contain"
            style={styles.cancle}
          />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={{marginTop: verticalScale(36)}}>
          <Input
            title="Primary insurance name"
            placeholder="For example: United Healthcare"
            placeholderTextColor={colors.gray}
            keyboardType="default"
            value={insuranceName}
            onInputChangeHandler={val => setInsuranceName(val)}
          />
          <DropDown
            heading="Primary holder of the insurance"
            title="Choose"
            style={{marginTop: verticalScale(24)}}
          />
          <Input
            title="First name of primary holder"
            placeholder="First name of insured"
            placeholderTextColor={colors.gray}
            style={{marginTop: verticalScale(24)}}
            keyboardType="default"
            value={firstName}
            onInputChangeHandler={val => setFirstName(val)}
          />
          <Input
            title="Last name of primary holder"
            placeholder="Last name of insured"
            placeholderTextColor={colors.gray}
            keyboardType="default"
            style={{marginTop: verticalScale(24)}}
            value={lastName}
            onInputChangeHandler={val => setLastName(val)}
          />
          <Input
            title="Phone number"
            placeholder="Phone number"
            placeholderTextColor={colors.gray}
            style={{marginTop: verticalScale(24)}}
            keyboardType="phone-pad"
            maxLength={10}
            value={phoneNumber}
            onInputChangeHandler={val => setPhoneNUmber(val)}
          />
          <Input
            title="Date of birth of insured"
            placeholder="MM/DD/YYYY"
            placeholderTextColor={colors.gray}
            style={{marginTop: verticalScale(24)}}
            keyboardType="phone-pad"
            value={dob}
            onInputChangeHandler={val => setDob(val)}
          />
          <Input
            title="Member ID"
            placeholder="Member ID"
            placeholderTextColor={colors.gray}
            style={{marginTop: verticalScale(24)}}
            maxLength={10}
            keyboardType="phone-pad"
            value={memberId}
            onInputChangeHandler={val => setMemberId(val)}
          />
          <Input
            title="Group ID"
            placeholder="Group ID"
            placeholderTextColor={colors.gray}
            style={{marginTop: verticalScale(24)}}
            maxLength={10}
            keyboardType="phone-pad"
            value={groupId}
            onInputChangeHandler={val => setGroupId(val)}
          />
        </View>
        <View
          style={{
            borderWidth: 0.5,
            borderColor: colors.lightGray,
            marginTop: verticalScale(37),
          }}
        />
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            marginBottom: verticalScale(15),
            marginTop: verticalScale(20),
          }}>
          <TouchableOpacity
            onPress={() => {
              insuranceName == '' ||
              firstName == '' ||
              lastName == '' ||
              phoneNumber == '' ||
              dob == '' ||
              memberId == '' ||
              groupId == ''
                ? null
                : setProfileModalVisible(!profileModalVisible),
                onConfirm();
            }}>
            <View
              style={[
                styles.btnContainer,
                {
                  borderColor:
                    insuranceName == '' ||
                    firstName == '' ||
                    lastName == '' ||
                    phoneNumber == '' ||
                    dob == '' ||
                    memberId == '' ||
                    groupId == ''
                      ? colors.disableButtonColor
                      : colors.appThemeColor,
                  backgroundColor:
                    insuranceName == '' ||
                    firstName == '' ||
                    lastName == '' ||
                    phoneNumber == '' ||
                    dob == '' ||
                    memberId == '' ||
                    groupId == ''
                      ? colors.disableButtonColor
                      : colors.appThemeColor,
                },
              ]}>
              <Text
                style={[styles.btnText, {marginVertical: verticalScale(15)}]}>
                Confirm
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default PersonalInfo;
