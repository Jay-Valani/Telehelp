import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {images} from '../../assets/images/map';
import scale, {verticalScale} from '../../globals/scale';
import {styles} from './SetPaymentMethod.styles';
import {colors} from '../../globals/colors';

const SetPaymentMethod = (props: any) => {
  const [checkedCircleShift, setCheckedCircleShift] = useState(0);
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
        <Image
          source={images.unchecked}
          resizeMode="contain"
          style={styles.circle}
        />
      </View>
      <Text style={styles.mainHeading}>Set up payment method</Text>
      <Text style={styles.heading}>
        How would you like
        {'\n'}to proceed?
      </Text>

      <View style={styles.card2}>
        <TouchableOpacity
          onPress={() => {
            setCheckedCircleShift(!checkedCircleShift);
          }}>
          <View style={styles.appointmentContainer}>
            {checkedCircleShift == false ? (
              <Image
                source={images.checked}
                resizeMode="contain"
                style={styles.checked}
              />
            ) : (
              <View style={styles.Circle} />
            )}
            <Text style={styles.modifiedAppointment}>
              Use a credit card only
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setCheckedCircleShift(!checkedCircleShift);
          }}>
          <View style={styles.appointmentContainerCancle}>
            {checkedCircleShift == true ? (
              <Image
                source={images.checked}
                resizeMode="contain"
                style={styles.checked}
              />
            ) : (
              <View style={styles.Circle} />
            )}
            <Text style={styles.cancleAppointment}>
              Use a different health insurance
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          marginBottom: verticalScale(30),
        }}>
        <TouchableOpacity
          onPress={() => {
            checkedCircleShift == 0 ? 
            props.navigation.navigate('credit_payment')
            : 
            props.navigation.navigate('addInsurance')
          }}>
          <View style={styles.btnContainer}>
            <Text style={styles.btnText}>Continue</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SetPaymentMethod;
