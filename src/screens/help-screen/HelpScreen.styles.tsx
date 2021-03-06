import {StyleSheet} from 'react-native';
import {colors} from '../../globals/colors';
import * as global from '../../globals/global';
import scale, {verticalScale} from '../../globals/scale';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    flex: 0.2,
    backgroundColor: colors.appThemeColor,
  },
  headerTxt: {
    fontSize: global.font_32,
    color: colors.white,
    marginTop: verticalScale(70),
    marginLeft: scale(24),
  },
  footer: {
    flex: 0.8,
    backgroundColor: colors.white,
  },
  footerHeadingContainer: {
    flexDirection: 'row',
    marginTop: verticalScale(28),
    marginHorizontal: scale(20),
    justifyContent: 'space-between',
  },
  week: {
    fontSize: global.font_24,
    color: colors.lightBlack,
  },
  scheduleSession: {
    fontSize: global.font_14,
    color: colors.appThemeColor,
    marginTop: verticalScale(15),
  },
  card: {
    borderWidth: 0.1,
    marginHorizontal: scale(20),
    height: 220,
    elevation: 3,
    shadowOffset: {height: 4, width: 0},
    shadowRadius: 2,
    shadowOpacity: 0.2,
    shadowColor: colors.gray,
    borderRadius: 10,
    borderColor: colors.white,
  },
  card1: {
    borderWidth: 0.1,
    marginHorizontal: scale(20),
    height: 190,
    elevation: 3,
    shadowOffset: {height: 4, width: 0},
    shadowRadius: 2,
    shadowOpacity: 0.2,
    shadowColor: colors.gray,
    borderRadius: 10,
    borderColor: colors.white,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: verticalScale(20),
  },
  face: {
    marginTop: verticalScale(20),
    height: 48,
    width: 48,
  },
  edit: {
    marginRight: scale(23),
    marginTop: verticalScale(10),
  },
  name: {
    fontSize: global.font_18,
    color: colors.lightBlack,
    marginTop: verticalScale(20),
  },
  profession: {
    fontSize: global.font_12,
    color: colors.lightBlack,
    marginTop: verticalScale(8),
  },
  line: {
    borderWidth: 0.2,
    marginVertical: verticalScale(20),
    marginHorizontal: scale(20),
    borderColor: colors.lightGray,
  },
  calenderContainer: {
    flexDirection: 'row',
  },
  schedule: {},
  date: {
    fontSize: global.font_13,
    color: colors.lightBlack,
    marginLeft: verticalScale(10),
  },
  watch: {},
  time: {
    fontSize: global.font_13,
    color: colors.lightBlack,
    marginLeft: verticalScale(10),
  },
  dots: {},
  repeat: {
    fontSize: global.font_12,
    color: colors.appThemeColor,
  },
  joinNow: {
    fontSize: global.font_12,
    color: colors.white,
    marginLeft: scale(10),
  },
  timeZone: {
    fontSize: global.font_13,
    color: colors.black,
    marginLeft: scale(10),
  }
});
