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
  info: {
    fontSize: global.font_16,
    color: colors.lightBlack,
    marginTop: verticalScale(10),
  },
  description: {
    fontSize: global.font_14,
    color: colors.gray,
    marginTop: verticalScale(8),
  },
  view: {
    fontSize: global.font_16,
    color: colors.appThemeColor,
    fontWeight: '500',
    marginVertical: verticalScale(20),
  },
  contactAdmin: {
    fontSize: global.font_14,
    color: colors.gray,
    fontWeight: '400',
    textAlign: 'center',
    marginHorizontal: scale(50),
  },
});
