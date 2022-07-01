import {TouchableOpacity, Text, View, Image} from 'react-native';
import React from 'react';
import {images} from '../../assets/images/map';
import scale, {verticalScale} from '../../globals/scale';
import {styles} from './ConfirmSelection.styles';
import {colors} from '../../globals/colors';

const ConfirmSelection = (props: any) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: scale(23),
          justifyContent: 'space-between',
          marginTop: verticalScale(60),
        }}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.goBack();
          }}>
          <Image
            source={images.back_arrow}
            resizeMode="contain"
            style={styles.back_arrow}
          />
        </TouchableOpacity>
        <Image source={images.circle} resizeMode="contain" />
      </View>
      <Text style={styles.heading}>
        Please confirm {'\n'}
        your selection
      </Text>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image
            source={images.face}
            resizeMode="contain"
            style={styles.face}
          />
          <TouchableOpacity>
            <Image
              source={images.edit}
              resizeMode="contain"
              style={styles.edit}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.name}>Francis Marjoram</Text>
        <Text style={styles.profession}>Therapist</Text>
        <View style={styles.line} />
        <View style={styles.calenderContainer}>
          <Image
            source={images.schedule_icon}
            resizeMode="contain"
            style={styles.schedule}
          />
          <Text style={styles.date}>Wednesday April 7, 2022 </Text>
        </View>
        <View style={[styles.calenderContainer, {marginTop: verticalScale(8)}]}>
          <Image
            source={images.icon_watch}
            resizeMode="contain"
            style={styles.watch}
          />
          <Text style={styles.time}>3:00 - 3:45 pm PT </Text>
        </View>
      </View>
      <Text style={styles.disclaimer}>
        Important disclaimer: {'\n'}
        <Text style={{color: colors.appThemeColor}}>Missed session</Text> policy
        will apply
      </Text>
      <View style={{flex: 1, justifyContent: 'flex-end', marginBottom: 27}}>
        <TouchableOpacity
          onPress={() => {props.navigation.navigate("tabNavigation")}}>
          <View style={styles.btnContainer}>
            <Text style={styles.but}>Yes, please schedule this</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.btnContainer1}>
            <Text style={[styles.but, {color: colors.appThemeColor}]}>
              Cancel
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ConfirmSelection;
