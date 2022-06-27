import {StyleSheet} from 'react-native';
import { colors } from '../../../globals/colors';
import scale, { verticalScale } from '../../../globals/scale';

export const styles = StyleSheet.create({ 
switchContainer: {
    marginTop: verticalScale(20),
    flexDirection: 'row',
    alignSelf: 'center',
  },
  weekContainer: {
    borderWidth: 1,
    height: 40,
    borderRadius: 30,
    paddingHorizontal: scale(50),
    marginLeft: verticalScale(30),
  },
  monthContainer: {
    borderWidth: 1,
    height: 40,
    borderRadius: 30,
    paddingHorizontal: scale(50),
    left: verticalScale(-30),
  },
  weekTxt: {
    fontSize: global.font_16,
    textAlign: 'center',
    marginVertical: verticalScale(5),
  },
  monthTxt: {
    fontSize: global.font_16,
    textAlign: 'center',
    marginVertical: verticalScale(5),
  },
  footer: {
    flex: 0.7,
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
    marginTop: verticalScale(10),
  },
  card: {
    borderWidth: 0.1,
    marginHorizontal: scale(20),
    height: 180,
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
})