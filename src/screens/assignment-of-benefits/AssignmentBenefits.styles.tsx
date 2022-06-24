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
    marginTop: verticalScale(28),
    marginHorizontal: scale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heading: {
    fontSize: global.font_24,
    color: colors.lightBlack,
    marginTop: verticalScale(8),
  },
  subHeading: {
    fontSize: global.font_14,
    color: colors.black,
    marginTop: verticalScale(20),
    fontWeight: '400',
    marginHorizontal: scale(20),
  },
  cancle: {
    height: 16,
    width: 16,
    tintColor: colors.lightBlack,
    marginTop: verticalScale(10),
  },
  btnContainer: {
    borderWidth: 0.1,
    height: 56,
    marginHorizontal: scale(20),
    borderRadius: 30,
    marginTop: verticalScale(20),
  },
  btnText: {
    fontSize: global.font_16,
    color: colors.white,
    textAlign: 'center',
    // marginVertical: verticalScale(5),
  },
  card: {
    borderWidth: 1,
    borderColor: colors.lightGray,
    backgroundColor: colors.lightGray,
    height: 361,
    marginTop: verticalScale(52),
    marginHorizontal: scale(20),
    borderRadius: 10,
  },
  upload: {
    fontSize: global.font_16,
    color: colors.appThemeColor,
    textAlign: 'center',
    marginTop: verticalScale(35),
    fontWeight: '500',
  },
  change: {
    fontSize: global.font_16,
    color: colors.appThemeColor,
    fontWeight: '500',
    marginRight: scale(24),
  },
  remove: {
    fontSize: global.font_16,
    color: colors.red,
    fontWeight: '500',
    marginLeft: scale(24),
  },
  modalTakePhoto: {
    fontSize: global.font_20,
    color: colors.appThemeColor,
    textAlign: 'center',
    marginVertical: verticalScale(20),
  },
  modalChoosePhoto: {
    fontSize: global.font_20,
    color: colors.appThemeColor,
    textAlign: 'center',
    marginVertical: verticalScale(20),
  },
  modalCanclePhoto: {
    fontSize: global.font_20,
    color: colors.appThemeColor,
    textAlign: 'center',
    fontWeight: '600',
    marginVertical: verticalScale(15),
  },
});
