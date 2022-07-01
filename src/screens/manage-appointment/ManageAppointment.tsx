import {Image, Text, View, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import Modal from 'react-native-modal';
import scale, {verticalScale} from '../../globals/scale';
import {images} from '../../assets/images/map';
import {colors} from '../../globals/colors';
import {styles} from './ManageAppointment.styles';
import CancleAppointment from '../cancle-appointment/CancleAppointment';

const ManageAppointment = (props: any) => {
  const {modalVisible, setModalVisible,onConfirm} = props
  const [checkedCircleShift, setCheckedCircleShift] = useState(0);
  const [modalCancle, setModalCancle] = useState(false);
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: verticalScale(36),
          marginHorizontal: scale(30),
        }}>
        <Text style={styles.manageAppointment}>Manage appointment</Text>
        <TouchableOpacity onPress={() => {setModalVisible(!modalVisible)}}>
          <Image
            source={images.cancle}
            resizeMode="contain"
            style={styles.cancle}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: verticalScale(25),
            marginHorizontal: scale(20),
            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={styles.name}>Francis Marjoram</Text>
            <Text style={styles.profession}>Therapist</Text>
          </View>
          <Image
            source={images.face}
            resizeMode="contain"
            style={styles.faceImage}
          />
        </View>
        <View
          style={{
            borderWidth: 0.5,
            borderColor: colors.lightGray,
            marginTop: verticalScale(16),
            marginHorizontal: scale(20),
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            marginTop: verticalScale(22),
            marginLeft: scale(20),
          }}>
          <Image
            source={images.icon_calender}
            resizeMode="contain"
            style={styles.calenderImage}
          />
          <Text style={styles.date}>Wednesday April 7, 2022</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: verticalScale(12),
            marginLeft: scale(20),
          }}>
          <Image
            source={images.icon_watch}
            resizeMode="contain"
            style={styles.timeImage}
          />
          <Text style={styles.date}>3:00 - 3:45 pm PT</Text>
        </View>
      </View>
      <View style={styles.card2}>
        <TouchableOpacity
          onPress={() => {
            setCheckedCircleShift(0);
          }}>
          <View style={styles.appointmentContainer}>
            {checkedCircleShift == 0 ? (
              <Image
                source={images.checked}
                resizeMode="contain"
                style={styles.checked}
              />
            ) : (
              <View style={styles.circle} />
            )}
            <Text style={styles.modifiedAppointment}>Modify appointment</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setCheckedCircleShift(1);
          }}>
          <View style={styles.appointmentContainerCancle}>
            {checkedCircleShift == 1 ? (
              <Image
                source={images.checked}
                resizeMode="contain"
                style={styles.checked}
              />
            ) : (
              <View style={styles.circle} />
            )}
            <Text style={styles.cancleAppointment}>Cancle appointment</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          marginBottom: verticalScale(30),
        }}>
        <TouchableOpacity onPress={() => checkedCircleShift == 1 ? setModalCancle(!modalCancle) : null}>
          <View style={styles.btnContainer}>
            <Text style={styles.btnText}>Continue</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        isVisible={modalCancle}
        style={{margin: 0, backgroundColor: 'rgba(0, 0, 0, 0.4)'}}
        hasBackdrop={true}
        backdropOpacity={0.1}
        backdropColor="transparent"
        onRequestClose={() => {
          console.log('Modal has been closed.');
          setModalCancle(!modalCancle);
        }}>
        <View
          style={{
            marginTop: verticalScale(100),
            backgroundColor: colors.white,
            flex: 1,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}>
            <CancleAppointment />
          </View>
      </Modal>
    </View>
  );
};

export default ManageAppointment;
