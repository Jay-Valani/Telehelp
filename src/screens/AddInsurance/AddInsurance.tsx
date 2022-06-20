import {Image, Text, View, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {styles} from './AddInsurance.styles';
import scale, {verticalScale} from '../../globals/scale';
import {images} from '../../assets/images/map';
import {colors} from '../../globals/colors';
import Modal from 'react-native-modal';
import PersonalInfo from '../personal-info/PersonalInfo';

const AddInsurance = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [profileModalVisible, setProfileModalVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setModalVisible(!modalVisible);
    }, 1000);
  }, []);
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: scale(23),
          justifyContent: 'space-between',
          marginTop: verticalScale(60),
        }}>
        <TouchableOpacity>
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
      <Text style={styles.heading}>Add insurance details</Text>
      <View style={[styles.card, {marginTop: verticalScale(40)}]}>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: verticalScale(16),
            marginHorizontal: scale(20),
            justifyContent: 'space-between',
          }}>
          <View style={{flex: 1}}>
            <Text style={styles.info}>Personal info</Text>
            <Text style={styles.description}>Name, Tel #, DOB, ID etc.</Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: colors.gray,
              backgroundColor: colors.gray,
              borderRadius: 30,
              height: 30,
              width: 30,
              marginVertical: verticalScale(5),
            }}>
            <Text style={styles.plus}>+</Text>
          </View>
        </View>
      </View>

      <View style={[styles.card, {marginTop: verticalScale(12)}]}>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: verticalScale(16),
            marginHorizontal: scale(20),
            justifyContent: 'space-between',
          }}>
          <View style={{flex: 1}}>
            <Text style={styles.info}>Insurance card</Text>
            <Text style={styles.description}>Pictures of both sides</Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: colors.gray,
              backgroundColor: colors.gray,
              borderRadius: 30,
              height: 30,
              width: 30,
              marginVertical: verticalScale(5),
            }}>
            <Text style={styles.plus}>+</Text>
          </View>
        </View>
      </View>

      <View style={[styles.card, {marginTop: verticalScale(12)}]}>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: verticalScale(16),
            marginHorizontal: scale(20),
            justifyContent: 'space-between',
          }}>
          <View style={{flex: 1}}>
            <Text style={styles.info}>Gov issued ID</Text>
            <Text style={styles.description}>Pictures of both sides</Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: colors.gray,
              backgroundColor: colors.gray,
              borderRadius: 30,
              height: 30,
              width: 30,
              marginVertical: verticalScale(5),
            }}>
            <Text style={styles.plus}>+</Text>
          </View>
        </View>
      </View>
      {/* button */}
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          marginBottom: verticalScale(30),
        }}>
        <TouchableOpacity>
          <View style={styles.btnContainer}>
            <Text style={styles.btnText}>Save insurance details</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={[
              styles.btnText,
              {color: colors.appThemeColor, marginTop: verticalScale(24)},
            ]}>
            I'll upload my insurance later
          </Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        isVisible={modalVisible}
        style={{margin: 0}}
        hasBackdrop={true}
        backdropOpacity={0.8}
        backdropColor="transparent"
        onRequestClose={() => {
          console.log('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View
          style={{
            marginTop: verticalScale(400),
            backgroundColor: colors.white,
            flex: 1,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(!modalVisible);
            }}>
            <Image source={images.cancle} style={styles.cancle} />
          </TouchableOpacity>
          <Text style={styles.modalTitle}>Upload insurance later?</Text>
          <Text style={styles.modalSubTitle}>
            You can always add or update your insurance information later, but
            if this form is not complete before your first session you will be
            billed the cash pay rate of $115.00 per individual session.
          </Text>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              marginBottom: verticalScale(15),
            }}>
            <TouchableOpacity>
              <View style={styles.btnContainer}>
                <Text style={styles.btnText}>Confirm</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setProfileModalVisible(!profileModalVisible);
              }}>
              <Text
                style={[
                  styles.btnText,
                  {color: colors.appThemeColor, marginTop: verticalScale(24)},
                ]}>
                I'll upload my insurance later
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        isVisible={profileModalVisible}
        style={{margin: 0}}
        hasBackdrop={true}
        backdropOpacity={0.6}
        // backdropColor="transparent"
        onRequestClose={() => {
          console.log('Modal has been closed.');
          setProfileModalVisible(!profileModalVisible);
        }}>
        <View
          style={{
            marginTop: verticalScale(70),
            backgroundColor: 'transparent',
            flex: 1,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}>
          <PersonalInfo />
        </View>
      </Modal>
    </View>
  );
};

export default AddInsurance;
