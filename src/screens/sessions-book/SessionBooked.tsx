import {TouchableOpacity, Text, Image, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './SessionBooked.styles';
import scale, {verticalScale} from '../../globals/scale';
import {images} from '../../assets/images/map';
import {colors} from '../../globals/colors';

const SessionBooked = (props: any) => {
  const [selectedSession, setSelectedSession] = useState(false);
  const onSubmit = () => {
    selectedSession == true
      ? props.navigation.navigate('selected_frequency')
      : null;
  };
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
        <Image source={images.half_circle} resizeMode="contain" />
      </View>
      <Text style={styles.heading}>
        What type of session do you want to book?
      </Text>
      <Text style={styles.subHeading}>
        You will have the option to make this a {'\n'}recurring appointment.
      </Text>
      <View
        style={{
          flexDirection: 'row',
          marginTop: verticalScale(40),
          marginHorizontal: scale(20),
        }}>
        <TouchableOpacity
          onPress={() => {
            setSelectedSession(!selectedSession);
          }}>
          {selectedSession == false ? (
            <Image source={images.session1} />
          ) : (
            <Image source={images.session1_picked} />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Image
            source={images.group_session}
            style={{height: 188, weight: 161, marginTop: verticalScale(5)}}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          marginBottom: verticalScale(15),
        }}>
        <TouchableOpacity
          onPress={() => {
            onSubmit();
          }}>
          <View
            style={[
              styles.btnContainer,
              {
                borderColor:
                  selectedSession == false
                    ? colors.disableButtonColor
                    : colors.appThemeColor,
                backgroundColor:
                  selectedSession == false
                    ? colors.disableButtonColor
                    : colors.appThemeColor,
              },
            ]}>
            <Text style={styles.btnText}>Continue</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Text
            style={[
              styles.btnText,
              {color: colors.appThemeColor, marginTop: verticalScale(24)},
            ]}>
            Cancel
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SessionBooked;
