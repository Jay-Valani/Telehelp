import {TouchableOpacity, Image, Text, View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import scale, {verticalScale} from '../../../globals/scale';
import {images} from '../../../assets/images/map';
import {styles} from './weekComponent.styles';
import {colors} from '../../../globals/colors';
import Modal from 'react-native-modal';
import ManageAppointment from '../../manage-appointment/ManageAppointment';

const WeekComponent = (props: any) => {
  const {onWeekSubmit, setSwitchDate, switchDate} = props;
  const [modalVisible, setModalVisible] = useState(false);
  const onConfirm = () => {
    setModalVisible(!modalVisible)
  }
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
          <View style={[styles.card, {marginTop: verticalScale(20)}]}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: scale(20),
              }}>
              <View
                style={{
                  flexDirection: 'column',
                }}>
                <Text style={styles.name}>Francis Marjoram</Text>
                <Text style={styles.profession}>Therapist</Text>
              </View>
              <Image source={images.face} style={styles.face} />
            </View>
            <View style={styles.line} />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: scale(20),
              }}>
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}>
                <View style={styles.calenderContainer}>
                  <Image
                    source={images.schedule_icon}
                    resizeMode="contain"
                    style={styles.schedule}
                  />
                  <Text style={styles.date}>Wednesday April 7, 2022 </Text>
                </View>
                <View
                  style={[
                    styles.calenderContainer,
                    {marginTop: verticalScale(8)},
                  ]}>
                  <Image
                    source={images.icon_watch}
                    resizeMode="contain"
                    style={styles.watch}
                  />
                  <Text style={styles.time}>3:00 - 3:45 pm PT </Text>
                </View>
              </View>
              <Image
                source={images.iconThreeDots}
                resizeMode="contain"
                style={[styles.watch, {marginTop: verticalScale(20)}]}
              />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={[styles.card, {marginTop: verticalScale(20)}]}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: scale(20),
              }}>
              <View
                style={{
                  flexDirection: 'column',
                }}>
                <Text style={styles.name}>James Sacci</Text>
                <Text style={styles.profession}>Therapist</Text>
              </View>
              <Image source={images.face2} style={styles.face} />
            </View>
            <View style={styles.line} />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: scale(20),
              }}>
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}>
                <View style={styles.calenderContainer}>
                  <Image
                    source={images.schedule_icon}
                    resizeMode="contain"
                    style={styles.schedule}
                  />
                  <Text style={styles.date}>Every Wednesday </Text>
                </View>
                <View
                  style={[
                    styles.calenderContainer,
                    {marginTop: verticalScale(8)},
                  ]}>
                  <Image
                    source={images.icon_watch}
                    resizeMode="contain"
                    style={styles.watch}
                  />
                  <Text style={styles.time}>3:00 - 3:45 pm PT </Text>
                </View>
              </View>
              <View style={{flexDirection: 'column'}}>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    source={images.iconRepeat}
                    resizeMode="contain"
                    style={{alignSelf: 'center'}}
                  />
                  <Text style={[styles.repeat, {marginLeft: scale(5)}]}>
                    Repeats Weekly
                  </Text>
                </View>
                <Image
                  source={images.iconThreeDots}
                  resizeMode="contain"
                  style={[
                    styles.watch,
                    {marginTop: verticalScale(20), alignSelf: 'flex-end'},
                  ]}
                />
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <View
          style={{
            // justifyContent: 'flex-end',
            marginBottom: verticalScale(27),
            // bottom: 0,
            // backgroundColor: "red",
          }}>
          <Text style={styles.disclaimer}>
            Important disclaimer: {'\n'}
            <Text style={{color: colors.appThemeColor}}>
              Missed session
            </Text>{' '}
            policy will apply
          </Text>
        </View>
      </ScrollView>
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
            marginTop: verticalScale(100),
            backgroundColor: colors.white,
            flex: 1,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}>
            <ManageAppointment modalVisible={modalVisible} setModalVisible={setModalVisible} onConfirm={onConfirm} />
          </View>
      </Modal>
    </View>
  );
};

export default WeekComponent;
