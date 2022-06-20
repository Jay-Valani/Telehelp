import {Image, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState,useEffect} from 'react';
import {styles} from './PersonalInfo.styles';
import scale, {verticalScale} from '../../globals/scale';
import {images} from '../../assets/images/map';
import Input from '../../component/text-input/Input';
import {colors} from '../../globals/colors';
import DropDown from '../../component/drop-down/DropDown';
import Modal from "react-native-modal";
import InsuranceCard from '../InsuranceCard/InsuranceCard';

const PersonalInfo = (props: any) => {
  const [modalVisible, setModalVisible] = useState(false);
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
        <TouchableOpacity onPress={() => {}}>
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
          />
          <Input
            title="Last name of primary holder"
            placeholder="Last name of insured"
            placeholderTextColor={colors.gray}
            style={{marginTop: verticalScale(24)}}
          />
          <Input
            title="Phone number"
            placeholder="Phone number"
            placeholderTextColor={colors.gray}
            style={{marginTop: verticalScale(24)}}
          />
          <Input
            title="Date of birth of insured"
            placeholder="MM/DD/YYYY"
            placeholderTextColor={colors.gray}
            style={{marginTop: verticalScale(24)}}
          />
          <Input
            title="Member ID"
            placeholder="Member ID"
            placeholderTextColor={colors.gray}
            style={{marginTop: verticalScale(24)}}
          />
          <Input
            title="Group ID"
            placeholder="Group ID"
            placeholderTextColor={colors.gray}
            style={{marginTop: verticalScale(24)}}
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
          <TouchableOpacity onPress={() => {setModalVisible(!modalVisible)}}>
            <View
              style={[
                styles.btnContainer,
                {
                  borderColor: colors.appThemeColor,
                  backgroundColor: colors.appThemeColor,
                },
              ]}>
              <Text style={styles.btnText}>Confirm</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        isVisible={modalVisible}
        style={{margin: 0}}
        hasBackdrop={true}
        backdropOpacity={0.2}
        // backdropColor="transparent"
        onRequestClose={() => {
          console.log('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View
          style={{
            marginTop: verticalScale(70),
            backgroundColor: 'transparent',
            flex: 1,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}>
            <InsuranceCard />
        </View>
      </Modal>
    </View>
  );
};

export default PersonalInfo;