import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';
import {images} from '../../assets/images/map';
import Button from '../../component/Button/Button';
import Input from '../../component/text-input/Input';
import {verticalScale} from '../../globals/scale';
import { styles } from './LoginScreen.styles';

export default function LoginScreen(props: any) {
    const [iconEye, setIconEye] = useState(true);
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => props.navigation.goBack()}>
        <Image source={images.back_arrow} style={styles.backImage} />
      </TouchableOpacity>
      <Text style={styles.title}>Welcome back</Text>
      <Input title="Email address" style={{marginTop: verticalScale(40)}} />
      <Input
        title="Password"
        passwordIcon={
          iconEye == true ? images.password_show : images.password_hide
        }
        onIconPress={() => setIconEye(!iconEye)}
        secureTextEntry={iconEye == true ? true : false}
        style={{marginTop: verticalScale(24)}}
        subTitle="Forgot password"
        onPressForgetPassword={() => props.navigation.navigate("reset_password")}
      />
      <Button
        title="Log In"
        customButtonStyle={{
          marginHorizontal: verticalScale(20),
        }}
        // disable={!validation.isValidEmail(loginUserDetail.email) ? true : false}
        customContainerStyle={styles.button}
        onPress={() => {
          props.navigation.navigate("set_payment_method")
        }}
      />
    </View>
  );
}
