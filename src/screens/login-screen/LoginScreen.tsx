import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  ToastAndroid,
} from 'react-native';
import {images} from '../../assets/images/map';
import Button from '../../component/Button/Button';
import Input from '../../component/text-input/Input';
import {colors} from '../../globals/colors';
import {verticalScale} from '../../globals/scale';
import {styles} from './LoginScreen.styles';

export default function LoginScreen(props: any) {
  const [iconEye, setIconEye] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onEmailChange = (val: any) => {
    console.log('item', val);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(val) === false) {
      console.log('Email is Not Correct');
      setEmail(val);
      return false;
    } else {
      setEmail(val);
      console.log('Email is Correct');
    }
  };
  const onPasswordChange = (val: any) => {
    if (password.length != 8) {
      console.log('password is Not Correct');
      setPassword(val);
      return false;
    } else {
      setPassword(val);
      console.log('password is Correct');
    }
  };
  const onSubmit = (val: any) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(val) === false && email.length != 0 && password.length != 0) {
      ToastAndroid.showWithGravity(
        'Your account is verified',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
      );
      props.navigation.navigate('set_payment_method');
    } else {
      ToastAndroid.showWithGravity(
        'Please enter valid input field',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
      );
    }
  };
  return (
    <View style={styles.container}>
      {/* <SafeAreaView /> */}
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => props.navigation.goBack()}>
          <Image source={images.back_arrow} style={styles.backImage} />
        </TouchableOpacity>
        <Text style={styles.title}>Welcome back</Text>
        <Input
          title="Email address"
          placeholderTextColor={colors.lightBlack}
          style={{marginTop: verticalScale(40)}}
          placeholder="Email address"
          keyboardType="email-address"
          value={email}
          onInputChangeHandler={val => onEmailChange(val)}
        />
        <Input
          title="Password"
          placeholder="Password"
          placeholderTextColor={colors.lightBlack}
          value={password}
          onInputChangeHandler={val => onPasswordChange(val)}
          passwordIcon={
            iconEye == true ? images.password_show : images.password_hide
          }
          onIconPress={() => setIconEye(!iconEye)}
          secureTextEntry={iconEye == true ? true : false}
          style={{marginTop: verticalScale(24)}}
          subTitle="Forgot password"
          keyboardType="default"
          onPressForgetPassword={() =>
            props.navigation.navigate('reset_password',{email})
          }
        />
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            marginBottom: verticalScale(30),
          }}>
          <TouchableOpacity onPress={(val) => {onSubmit(val)}}>
            <View
              style={[
                styles.btnContainer,
                {
                  borderColor:
                    email == '' && password == ''
                      ? colors.disableButtonColor
                      : colors.appThemeColor,
                  backgroundColor:
                    email == '' && password == ''
                      ? colors.disableButtonColor
                      : colors.appThemeColor,
                },
              ]}>
              <Text style={styles.btnText}>Log In</Text>
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
// props.navigation.navigate('set_payment_method');