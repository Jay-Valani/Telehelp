import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import scale, {verticalScale} from '../../globals/scale';
import {images} from '../../assets/images/map';
import {colors} from '../../globals/colors';
import * as global from '../../globals/global';
import Input from '../../component/text-input/Input';

const PasswordModal = (props: any) => {
  const [password, setPassword] = useState('');
  const [iconEye, setIconEye] = useState(true);
  const {passwordModal, setPasswordModal} = props;
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
            setPasswordModal(!passwordModal);
          }}>
          <Image source={images.cancle} style={styles.cancle} />
        </TouchableOpacity>
      </View>
      <View>
        <Input
          title="Current password"
          placeholder="Enter password"
          placeholderTextColor={colors.lightBlack}
          passwordIcon={
            iconEye == true ? images.password_show : images.password_hide
          }
          onIconPress={() => setIconEye(!iconEye)}
          secureTextEntry={iconEye == true ? true : false}
          style={{marginTop: verticalScale(24)}}
          onPressForgetPassword={() =>
            props.navigation.navigate('reset_password')
          }
        />
        <Input
          title="New password"
          placeholder="Enter password"
          placeholderTextColor={colors.lightBlack}
          passwordIcon={
            iconEye == true ? images.password_show : images.password_hide
          }
          onIconPress={() => setIconEye(!iconEye)}
          secureTextEntry={iconEye == true ? true : false}
          style={{marginTop: verticalScale(24)}}
          onPressForgetPassword={() =>
            props.navigation.navigate('reset_password')
          }
        />
        <Text style={styles.mini}>
          Minimum 8 char, min 1 uppercase, 1 number and 1 special character
        </Text>
      </View>
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
                  password == ''
                    ? colors.disableButtonColor
                    : colors.appThemeColor,
                backgroundColor:
                  password == ''
                    ? colors.disableButtonColor
                    : colors.appThemeColor,
              },
            ]}>
            <Text style={styles.btnText}>Change password</Text>
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
    marginVertical: verticalScale(15),
  },
  mini: {
    fontSize: global.font_14,
    color: colors.gray,
    marginTop: verticalScale(16),
    marginHorizontal: scale(20),
    fontWeight: '400',
  },
});

export default PasswordModal;
