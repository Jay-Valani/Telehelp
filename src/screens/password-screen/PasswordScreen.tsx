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
import {styles} from './PasswordScreen.styles';

export default function PasswordScreen(props: any) {
  const [iconEye, setIconEye] = useState(true);
  const [passwordChange, setPasswordChange] = useState('');
  const onEmailChange = val => {
    console.log('val', val);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(val) === false) {
      setPasswordChange(val);
      return false;
    } else {
      setPasswordChange(val);
    }
  };
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => props.navigation.goBack()}>
        <Image source={images.back_arrow} style={styles.backImage} />
      </TouchableOpacity>
      <Text style={styles.title}>
        Set your {'\n'}
        password
      </Text>
      <Input
        title="Password"
        passwordIcon={
          iconEye == true ? images.password_show : images.password_hide
        }
        onIconPress={() => setIconEye(!iconEye)}
        secureTextEntry={iconEye == true ? true : false}
        style={{marginTop: verticalScale(40)}}
        value={passwordChange}
        placeholder="Enter password"
        onInputChangeHandler={val => onEmailChange(val)}
      />
      <Text style={styles.passwordNote}>
        Minimum 8 char, min 1 uppercase, 1 number and 1 special character
      </Text>
      <Button
        title="Continue"
        customButtonStyle={{
          marginHorizontal: verticalScale(20),
        }}
        disable={!passwordChange}
        customContainerStyle={styles.button}
        onPress={() => {
          props.navigation.navigate('tabNavigation');
        }}
      />
    </View>
  );
}
