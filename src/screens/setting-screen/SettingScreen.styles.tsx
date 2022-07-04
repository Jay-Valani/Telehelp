import {StyleSheet} from 'react-native';
import * as global from '../../globals/global';
import scale, {verticalScale} from '../../globals/scale';
import {images} from '../../assets/images/map';
import {colors} from '../../globals/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: colors.appThemeColor,
    flex: 0.2,
  },
  back_arrow: {
    tintColor: colors.white,
    marginTop: verticalScale(90),
    marginLeft: scale(27),
  },
  heading: {
    fontSize: global.font_32,
    color: colors.white,
    marginTop: verticalScale(80),
    marginLeft: scale(33),
  },
  footer: {
    flex: 0.8,
    backgroundColor: colors.white,
  },
  profilePhotoContainer: {
    marginTop: verticalScale(40),
    alignSelf: 'center',
  },
  profilePhoto: {
    height: 82,
    width: 82,
    borderRadius: 50,
  },
  editPhoto: {
    fontSize: global.font_16,
    color: colors.appThemeColor,
    marginTop: verticalScale(20),
    fontWeight: '600',
  },
  dashLine: {
    marginHorizontal: scale(24),
    borderWidth: 0.6,
    borderColor: colors.lightGray,
  },
  settingsContainer: {
    marginHorizontal: scale(24),
  },
  settingEditContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  settingsTitle: {
    fontSize: global.font_16,
    color: colors.black,
    fontWeight: '600',
  },
  settingsSubTitle: {
    fontSize: global.font_16,
    color: colors.gray,
    fontWeight: '400',
    marginTop: verticalScale(10),
  },
  edit: {
    fontSize: global.font_16,
    color: colors.appThemeColor,
    fontWeight: '600',
  },
  settinsButton: {
    fontSize: global.font_16,
    color: colors.red,
    fontWeight: '600',
    marginHorizontal: scale(24),
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
