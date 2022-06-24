import {StyleSheet} from 'react-native';
import {colors} from '../../globals/colors';
import * as global from '../../globals/global';
import scale, {verticalScale} from '../../globals/scale';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  heading: {
    fontSize: global.font_32,
    color: colors.lightBlack,
    marginTop: verticalScale(32),
    marginHorizontal: scale(23),
  },
  subHeading: {
    fontSize: global.font_14,
    color: colors.black,
    marginTop: verticalScale(24),
    marginHorizontal: scale(23),
    fontWeight: '400',
  },
  btnContainer: {
    borderWidth: 0.1,
    height: 56,
    marginHorizontal: scale(20),
    borderRadius: 30,
  },
  btnText: {
    fontSize: global.font_16,
    color: colors.white,
    textAlign: 'center',
    marginVertical: verticalScale(15),
  },
});
