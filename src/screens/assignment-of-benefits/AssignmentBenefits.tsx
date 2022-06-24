import {TouchableOpacity, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import {styles} from './AssignmentBenefits.styles';
import {images} from '../../assets/images/map';
import {colors} from '../../globals/colors';
import scale, {verticalScale} from '../../globals/scale';
import Modal from 'react-native-modal';
import ImagePicker from 'react-native-image-crop-picker';

const AssignmentBenefits = (props: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState(false);
  const {
    isAssignmentBenefitsDone,
    isAssignmentBenefits,
    setIsAssignmentBenefits,
    onConfirm,
  } = props;

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
      <View style={styles.header}>
        <Text style={styles.heading}>Assignment of Benefits</Text>
        <TouchableOpacity
          onPress={() => {
            setIsAssignmentBenefits(!isAssignmentBenefits);
          }}>
          <Image
            source={images.cancle}
            resizeMode="contain"
            style={styles.cancle}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.subHeading}>
        Please be sure your photo is clear and captures the entire paper.
      </Text>
      <View style={styles.card}>
        {image == '' ? (
          <Image
            source={images.documents}
            style={{
              alignSelf: 'center',
              resizeMode: 'contain',
              marginTop: verticalScale(40),
              height: 216,
              width: 168,
            }}
          />
        ) : (
          <Image
            source={{uri: image.uri}}
            style={{
              alignSelf: 'center',
              marginTop: verticalScale(20),
              height: 216,
              width: 168,
            }}
          />
        )}
        {image == '' ? (
          <TouchableOpacity
            onPress={() => {
              setModalVisible(!modalVisible);
            }}>
            <Text style={styles.upload}>+ Upload photo</Text>
          </TouchableOpacity>
        ) : (
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              marginTop: verticalScale(35),
            }}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.change}>Change</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setImage('');
              }}>
              <Text style={styles.remove}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          marginBottom: verticalScale(15),
          marginTop: verticalScale(20),
        }}>
        <View
          style={{
            borderWidth: 0.5,
            borderColor: colors.lightGray,
            marginTop: verticalScale(37),
          }}
        />
        <TouchableOpacity
          onPress={() => {
            image == '' ? null : setIsAssignmentBenefits(!isAssignmentBenefits);
            onConfirm();
          }}>
          <View
            style={[
              styles.btnContainer,
              {
                borderColor:
                  image == ''
                    ? colors.disableButtonColor
                    : colors.appThemeColor,
                backgroundColor:
                  image == ''
                    ? colors.disableButtonColor
                    : colors.appThemeColor,
                marginBottom: verticalScale(20),
              },
            ]}>
            <Text style={[styles.btnText, {marginVertical: verticalScale(16)}]}>
              Confirm
            </Text>
          </View>
        </TouchableOpacity>
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
    </View>
  );
};

export default AssignmentBenefits;
