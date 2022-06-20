import {Image, TouchableOpacity, Text, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './InsuranceCard.styles';
import scale, {verticalScale} from '../../globals/scale';
import {images} from '../../assets/images/map';
import {colors} from '../../globals/colors';
import ImagePicker from 'react-native-image-crop-picker';

const InsuranceCard = () => {
  const [image, setImage] = useState(images.card_front);
  const [backImage, setBackImage] = useState(images.card_back);
  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then(image => {
      console.log(image);
      setImage(image.path);
      setBackImage(image.path)
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
      setImage(image.path);
      setBackImage(image.path)
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
        <TouchableOpacity>
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
        <Image
          source={image}
          style={{alignSelf: 'center', marginTop: verticalScale(20)}}
        />

        <TouchableOpacity onPress={() => takePhotoFromCamera()}>
          <Text style={styles.uploadPhoto}>+ Upload photo</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.photo}>Back photo</Text>
      <View style={styles.card}>
        {/* <View style={styles.card2}>
          <View style={{marginLeft: scale(14), flexDirection: 'row'}}>
            {strip.map(function (img, i) {
              return img;
            })}
          </View>
          <View style={styles.rectangle} />
        </View> */}
         <Image
          source={backImage}
          style={{alignSelf: 'center', marginTop: verticalScale(20)}}
        />
        <TouchableOpacity onPress={() => choosePhotoFromLibrary()}>
          <Text style={styles.uploadPhoto}>+ Upload photo</Text>
        </TouchableOpacity>
      </View>

      {/* button */}
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          marginBottom: verticalScale(30),
        }}>
        <View style={{borderWidth: 0.5, borderColor: colors.gray}} />
        <TouchableOpacity>
          <View style={styles.btnContainer}>
            <Text style={styles.btnText}>Save</Text>
          </View>
        </TouchableOpacity>
      </View>
      
    </View>
  );
};

export default InsuranceCard;
