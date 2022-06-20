import React, {useContext} from 'react';
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
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => props.navigation.goBack()}>
        <Image source={images.back_arrow} style={styles.backImage} />
      </TouchableOpacity>
      <Text style={styles.title}>Enter your {'\n'}email address</Text>
      <Input title="Email address" style={{marginTop: verticalScale(40)}} />
      <Button
        title="Continue"
        customButtonStyle={{
          marginHorizontal: verticalScale(20),
        }}
        // disable={!validation.isValidEmail(loginUserDetail.email) ? true : false}
        customContainerStyle={styles.button}
        onPress={() => {
          props.navigation.navigate('passwordScreen');
        }}
      />
    </View>
  );
}
