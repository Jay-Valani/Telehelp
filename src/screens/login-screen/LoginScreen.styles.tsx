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
  btnContainer: {
    borderWidth: 0.1,
    height: 56,
    marginHorizontal: scale(20),
    borderRadius: 30,
    borderColor: colors.appThemeColor,
    backgroundColor: colors.appThemeColor,
    marginTop: verticalScale(19),
  },
  btnText: {
    fontSize: global.font_16,
    color: colors.white,
    textAlign: 'center',
    marginVertical: verticalScale(15),
  },
});
