import {Image, TouchableOpacity, Text, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './InsuranceCard.styles';
import scale, {verticalScale} from '../../globals/scale';
import {images} from '../../assets/images/map';
import {colors} from '../../globals/colors';
import ImagePicker from 'react-native-image-crop-picker';
import Modal from 'react-native-modal';

const InsuranceCard = (props: any) => {
  const [image, setImage] = useState('');
  const [backImage, setBackImage] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const {
    isInsuranceCardDone,
    insuranceCard,
    setInsuranceCard,
    onInsuranceConfirm,
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
      setBackImage({
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
      setBackImage({
        uri: image.path,
        width: image.width,
        height: image.height,
        mime: image.mime,
      });
    });
  };

  var strip = [];
  for (let index = 0; index < 20; index++) {
    strip.push(
      <Image
        source={require('./assets/images/strip.png')}
        resizeMode="contain"
        style={[styles.rect, {width: 3, marginTop: verticalScale(13)}]}
      />,
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Insurance card</Text>
        <TouchableOpacity
          onPress={() => {
            setInsuranceCard(!insuranceCard);
          }}>
          <Image
            source={images.cancle}
            resizeMode="contain"
            style={styles.cancle}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.subHeading}>
        Here we can write something about uploading pictures or about data
        collection.
      </Text>
      <Text style={styles.photo}>Front photo</Text>
      <View style={styles.card}>
        {image == '' ? (
          <Image
            source={images.card_front}
            style={{
              alignSelf: 'center',
              resizeMode: 'contain',
              marginTop: verticalScale(20),
              height: 104,
              width: 168,
            }}
          />
        ) : (
          <Image
            source={{uri: image.uri}}
            style={{
              alignSelf: 'center',
              marginTop: verticalScale(20),
              height: 104,
              width: 168,
            }}
          />
        )}
        {image == '' ? (
          <TouchableOpacity
            onPress={() => {
              setModalVisible(!modalVisible);
            }}>
            <Text style={styles.uploadPhoto}>+ Upload photo</Text>
          </TouchableOpacity>
        ) : (
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              marginTop: verticalScale(20),
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

      <Text style={styles.photo}>Back photo</Text>
      <View style={styles.card}>
        {backImage == '' ? (
          <Image
            source={images.card_back}
            style={{
              alignSelf: 'center',
              resizeMode: 'contain',
              marginTop: verticalScale(20),
              height: 104,
              width: 168,
            }}
          />
        ) : (
          <Image
            source={{uri: backImage.uri}}
            style={{
              alignSelf: 'center',
              marginTop: verticalScale(20),
              height: 104,
              width: 168,
            }}
          />
        )}
        {backImage == '' ? (
          <TouchableOpacity
            onPress={() => {
              setModalVisible(!modalVisible);
            }}>
            <Text style={styles.uploadPhoto}>+ Upload photo</Text>
          </TouchableOpacity>
        ) : (
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              marginTop: verticalScale(20),
            }}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.change}>Change</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setBackImage('');
              }}>
              <Text style={styles.remove}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      {/* button */}
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          marginBottom: verticalScale(30),
        }}>
        <View style={{borderWidth: 0.5, borderColor: colors.gray}} />
        <TouchableOpacity
          onPress={() => {
            setInsuranceCard(!insuranceCard);
            onInsuranceConfirm();
          }}>
          <View
            style={[
              styles.btnContainer,
              {
                borderColor:
                  image == '' && backImage == ''
                    ? colors.disableButtonColor
                    : colors.appThemeColor,
                backgroundColor:
                  image == '' && backImage == ''
                    ? colors.disableButtonColor
                    : colors.appThemeColor,
              },
            ]}>
            <Text style={[styles.btnText, {marginVertical: verticalScale(20)}]}>
              Save
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

export default InsuranceCard;
