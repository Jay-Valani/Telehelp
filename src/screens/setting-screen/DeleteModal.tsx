import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import scale, {verticalScale} from '../../globals/scale';
import {images} from '../../assets/images/map';
import {colors} from '../../globals/colors';
import * as global from '../../globals/global';

const DeleteModal = (props: any) => {
  const {deleteModal, setDeleteModal} = props;
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: verticalScale(36),
          marginHorizontal: scale(30),
        }}>
        <Text style={styles.manageAppointment}>Delete account?</Text>
        <TouchableOpacity
          onPress={() => {
            setDeleteModal(!deleteModal);
          }}>
          <Image source={images.cancle} style={styles.cancle} />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.description}>
          Your account will be permanently deleted. If you wish to use Telehelp
          again in the future, you must create a new email and password and you
          won't be able to import your previous information. {'\n \n'} Your health records
          will still be stored on file with Telehelp by Sunshine Behavioral
          Health (SBH). You will only be able to access them by contacting SBH
          directly. {'\n \n'}Are you sure you want to delete your account?
        </Text>
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end', marginBottom: verticalScale(36)}}>
        <TouchableOpacity onPress={() => {setDeleteModal(!deleteModal);}}>
          <View style={styles.btnContainer}>
            <Text style={styles.but}>Yes, delete my account</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {setDeleteModal(!deleteModal);}}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.white,
  },
  manageAppointment: {
    fontSize: global.font_24,
    color: colors.lightBlack,
  },
  cancle: {
    tintColor: colors.lightBlack,
    height: 16,
    width: 16,
    marginTop: verticalScale(10),
    marginLeft: scale(24),
  },
  but: {
    fontSize: global.font_16,
    color: colors.white,
    textAlign: 'center',
  },
  btnContainer: {
    borderColor: colors.red,
    borderWidth: 1,
    padding: 15,
    backgroundColor: colors.red,
    borderRadius: 30,
    marginHorizontal: scale(20),
  },
  btnContainer1: {
    marginHorizontal: scale(20),
    marginTop: verticalScale(24),
  },
  description: {
    fontSize: global.font_16,
    color: colors.gray,
    textAlign: 'left',
    marginLeft: scale(32),
    marginRight: scale(28),
    fontWeight: "400",
    marginTop: verticalScale(24),
  }
});

export default DeleteModal;
