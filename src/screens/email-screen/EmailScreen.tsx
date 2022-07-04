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
import {styles} from './EmailScreen.styles';

export default function EmailScreen(props: any) {
  const [emailChange, setEmailChange] = useState('');
  const onEmailChange = val => {
    console.log('val', val);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(val) === false) {
      setEmailChange(val);
      return false;
    } else {
      setEmailChange(val);
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
      <Text style={styles.title}>Enter your {'\n'}email address</Text>
      <Input
        title="Email address"
        placeholder="Email address"
        value={emailChange}
        keyboardType="email-address"
        onInputChangeHandler={val => onEmailChange(val)}
        style={{marginTop: verticalScale(40)}}
      />
      <Button
        title="Continue"
        customButtonStyle={{
          marginHorizontal: verticalScale(20),
        }}
        disable={!emailChange}
        customContainerStyle={styles.button}
        onPress={() => {
          props.navigation.navigate('passwordScreen');
        }}
      />
    </View>
  );
}
