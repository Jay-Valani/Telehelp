import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import scale, {verticalScale} from '../../globals/scale';
import {images} from '../../assets/images/map';
import {colors} from '../../globals/colors';
import * as global from '../../globals/global';
import Input from '../../component/text-input/Input';

const EmailModal = (props: any) => {
  const [email, setEmail] = useState('');
  const {emailModal, setEmailModal} = props;
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: verticalScale(36),
          marginHorizontal: scale(30),
        }}>
        <Text style={styles.manageAppointment}>Email appointment</Text>
        <TouchableOpacity
          onPress={() => {
            setEmailModal(!emailModal);
          }}>
          <Image source={images.cancle} style={styles.cancle} />
        </TouchableOpacity>
      </View>
      <Input
        title="Email address"
        placeholderTextColor={colors.lightBlack}
        style={{marginTop: verticalScale(40)}}
        placeholder="Email address"
        value={email}
        onInputChangeHandler={val => {
          setEmail(val);
        }}
      />
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          marginBottom: verticalScale(30),
        }}>
        <View style={styles.dashLine} />
        <TouchableOpacity onPress={() => {}}>
          <View
            style={[
              styles.btnContainer,
              {
                borderColor:
                  email == ''
                    ? colors.disableButtonColor
                    : colors.appThemeColor,
                backgroundColor:
                  email == ''
                    ? colors.disableButtonColor
                    : colors.appThemeColor,
              },
            ]}>
            <Text style={styles.btnText}>Change email</Text>
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

export default EmailModal;
