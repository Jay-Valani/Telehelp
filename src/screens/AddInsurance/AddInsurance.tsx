import {Image, Text, View, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {styles} from './AddInsurance.styles';
import scale, {verticalScale} from '../../globals/scale';
import {images} from '../../assets/images/map';
import {colors} from '../../globals/colors';
import Modal from 'react-native-modal';
import PersonalInfo from '../personal-info/PersonalInfo';
import InsuranceCard from '../InsuranceCard/InsuranceCard';

const AddInsurance = (props: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [profileModalVisible, setProfileModalVisible] = useState(false);
  const [insuranceCard, setInsuranceCard] = useState(false);
  const [isPersonalInfoDone, setIsPersonalInfoDone] = useState(false);
  const [isInsuranceCardDone, setIsInsuranceCardDone] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setModalVisible(!modalVisible);
    }, 1000);
  }, []);

  const onConfirm = () => {
    setIsPersonalInfoDone(!isPersonalInfoDone);
  };
  const onInsuranceConfirm = () => {
    setIsInsuranceCardDone(!isInsuranceCardDone);
  };
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
      <Text style={styles.heading}>Add insurance details</Text>

      <TouchableOpacity
        onPress={() => {
          setProfileModalVisible(!profileModalVisible);
        }}>
        <View
          style={[
            styles.card,
            {
              marginTop: verticalScale(40),
              borderColor:
                isPersonalInfoDone == false
                  ? colors.gray
                  : colors.appThemeColor,
              borderWidth: isPersonalInfoDone == false ? 0.2 : 0.8,
            },
          ]}>
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
            {isPersonalInfoDone == false ? (
              <Image
                source={images.plus}
                resizeMode="contain"
                style={{alignSelf: 'center', marginVertical: verticalScale(10)}}
              />
            ) : (
              <Image
                source={images.checked}
                resizeMode="contain"
                style={{alignSelf: 'center', marginVertical: verticalScale(10)}}
              />
            )}
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setInsuranceCard(!insuranceCard);
        }}>
        <View
          style={[
            styles.card,
            {
              marginTop: verticalScale(12),
              borderColor:
                isInsuranceCardDone == false
                  ? colors.gray
                  : colors.appThemeColor,
              borderWidth: isInsuranceCardDone == false ? 0.2 : 0.8,
            },
          ]}>
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
            {isInsuranceCardDone == false ? (
              <Image
                source={images.plus}
                resizeMode="contain"
                style={{alignSelf: 'center', marginVertical: verticalScale(10)}}
              />
            ) : (
              <Image
                source={images.checked}
                resizeMode="contain"
                style={{alignSelf: 'center', marginVertical: verticalScale(10)}}
              />
            )}
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {props.navigation.navigate("govCard")}}>
        <View
          style={[
            styles.card,
            {
              marginTop: verticalScale(12),
              borderWidth: 0.2,
              borderColor: colors.gray,
            },
          ]}>
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
            <TouchableOpacity>
              <Image
                source={images.plus}
                resizeMode="contain"
                style={{alignSelf: 'center', marginVertical: verticalScale(10)}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>

      {/* button */}
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          marginBottom: verticalScale(30),
        }}>
        <TouchableOpacity>
          <View
            style={[
              styles.btnContainer,
              {
                borderColor:
                  isPersonalInfoDone == false && isInsuranceCardDone == false
                    ? colors.disableButtonColor
                    : colors.appThemeColor,
                backgroundColor:
                  isPersonalInfoDone == false && isInsuranceCardDone == false
                    ? colors.disableButtonColor
                    : colors.appThemeColor,
              },
            ]}>
            <Text style={styles.btnText}>Save insurance details</Text>
          </View>
        </TouchableOpacity>
        {isPersonalInfoDone == false && isInsuranceCardDone == false ? (
          <TouchableOpacity>
            <Text
              style={[
                styles.btnText,
                {color: colors.appThemeColor, marginTop: verticalScale(24)},
              ]}>
              I'll upload my insurance later
            </Text>
          </TouchableOpacity>
        ) : null}
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        isVisible={modalVisible}
        style={{margin: 0}}
        hasBackdrop={true}
        backdropOpacity={0.2}
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
            <TouchableOpacity
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <View
                style={[
                  styles.btnContainer,
                  {
                    borderColor: colors.appThemeColor, 
                    backgroundColor: colors.appThemeColor,
                  },
                ]}>
                <Text style={styles.btnText}>Confirm</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setModalVisible(!modalVisible);
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
        backdropOpacity={0.2}
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
            borderTopWidth: 0.2,
            overflow: 'hidden',
          }}>
          <PersonalInfo
            isPersonalInfoDone={isPersonalInfoDone}
            profileModalVisible={profileModalVisible}
            setProfileModalVisible={setProfileModalVisible}
            onConfirm={onConfirm}
          />
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        isVisible={insuranceCard}
        style={{margin: 0}}
        hasBackdrop={true}
        backdropOpacity={0.2}
        // backdropColor="transparent"
        onRequestClose={() => {
          console.log('Modal has been closed.');
          setInsuranceCard(!insuranceCard);
        }}>
        <View
          style={{
            marginTop: verticalScale(50),
            backgroundColor: 'transparent',
            flex: 1,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            overflow: 'hidden',
          }}>
          <InsuranceCard
            isInsuranceCardDone={isInsuranceCardDone}
            insuranceCard={insuranceCard}
            setInsuranceCard={setInsuranceCard}
            onInsuranceConfirm={onInsuranceConfirm}
          />
        </View>
      </Modal>
    </View>
  );
};

export default AddInsurance;
