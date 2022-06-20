import { Image, Text, View, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import Modal from "react-native-modal";
import FeedbackScreen from "../Feedback/FeedbackScreen";
import { colors } from "../../Globals/color";
import ReviewScreen from "../ReviewScreen/ReviewScreen";

const PopupScreen = (props: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    // setTimeout(() => {
    setModalVisible(!modalVisible);
    // }, 1000);
  }, []);
  return (
    <>
      <View style={styles.container}>
        <Modal
          transparent={true}
          isVisible={modalVisible}
          hasBackdrop={true}
          backdropOpacity={0.8}
          backdropColor="transparent"
          onRequestClose={() => {
            console.log("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View
            style={{
              // marginTop: 150,
              backgroundColor: "transperent",
              flex: 1,
              borderTopLeftRadius: 10,
            }}
          >
            <FeedbackScreen />
            {/* <ReviewScreen /> */}
          </View>
        </Modal>
      </View>
    </>
  );
};

export default PopupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray,
    opacity: 0.8
  },
});
