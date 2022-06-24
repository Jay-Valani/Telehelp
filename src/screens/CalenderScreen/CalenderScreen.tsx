import {Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import CalendarPicker from '../../component/react-native-calendar-picker';
import moment from 'moment';
import {styles} from './CalenderScreen.styles';
import {colors} from '../../globals/colors';
import {images} from '../../assets/images/map';
import scale, {verticalScale} from '../../globals/scale';
import Modal from 'react-native-modal';

const Calender = (props: any) => {
  useEffect(() => {
    // setTimeout(() => {
    setModalVisible(!modalVisible);
    // }, 3000);
  }, []);

  const Data = [
    {id: 1, time: '10:00 am'},
    {id: 2, time: '12:00 pm'},
    {id: 3, time: '2:30 pm'},
    {id: 4, time: '4:30 pm'},
    {id: 5, time: '6:00 pm'},
    {id: 6, time: '9:00 pm'},
    {id: 7, time: '12:00 am'},
  ];
  const [modalVisible, setModalVisible] = useState(false);
  const [onColorChange, setOnColorChange] = useState();
  const [onChangeTime, setOnChangeTime] = useState('');
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const onDateChange = (date, type) => {
    if (type === 'END_DATE') {
      setSelectedEndDate(date);
    } else {
      setSelectedEndDate(null);
      setSelectedStartDate(date);
    }
  };
  const disabledDates = [
    '2022-06-21',
    '2022-06-19',
    '2022-06-05',
    '2022-06-12',
    '2022-06-15',
    '2022-06-23',
    '2022-06-27',
    '2022-06-02',
    '2022-06-17',
  ];

  function disableDate(current) {
    return (
      // moment(current).day() === 0 ||
      disabledDates.find(date => date === moment(current).format('YYYY-MM-DD'))
    );
  }
  const _renderTimeItem = ({item, index}) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            setOnColorChange(index);
            setOnChangeTime(item.time);
          }}>
          <View
            style={{
              borderColor:
                onColorChange == index
                  ? colors.appThemeColor
                  : colors.lightGray,
              borderWidth: 1,
              padding: 10,
              marginLeft: scale(8),
              backgroundColor: colors.white,
              borderRadius: 10,
            }}>
            <Text
              style={[
                styles.time,
                {
                  color:
                    onColorChange == index
                      ? colors.appThemeColor
                      : colors.lightBlack,
                },
              ]}>
              {item.time}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btnBackArrowStyle}
        onPress={() => props.navigation.goBack()}>
        <Image source={images.back_arrow} style={styles.backImageStyle} />
      </TouchableOpacity>
      <Text style={styles.title}>Choose your preferred date and time</Text>
      <View style={{marginTop: 40}}>
        <CalendarPicker
          weekdays={['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']}
          dayLabelsWrapper={{
            borderTopColor: '#ffffff',
            borderBottomColor: '#ffffff',
          }}
          nextTitle=">"
          nextTitleStyle={[styles.prev_next, {marginRight: scale(0)}]}
          previousTitle="<"
          previousTitleStyle={[styles.prev_next, {marginLeft: scale(0)}]}
          monthTitleStyle={styles.month_year}
          yearTitleStyle={styles.month_year}
          monthYearHeaderWrapperStyle={{marginRight: scale(50)}}
          startFromMonday={true}
          allowRangeSelection={true}
          disabledDates={disableDate}
          disabledDatesTextStyle={styles.diabledays}
          selectedDisabledDatesTextStyle={{color: 'yellow'}}
          width={350}
          height={350}
          maxRangeDuration={10}
          todayBackgroundColor={colors.appThemeColor}
          selectedDayColor="#ffffff"
          selectedDayTextColor={colors.white}
          onDateChange={onDateChange}
          textStyle={styles.days}
        />
      </View>
      <View style={{marginTop: 20, marginLeft: 20}}>
        <FlatList
          data={Data}
          renderItem={item => _renderTimeItem(item)}
          horizontal
          showsHorizontalScrollIndicator={false}
          value={onChangeTime}
        />
      </View>
      {/* <Text style={styles.timeSlot}>Time slot selected is: {onChangeTime}</Text> */}
      <View style={{flex: 1, justifyContent: 'flex-end', marginBottom: 50}}>
        <TouchableOpacity onPress={() => {props.navigation.navigate("confirm_selection")}}>
          <View style={styles.btnContainer}>
            <Text style={styles.but}>Continue</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.btnContainer1}>
            <Text style={[styles.but, {color: colors.appThemeColor}]}>
              Cancel
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
            marginTop: verticalScale(400),
            backgroundColor: colors.white,
            flex: 1,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}>
          <Text style={styles.modalHeading}>
            Share your calendar for easy scheduling.
          </Text>
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
            <Text style={styles.conflict}>Identify conflicts</Text>
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
              Add sessions to your device {'\n'}calendar automatically
            </Text>
          </View>
          <View style={{flex: 1, justifyContent: 'flex-end', marginBottom: 15}}>
            <TouchableOpacity onPress={() => {}}>
              <View style={styles.btnContainer}>
                <Text style={styles.but}>Sounds great!</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {setModalVisible(!modalVisible)}}>
              <View style={styles.btnContainer1}>
                <Text style={[styles.but, {color: colors.appThemeColor}]}>
                  No thanks
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Calender;
