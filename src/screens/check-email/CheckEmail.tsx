import React, {useEffect} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  Keyboard,
} from 'react-native';
import {images} from '../../assets/images/map';
import {styles} from './CheckEmail.styles';

export default function CheckEmail(props: any) {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate("set_new_password")
    }, 3000);
  }, [])
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => props.navigation.goBack()}>
        <Image source={images.back_arrow} style={styles.backImage} />
      </TouchableOpacity>
      <Text style={styles.title}>Check your email</Text>
      <Text style={styles.subTitle}>
        An email has been sent to you to reset your password.
      </Text>
      <View style={styles.butContainer}>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.btnTxt}>
            Didn’t get an email? We’ll resend it.
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
