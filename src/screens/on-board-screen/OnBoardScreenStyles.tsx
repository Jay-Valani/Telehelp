import {StyleSheet} from 'react-native';
import {colors} from '../../globals/colors';
import {ScreenWidth} from '../../globals/global';
import {verticalScale} from '../../globals/scale';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.appThemeColor,
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
  },
  bottomContainer: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.appThemeColor,
    backgroundColor: colors.appThemeColor,
    width: '100%',
    padding: 15,
  },
  dotStyle: {
    backgroundColor: colors.white, 
    borderRadius: 4,
    height: 8,
    width: 8,
    marginHorizontal: 4,
  },
  dotContainer: {
    marginBottom: verticalScale(20),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  loginContainer: {
    flexDirection: 'row',
    marginTop: verticalScale(24),
    marginBottom: 10,
    justifyContent: 'center',
  },
  backgroundContainer: {
    width: ScreenWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  haveAccount: {
    color: colors.white,
  },
  loginTxt: {
    color: colors.white,
  },
});
