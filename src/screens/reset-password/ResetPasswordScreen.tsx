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
import { styles } from './ResetPasswordScreen.styles';

export default function ResetPasswordScreen(props: any) {
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
      Reset password
      </Text>
      <Input
        title="Email address"
        style={{marginTop: verticalScale(40)}}
      />
      <Button
        title="Reset password"
        customButtonStyle={{
          marginHorizontal: verticalScale(20),
        }}
        // disable={!validation.isValidEmail(loginUserDetail.email) ? true : false}
        customContainerStyle={styles.button}
        onPress={() => {
          props.navigation.navigate('checkEmail');
        }}
      />
    </View>
  );
}
