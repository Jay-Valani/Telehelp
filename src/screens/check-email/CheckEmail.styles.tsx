import { StyleSheet } from 'react-native';
import scale, { verticalScale } from '../../globals/scale';
import * as global from '../../globals/global';
import { colors } from '../../globals/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  backImage: {
    height: 24,
    width: 24,
  },
  backButton: {
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
    marginTop: verticalScale(24),
    marginLeft: scale(20),
    color: colors.black,
    fontSize: global.font_15,
    marginRight: scale(20),
    lineHeight: 20,
  },
  butContainer: {
    width: '100%',
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  btnTxt: {
    textAlign: 'center',
    marginBottom: 56,
    fontSize: global.font_16,
    lineHeight: 20,
    color: colors.appThemeColor,
    fontWeight: '500',
  },
});
