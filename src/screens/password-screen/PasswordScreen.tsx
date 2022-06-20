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

      />
      <Text style={styles.passwordNote}>
        Minimum 8 char, min 1 uppercase, 1 number and 1 special character
      </Text>
      <Button
        title="Continue"
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
