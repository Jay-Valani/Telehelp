import { Image, Text, View, TouchableOpacity } from "react-native";
import React, { useState,useEffect } from "react";
import { styles } from "./EditAppointment.styles";
import { images } from "../../Assests/Images/map";
import scale, { verticalScale } from "../../Globals/scale";
import { colors } from "../../Globals/color";
import Modal from "react-native-modal"
import Popup from "../Feedback/FeedbackScreen";

const EditProfile = () => {
  const [checkedCircleShift, setCheckedCircleShift] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    // setTimeout(() => {
    setModalVisible(!modalVisible);
    // }, 1000);
  }, []);
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          source={images.cancle}
          resizeMode="contain"
          style={styles.cancle}
        />
      </TouchableOpacity>
      <Text style={styles.heading}>Edit appointment</Text>
      <View style={styles.card}>
        <View
          style={{
            flexDirection: "row",
            marginTop: verticalScale(25),
            marginHorizontal: scale(20),
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={styles.name}>Francis Marjoram</Text>
            <Text style={styles.profession}>Therapist</Text>
          </View>
          <Image
            source={images.face}
            resizeMode="contain"
            style={styles.face}
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
            flexDirection: "row",
            marginTop: verticalScale(22),
            marginLeft: scale(20),
          }}
        >
          <Image
            source={images.icon_calender}
            resizeMode="contain"
            style={styles.calenderImage}
          />
          <Text style={styles.date}>Wednesday April 7, 2022</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: verticalScale(12),
            marginLeft: scale(20),
          }}
        >
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
            setCheckedCircleShift(!checkedCircleShift);
          }}
        >
          <View style={styles.appointmentContainer}>
            {checkedCircleShift == false ? (
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
            setCheckedCircleShift(!checkedCircleShift);
          }}
        >
          <View style={styles.appointmentContainerCancle}>
            {checkedCircleShift == true ? (
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
          justifyContent: "flex-end",
          marginBottom: verticalScale(30),
        }}
      >
        <TouchableOpacity>
          <View style={styles.btnContainer}>
            <Text style={styles.btnText}>Continue</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Modal
        isVisible={modalVisible}
        hasBackdrop={true}
        backdropOpacity={0.7}
        backdropColor={colors.gray}
        onRequestClose={() => {
          console.log("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
          <Popup />
      </Modal>
    </View>
  );
};

export default EditProfile;
