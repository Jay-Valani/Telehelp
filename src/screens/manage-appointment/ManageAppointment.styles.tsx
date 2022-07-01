import {StyleSheet} from 'react-native';
import {colors} from '../../globals/colors';
import scale, {verticalScale} from '../../globals/scale';
import * as global from '../../globals/global';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  cancle: {
    tintColor: colors.lightBlack,
    height: 16,
    width: 16,
    marginTop: verticalScale(10),
    marginLeft: scale(24),
  },
  manageAppointment: {
    fontSize: global.font_24,
    color: colors.lightBlack,
  },
  heading: {
    marginTop: verticalScale(36),
    marginLeft: scale(20),
    fontSize: global.font_32,
    color: colors.black,
  },
  card: {
    marginTop: verticalScale(40),
    marginHorizontal: 20,
    height: 190,
    borderRadius: 8,
    elevation: 4,
    shadowOffset: {height: 4, width: 0},
    shadowRadius: 2,
    shadowOpacity: 0.2,
    shadowColor: colors.lightGray,
  },
  name: {
    fontSize: global.font_18,
    color: colors.lightBlack,
  },
  profession: {
    fontSize: global.font_12,
    color: colors.lightBlack,
    marginTop: verticalScale(8),
  },
  faceImage: {
    height: 48,
    width: 48,
  },
  calenderImage: {
    height: 16,
    width: 16,
  },
  date: {
    fontSize: global.font_12,
    color: colors.lightBlack,
    marginLeft: scale(9),
  },
  timeImage: {
    height: 16,
    width: 16,
  },
  time: {
    fontSize: global.font_13,
    color: colors.lightBlack,
    marginLeft: scale(9),
  },
  modifiedAppointment: {
    fontSize: global.font_16,
    color: colors.lightBlack,
    marginLeft: scale(16),
    marginVertical: verticalScale(16),
  },
  cancleAppointment: {
    fontSize: global.font_16,
    color: colors.lightBlack,
    marginLeft: scale(16),
    marginVertical: verticalScale(16),
  },
  checked: {
    height: 24,
    width: 24,
    alignSelf: 'center',
    marginLeft: scale(16),
  },
  card2: {
    marginTop: verticalScale(40),
    marginHorizontal: scale(20),
  },
  appointmentContainer: {
    flexDirection: 'row',
    borderWidth: 0.2,
    height: 56,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderColor: colors.gray,
  },
  circle: {
    borderWidth: 0.5,
    marginLeft: scale(16),
    alignSelf: 'center',
    height: 24,
    width: 24,
    borderRadius: 30,
    borderColor: colors.gray,
  },
  appointmentContainerCancle: {
    flexDirection: 'row',
    borderWidth: 0.2,
    height: 56,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: colors.gray,
  },
  btnContainer: {
    borderWidth: 0.1,
    borderColor: colors.appThemeColor,
    backgroundColor: colors.appThemeColor,
    height: 56,
    marginHorizontal: scale(20),
    borderRadius: 30,
  },
  btnText: {
    fontSize: global.font_16,
    color: colors.white,
    textAlign: 'center',
    marginVertical: verticalScale(16),
  },
});
