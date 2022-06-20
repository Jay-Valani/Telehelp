import {Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from './SplashScreen.styles';
import {images} from '../../assets/images/map';

const SplashScreen = (props: any) => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('onBoard');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={images.app_logo}
        resizeMode="contain"
        style={styles.logo}
      />
      <Text style={styles.appName}>Telehelp</Text>
    </View>
  );
};

export default SplashScreen;
