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
});
