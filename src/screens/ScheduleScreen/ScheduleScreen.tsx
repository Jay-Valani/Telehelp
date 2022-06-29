import {TouchableOpacity, Image, Text, View, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import {styles} from './ScheduleScreen.styles';
import scale, {verticalScale} from '../../globals/scale';
import {images} from '../../assets/images/map';
import {colors} from '../../globals/colors';
import WeekComponent from './week-component/WeekComponent';
import MonthComponent from './month-component/MonthComponent';
import Modal from 'react-native-modal';
import BottomTab from '../../component/bottom-tab/BottomTab';

const ScheduleScreen = (props: any) => {
  const [switchDate, setSwitchDate] = useState(true);
  const {onWeekSubmit, onMonthSubmit} = props;
  const [modalVisible, setModalVisible] = useState(false);
  const [moduleSchedule, setModuleSchedule] = useState(false);
  useEffect(() => {
    // setModalVisible(!modalVisible);
  }, []);

  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <Text style={styles.headerTxt}>Schedule</Text>
        <View style={styles.switchContainer}>
          <TouchableOpacity
            onPress={() => {
              setSwitchDate(!switchDate);
            }}>
            <View
              style={[
                styles.weekContainer,
                {
                  borderColor:
                    switchDate == false ? colors.lightBlueColor : colors.white,
                  backgroundColor:
                    switchDate == false ? colors.lightBlueColor : colors.white,
                },
              ]}>
              <Text
                style={[
                  styles.weekTxt,
                  {
                    color:
                      switchDate == false ? colors.white : colors.appThemeColor,
                  },
                ]}>
                This week
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setSwitchDate(!switchDate);
            }}>
            <View
              style={[
                styles.monthContainer,
                {
                  borderColor:
                    switchDate == false ? colors.white : colors.lightBlueColor,
                  backgroundColor:
                    switchDate == false ? colors.white : colors.lightBlueColor,
                },
              ]}>
              <Text
                style={[
                  styles.monthTxt,
                  {
                    color:
                      switchDate == false ? colors.appThemeColor : colors.white,
                  },
                ]}>
                This month
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {/* footer */}
      <View style={styles.footer}>
        <View style={styles.footerHeadingContainer}>
          {switchDate == true ? (
            <Text style={styles.week}>This week</Text>
          ) : (
            <Text style={styles.week}>This month</Text>
          )}
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.scheduleSession}>Schedule a session</Text>
          </TouchableOpacity>
        </View>
        {/* week & month */}
        {switchDate == true ? <WeekComponent /> : <MonthComponent />}
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            marginBottom: verticalScale(27),
            bottom: 0,
          }}>
          <Text style={styles.disclaimer}>
            Important disclaimer: {'\n'}
            <Text style={{color: colors.appThemeColor}}>
              Missed session
            </Text>{' '}
            policy will apply
          </Text>
        </View>
      </View>
      {/* modal */}
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
            marginTop: verticalScale(390),
            backgroundColor: colors.white,
            flex: 1,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}>
          <Text style={styles.modalHeading}>Missed session policy</Text>

          <View
            style={{
              flexDirection: 'row',
              marginTop: verticalScale(22),
              marginLeft: scale(32),
            }}>
            <Image
              source={images.tick}
              resizeMode="contain"
              style={{height: 8, width: 10, marginTop: verticalScale(10)}}
            />
            <Text style={styles.conflict}>
              A missed session is an appointment {'\n'} that was not attended
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginTop: verticalScale(16),
              marginLeft: scale(32),
            }}>
            <Image
              source={images.tick}
              resizeMode="contain"
              style={{height: 8, width: 10, marginTop: verticalScale(10)}}
            />
            <Text style={styles.conflict}>
              Sessions canceled 24 hours before {'\n'} the start time will incur
              no cost
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginTop: verticalScale(16),
              marginLeft: scale(32),
            }}>
            <Image
              source={images.tick}
              resizeMode="contain"
              style={{height: 8, width: 10, marginTop: verticalScale(10)}}
            />
            <Text style={styles.conflict}>
              First missed session will incur no cost
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginTop: verticalScale(16),
              marginLeft: scale(32),
            }}>
            <Image
              source={images.tick}
              resizeMode="contain"
              style={{height: 8, width: 10, marginTop: verticalScale(10)}}
            />
            <Text style={styles.conflict}>
              You will be billed $65 for each {'\n'}
              subsequent missed session
            </Text>
          </View>

          <View style={{flex: 1, justifyContent: 'flex-end', marginBottom: 20}}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(!modalVisible);
                setModuleSchedule(!moduleSchedule);
              }}>
              <View style={styles.btnContainer}>
                <Text style={styles.but}>Got it, thanks!</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {/* modal */}
      <Modal
        animationType="slide"
        transparent={true}
        isVisible={moduleSchedule}
        style={{margin: 0, backgroundColor: 'rgba(0, 0, 0, 0.4)'}}
        hasBackdrop={true}
        backdropOpacity={0.1}
        backdropColor="transparent"
        onRequestClose={() => {
          console.log('Modal has been closed.');
          setModuleSchedule(!moduleSchedule);
        }}>
        <View
          style={{
            marginTop: verticalScale(510),
            backgroundColor: colors.white,
            flex: 1,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}>
          <Text style={styles.modalHeading}>Missed session policy</Text>

          <View
            style={{
              flexDirection: 'row',
              marginTop: verticalScale(32),
              marginLeft: scale(32),
            }}>
            <Image
              source={images.tick}
              resizeMode="contain"
              style={{height: 8, width: 10, marginTop: verticalScale(10)}}
            />
            <Text style={styles.conflict}>Initial session</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginTop: verticalScale(16),
              marginLeft: scale(32),
            }}>
            <Image
              source={images.tick}
              resizeMode="contain"
              style={{height: 8, width: 10, marginTop: verticalScale(10)}}
            />
            <Text style={styles.conflict}>Repeats Weekly</Text>
          </View>

          <View style={{flex: 1, justifyContent: 'flex-end', marginBottom: 20}}>
            <TouchableOpacity
              onPress={() => {
                setModuleSchedule(!moduleSchedule);
              }}>
              <View style={styles.btnContainer}>
                <Text style={styles.but}>Get started</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <BottomTab />
    </View>
  );
}; 

export default ScheduleScreen;
