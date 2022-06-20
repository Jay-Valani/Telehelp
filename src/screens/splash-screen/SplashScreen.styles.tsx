import {StyleSheet} from 'react-native';
import scale, {verticalScale} from '../../globals/scale';
import * as global from '../../globals/global';
import {colors} from '../../globals/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appThemeColor,
    justifyContent: 'center',
  },
  logo: {
    alignSelf: 'center',
    width: 82,
    height: 84,
    marginLeft: scale(15),
  },
  appName: {
    fontSize: global.font_36,
    textAlign: 'center',
    marginTop: verticalScale(19),
    color: colors.white,
    fontWeight: '500',
  },
});
