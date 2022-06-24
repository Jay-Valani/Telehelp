import {StyleSheet} from 'react-native';
import {colors} from '../../globals/colors';
import * as global from '../../globals/global';
import scale, {verticalScale} from '../../globals/scale';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  backImageStyle: {
    height: 24,
    width: 24,
    marginTop: verticalScale(55),
    marginLeft: scale(20),
  },
  title: {
    fontSize: global.font_32,
    marginTop: verticalScale(36),
    marginLeft: scale(20),
    color: colors.black,
  },
  time: {
    fontSize: global.font_16,
  },
  but: {
    fontSize: global.font_16,
    color: colors.white,
    textAlign: 'center',
  },
  btnContainer: {
    borderColor: colors.appThemeColor,
    borderWidth: 1,
    padding: 15,
    backgroundColor: colors.appThemeColor,
    borderRadius: 30,
    marginHorizontal: scale(20),
  },
  btnContainer1: {
    marginHorizontal: scale(20),
    marginTop: verticalScale(24),
  },
  days: {
    fontSize: global.font_16,
    color: colors.lightBlack,
  },
  month_year: {
    fontSize: global.font_16,
    color: colors.appThemeColor,
  },
  diabledays: {
    fontSize: global.font_16,
    color: colors.lightGray,
  },
  prev_next: {
    fontSize: global.font_32,
    color: '#333333',
  },
  modalHeading: {
    fontSize: global.font_32,
    color: colors.black,
    marginTop: verticalScale(40),
    marginHorizontal: scale(32),
  },
  conflict: {
    fontSize: global.font_16,
    color: colors.lightBlack,
    fontWeight: "500",
    marginLeft: scale(16),
  },
});
