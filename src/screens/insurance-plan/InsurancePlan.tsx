import {Image, Text, View, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import scale, {verticalScale} from '../../globals/scale';
import {images} from '../../assets/images/map';
import {colors} from '../../globals/colors';
import Modal from 'react-native-modal';
import PersonalInfo from '../personal-info/PersonalInfo';
import InsuranceCard from '../InsuranceCard/InsuranceCard';
import {styles} from './InsurancePlan.styles';
import GovCard from '../gov-card/GovCard';

const InsurancePlan = (props: any) => {
  const [profileModalVisible, setProfileModalVisible] = useState(false);
  const [insuranceCard, setInsuranceCard] = useState(false);
  const [govId, setGovId] = useState(false);
  return (
    <View style={styles.container}>
      <View style={{backgroundColor: colors.appThemeColor, flex: 0.2}}>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: scale(23),
            marginTop: verticalScale(80),
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
          <Text style={styles.heading}>Insurance Plan</Text>
        </View>
      </View>

      <View style={{flex: 0.8}}>
        <View style={styles.card}>
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
            <TouchableOpacity onPress={() => {setProfileModalVisible(!profileModalVisible);}}>
              <Text style={styles.view}>View</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.card}>
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
            <TouchableOpacity onPress={() => {setInsuranceCard(!insuranceCard)}}>
              <Text style={styles.view}>View</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.card}>
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
            <TouchableOpacity onPress={() => {setGovId(!govId)}}>
              <Text style={styles.view}>View</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* button */}
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            marginBottom: verticalScale(25),
          }}>
          <TouchableOpacity>
            <Text
              style={[
                styles.btnText,
                {color: colors.appThemeColor, marginTop: verticalScale(24)},
              ]}>
              I want to upload new insurance
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* personal info */}
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
            profileModalVisible={profileModalVisible}
            setProfileModalVisible={setProfileModalVisible}
          />
        </View>
      </Modal>

      {/* insurance card */}
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
            insuranceCard={insuranceCard}
            setInsuranceCard={setInsuranceCard}
          />
        </View>
      </Modal>

      {/* gov card */}
      <Modal
        animationType="slide"
        transparent={true}
        isVisible={govId}
        style={{margin: 0}}
        hasBackdrop={true}
        backdropOpacity={0.2}
        // backdropColor="transparent"
        onRequestClose={() => {
          console.log('Modal has been closed.');
          setGovId(!govId);
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
          <GovCard
            govId={govId}
            setGovId={setGovId}
          />
        </View>
      </Modal>

    </View>
  );
};

export default InsurancePlan;
