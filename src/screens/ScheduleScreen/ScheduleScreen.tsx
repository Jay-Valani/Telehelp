import {TouchableOpacity, Image, Text, View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {styles} from './ScheduleScreen.styles';
import scale, {verticalScale} from '../../globals/scale';
import {images} from '../../assets/images/map';
import {colors} from '../../globals/colors';
import WeekComponent from './week-component/WeekComponent';
import MonthComponent from './month-component/MonthComponent';

const ScheduleScreen = (props: any) => {
  const [switchDate, setSwitchDate] = useState(true);
  const {onWeekSubmit, onMonthSubmit} = props;
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
    </View>
  );
};

export default ScheduleScreen;
