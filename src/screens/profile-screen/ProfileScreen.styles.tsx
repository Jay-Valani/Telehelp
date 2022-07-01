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
    flex: 0.2,
    backgroundColor: colors.appThemeColor,
  },
  footer: {
    flex: 0.8,
    backgroundColor: colors.white,
  },
  setting: {
    height: 25,
    width: 25,
    marginTop: verticalScale(15),
    marginRight: scale(10),
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: verticalScale(70),
    marginHorizontal: scale(16),
  },
  profile: {
    fontSize: global.font_32,
    color: colors.white,
    fontWeight: '400',
  },
  name: {
    fontSize: global.font_24,
    color: colors.lightBlack,
    fontWeight: '400',
    marginTop: verticalScale(28),
    marginHorizontal: scale(20),
  },
  card: {
    marginTop: verticalScale(15),
    marginHorizontal: 20,
    height: 100,
    borderRadius: 8,
    elevation: 4,
    shadowOffset: {height: 4, width: 0},
    shadowRadius: 2,
    shadowOpacity: 0.2,
    shadowColor: colors.lightGray,
  },
  title: {
    fontSize: global.font_18,
    color: colors.lightBlack,
    fontWeight: '600',
    marginTop: verticalScale(24),
  },
  subTitle: {
    fontSize: global.font_12,
    color: colors.gray,
    fontWeight: '400',
    marginTop: verticalScale(12),
  }
});
