import {StyleSheet} from 'react-native';
import {colors} from '../../globals/colors';
import * as global from '../../globals/global';
import scale, {verticalScale} from '../../globals/scale';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderColor: colors.lightGray,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: scale(57),
    marginBottom: verticalScale(30),
    marginTop: verticalScale(17),
  },
  schedule: {
    width: 24,
    height: 24,
  },
  community: {
    width: 24,
    height: 24,
  },
  profile: {
    width: 24,
    height: 24,
  },
});
