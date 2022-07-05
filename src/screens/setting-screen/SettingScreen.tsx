import {TouchableOpacity, Text, View, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import scale, {verticalScale} from '../../globals/scale';
import {images} from '../../assets/images/map';
import {colors} from '../../globals/colors';
import {styles} from './SettingScreen.styles';
import Modal from 'react-native-modal';
import ImagePicker from 'react-native-image-crop-picker';
import EmailModal from './EmailModal';
import AddressModal from './AddressModal';
import PasswordModal from './PassowrdModal';
import DeleteModal from './DeleteModal';

const SettingScreen = (props: any) => {
  const [email, setEmail] = useState('john@smith.com');
  const [street, setStreet] = useState('238 Avenue');
  const [unitNumber, setUnitNumber] = useState('29');
  const [city, setCity] = useState('New York');
  const [zip, setZip] = useState('1234');
  const [passwordModal, setPasswordModal] = useState(false);
  const [emailModal, setEmailModal] = useState(false);
  const [addressModal, setAddressModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState(require('./assets/face_oval.png'));
  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then(image => {
      console.log(image);
      setImage({
        uri: image.path,
        width: image.width,
        height: image.height,
        mime: image.mime,
      });
    });
  };

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then(image => {
      console.log(image);
      setImage({
        uri: image.path,
        width: image.width,
        height: image.height,
        mime: image.mime,
      });
    });
  };

  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Image
            source={images.back_arrow}
            resizeMode="contain"
            style={styles.back_arrow}
          />
        </TouchableOpacity>
        <Text style={styles.heading}>Settings</Text>
      </View>
      {/* footer */}
      <View style={styles.footer}>
        <ScrollView>
          {/* profile photo  */}
          <View style={styles.profilePhotoContainer}>
            <Image source={image} style={styles.profilePhoto} />
            <TouchableOpacity
              onPress={() => {
                setImage(image), setModalVisible(!modalVisible);
              }}>
              <Text style={styles.editPhoto}>Edit Photo</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.dashLine, {marginTop: verticalScale(32)}]} />
          {/* name */}
          <View
            style={[styles.settingsContainer, {marginTop: verticalScale(20)}]}>
            <View style={styles.settingEditContainer}>
              <Text style={styles.settingsTitle}>Name</Text>
            </View>
            <Text style={styles.settingsSubTitle}>John Smith</Text>
          </View>
          <View
            style={[styles.dashLine, {marginVertical: verticalScale(20)}]}
          />
          {/* email id */}
          <View style={styles.settingsContainer}>
            <View style={styles.settingEditContainer}>
              <Text style={styles.settingsTitle}>Email</Text>
              <TouchableOpacity
                onPress={() => {
                  setEmailModal(!emailModal);
                }}>
                <Text style={styles.edit}>Edit</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.settingsSubTitle}>{email}</Text>
          </View>
          <View
            style={[styles.dashLine, {marginVertical: verticalScale(20)}]}
          />
          {/* date of birth */}
          <View style={styles.settingsContainer}>
            <View style={styles.settingEditContainer}>
              <Text style={styles.settingsTitle}>Date of birth</Text>
            </View>
            <Text style={styles.settingsSubTitle}>11/11/1987</Text>
          </View>
          <View
            style={[styles.dashLine, {marginVertical: verticalScale(20)}]}
          />
          {/* ssn */}
          <View style={styles.settingsContainer}>
            <View style={styles.settingEditContainer}>
              <Text style={styles.settingsTitle}>SSN</Text>
            </View>
            <Text style={styles.settingsSubTitle}>1234</Text>
          </View>
          <View
            style={[styles.dashLine, {marginVertical: verticalScale(20)}]}
          />
          {/* address */}
          <View style={styles.settingsContainer}>
            <View style={styles.settingEditContainer}>
              <Text style={styles.settingsTitle}>Address</Text>
              <TouchableOpacity
                onPress={() => {
                  setAddressModal(!addressModal);
                }}>
                <Text style={styles.edit}>Edit</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.settingsSubTitle}>
              {street},{unitNumber} {city},{zip}
            </Text>
          </View>
          <View
            style={[styles.dashLine, {marginVertical: verticalScale(20)}]}
          />
          {/* password */}
          <View style={styles.settingsContainer}>
            <View style={styles.settingEditContainer}>
              <Text style={styles.settingsTitle}>Password</Text>
              <TouchableOpacity
                onPress={() => {
                  setPasswordModal(!passwordModal);
                }}>
                <Text style={styles.edit}>Edit</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={[styles.dashLine, {marginVertical: verticalScale(20)}]}
          />
          {/* logout */}
          <View>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('login');
              }}>
              <Text style={styles.settinsButton}>Logout</Text>
            </TouchableOpacity>
            <View
              style={[styles.dashLine, {marginVertical: verticalScale(20)}]}
            />
          </View>
          {/* delete */}
          <View>
            <TouchableOpacity
              onPress={() => {
                setDeleteModal(!deleteModal);
              }}>
              <Text
                style={[
                  styles.settinsButton,
                  {marginBottom: verticalScale(30)},
                ]}>
                Delete account
              </Text>
            </TouchableOpacity>
          </View>
          {/* ------------- */}
        </ScrollView>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        isVisible={modalVisible}
        style={{margin: 0, backgroundColor: 'rgba(0, 0, 0, 0.4)'}}
        hasBackdrop={true}
        backdropOpacity={0.1}
        backdropColor="transparent"
        onRequestClose={() => {
          console.log('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View
          style={{
            marginTop: verticalScale(600),
            backgroundColor: colors.white,
            flex: 1,
            borderRadius: 30,
            marginHorizontal: scale(20),
            marginBottom: verticalScale(15),
          }}>
          <TouchableOpacity
            onPress={() => {
              takePhotoFromCamera();
              setModalVisible(!modalVisible);
            }}>
            <Text style={styles.modalTakePhoto}>Take a photo</Text>
          </TouchableOpacity>
          <View style={{borderWidth: 0.18, borderColor: colors.gray}} />
          <TouchableOpacity
            onPress={() => {
              choosePhotoFromLibrary();
              setModalVisible(!modalVisible);
            }}>
            <Text style={styles.modalChoosePhoto}>Choose from gallery</Text>
          </TouchableOpacity>
          <View style={{borderWidth: 2, borderColor: colors.gray}} />
          <TouchableOpacity
            onPress={() => {
              setModalVisible(!modalVisible);
            }}>
            <Text style={styles.modalCanclePhoto}>Cancle</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      {/* email modal */}
      <Modal
        animationType="slide"
        transparent={true}
        isVisible={emailModal}
        style={{margin: 0, backgroundColor: 'rgba(0, 0, 0, 0.4)'}}
        hasBackdrop={true}
        backdropOpacity={0.1}
        backdropColor="transparent"
        onRequestClose={() => {
          console.log('Modal has been closed.');
          setEmailModal(!emailModal);
        }}>
        <View
          style={{
            marginTop: verticalScale(80),
            backgroundColor: colors.white,
            flex: 1,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}>
          <EmailModal setEmailModal={setEmailModal} emailModal={emailModal} email={email} setEmail={setEmail} />
        </View>
      </Modal>
      {/* address */}
      <Modal
        animationType="slide"
        transparent={true}
        isVisible={addressModal}
        style={{margin: 0, backgroundColor: 'rgba(0, 0, 0, 0.4)'}}
        hasBackdrop={true}
        backdropOpacity={0.1}
        backdropColor="transparent"
        onRequestClose={() => {
          console.log('Modal has been closed.');
          setAddressModal(!addressModal);
        }}>
        <View
          style={{
            marginTop: verticalScale(80),
            backgroundColor: colors.white,
            flex: 1,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}>
          <AddressModal
            setAddressModal={setAddressModal}
            addressModal={addressModal}
            street={street}
            setStreet={setStreet}
            unitNumber={unitNumber}
            setUnitNumber={setUnitNumber}
            city={city}
            setCity={setCity}
            zip={zip}
            setZip={setZip}
          />
        </View>
      </Modal>
      {/* password */}
      <Modal
        animationType="slide"
        transparent={true}
        isVisible={passwordModal}
        style={{margin: 0, backgroundColor: 'rgba(0, 0, 0, 0.4)'}}
        hasBackdrop={true}
        backdropOpacity={0.1}
        backdropColor="transparent"
        onRequestClose={() => {
          console.log('Modal has been closed.');
          setPasswordModal(!passwordModal);
        }}>
        <View
          style={{
            marginTop: verticalScale(80),
            backgroundColor: colors.white,
            flex: 1,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}>
          <PasswordModal
            passwordModal={passwordModal}
            setPasswordModal={setPasswordModal}
          />
        </View>
      </Modal>
      {/* delete account */}
      <Modal
        animationType="slide"
        transparent={true}
        isVisible={deleteModal}
        style={{margin: 0, backgroundColor: 'rgba(0, 0, 0, 0.4)'}}
        hasBackdrop={true}
        backdropOpacity={0.1}
        backdropColor="transparent"
        onRequestClose={() => {
          console.log('Modal has been closed.');
          setDeleteModal(!deleteModal);
        }}>
        <View
          style={{
            marginTop: verticalScale(280),
            backgroundColor: colors.white,
            flex: 1,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}>
          <DeleteModal
            setDeleteModal={setDeleteModal}
            deleteModal={deleteModal}
          />
        </View>
      </Modal>
      {/* ---------- */}
    </View>
  );
};

export default SettingScreen;
