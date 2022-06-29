import {Image, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './BottomTab.styles';
import {images} from '../../assets/images/map';
import {colors} from '../../globals/colors';
import { useNavigation } from '@react-navigation/native';

const BottomTab = (props: any) => {
  const [bottom, setBottom] = useState(0);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          onPress={() => {
            setBottom(0);
          }}>
          <Image
            source={images.schedule_icon}
            style={[
              styles.schedule,
              {
                tintColor: bottom == 0 ? colors.appThemeColor : colors.gray,
              },
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setBottom(1);
            navigation.navigate('help_screen');
          }}>
          <Image
            source={images.community_icon}
            style={[
              styles.community,
              {
                tintColor: bottom == 1 ? colors.appThemeColor : colors.gray,
              },
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setBottom(2);
          }}>
          <Image
            source={images.profile_icon}
            style={[
              styles.profile,
              {
                tintColor: bottom == 2 ? colors.appThemeColor : colors.gray,
              },
            ]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomTab;
