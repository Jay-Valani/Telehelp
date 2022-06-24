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
import { colors } from '../../globals/colors';
import {verticalScale} from '../../globals/scale';
import CheckEmail from '../check-email/CheckEmail';
import {styles} from './SetNewPasswordScreen.styles';

export default function SetNewPasswordScreen(props: any) {
  const [iconEye, setIconEye] = useState(true);  
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => props.navigation.goBack()}>
        <Image source={images.back_arrow} style={styles.backImage} />
      </TouchableOpacity>
      <Text style={styles.title}>Set new password</Text>
      <Input
        title="Password"
        placeholder="Enter password"
        placeholderTextColor={colors.lightBlack}
        passwordIcon={
          iconEye == true ? images.password_show : images.password_hide
        }
        onIconPress={() => setIconEye(!iconEye)}
        secureTextEntry={iconEye == true ? true : false}
        style={{marginTop: verticalScale(40)}}
      />
      <Text style={styles.passwordNote}>
        Minimum 8 char, min 1 uppercase, 1 number and 1 special character
      </Text>
      <Button
        title="Set password"
        customButtonStyle={{
          marginHorizontal: verticalScale(20),
        }}
        // disable={!validation.isValidEmail(loginUserDetail.email) ? true : false}
        customContainerStyle={styles.button}
        onPress={() => {
          props.navigation.navigate('setPassword');
        }}
      />
    </View>
  );
}
