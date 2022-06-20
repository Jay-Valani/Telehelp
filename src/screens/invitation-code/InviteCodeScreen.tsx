import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {styles} from './InviteCodeScreen.styles';
import OTPTextView from 'react-native-otp-textinput';
import {colors} from '../../globals/colors';
import {images} from '../../assets/images/map';
import Button from '../../component/Button/Button';

const InviteCodeScreen = (props: any) => {
  let otpInput: any = useRef(null);
  const [buttonVisible, setButtonVisible] = useState();

  const onChangeCode = val => {
    setButtonVisible(val);
  };

  const clearText = () => {
    otpInput.clear();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backArrow}
        onPress={() => props.navigation.goBack()}>
        <Image source={images.back_arrow} style={styles.backImage} />
      </TouchableOpacity>
      <Text style={styles.title}>
        Enter your {'\n'}
        invite code
      </Text>
      <Text style={styles.subTitle}>
        Please enter the verification code you received
      </Text>
      <OTPTextView
        containerStyle={styles.otpContainer}
        textInputStyle={styles.otpInput}
        tintColor={colors.appThemeColor}
        inputCount={6}
        handleTextChange={val => {
          onChangeCode(val);
        }}
        ref={e => (otpInput = e)}
        keyboardType={'number-pad'}
      />
      <Button
        title="Continue"
        customButtonStyle={{
          marginHorizontal: 20,
        }}
        // disable={buttonVisible !== 6 ? true : false}
        customContainerStyle={styles.button}
        onPress={() => {props.navigation.navigate("emailScreen")}}
      />
    </View>
  );
};

export default InviteCodeScreen;
