import {StyleSheet} from 'react-native';
import {colors} from '../../globals/colors';
import * as global from '../../globals/global';
import scale, {verticalScale} from '../../globals/scale';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  backImage: {
    height: 24,
    width: 24,
  },
  backArrow: {
    height: 25,
    width: 25,
    alignItems: 'center',
    marginTop: verticalScale(40),
    marginLeft: scale(20),
  },
  title: {
    fontSize: global.font_32,
    marginTop: verticalScale(36),
    marginLeft: scale(20),
    color: colors.lightBlack,
  },
  subTitle: {
    marginTop: verticalScale(16),
    marginLeft: scale(20),
    color: colors.gray,
    fontSize: global.font_15,
    marginRight: scale(20),
  },
  otpInput: {
    borderWidth: 1,
    borderRadius: 5,
    borderBottomWidth: 1,
    paddingBottom: 5,
    marginLeft: 0,
    marginRight: 0,
    marginTop: verticalScale(56),
    width: (global.ScreenWidth - 90) / 6,
    height: (global.ScreenWidth - 90) / 6,
  },
  otpContainer: {
    marginHorizontal: scale(20),
  },
  button: {
    width: '100%',
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
});
