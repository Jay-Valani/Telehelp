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
  card: {
    borderWidth: 0.1,
    marginTop: verticalScale(41),
    marginHorizontal: scale(20),
    height: 300,
    elevation: 3,
    shadowOffset: {height: 4, width: 0},
    shadowRadius: 2,
    shadowOpacity: 0.2,
    shadowColor: colors.gray,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: verticalScale(20),
  },
  face: {
    alignSelf: 'center',
    flex: 1,
    marginLeft: scale(30),
    height: 96,
    width: 96,
  },
  edit: {
    marginRight: scale(23),
    marginTop: verticalScale(10),
  },
  name: {
    fontSize: global.font_18,
    color: colors.lightBlack,
    marginTop: verticalScale(20),
    textAlign: 'center',
  },
  profession: {
    fontSize: global.font_12,
    color: colors.lightBlack,
    marginTop: verticalScale(8),
    textAlign: 'center',
  },
  line: {
    borderWidth: 0.2,
    marginVertical: verticalScale(20),
    marginHorizontal: scale(20),
    borderColor: colors.lightGray,
  },
  calenderContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
  },
  schedule: {},
  date: {
    fontSize: global.font_13,
    color: colors.lightBlack,
    marginLeft: verticalScale(10),
  },
  watch: {},
  time: {
    fontSize: global.font_13,
    color: colors.lightBlack,
    marginLeft: verticalScale(10),
  },
  disclaimer: {
    fontSize: global.font_15,
    color: colors.lightBlack,
    marginTop: verticalScale(41),
    textAlign: 'center',
  },
  btnContainer: {
    borderColor: colors.appThemeColor,
    borderWidth: 1,
    padding: 15,
    backgroundColor: colors.appThemeColor,
    borderRadius: 30,
    marginHorizontal: scale(20),
  },
  btnContainer1: {
    marginHorizontal: scale(20),
    marginTop: verticalScale(24),
  },
  but: {
    fontSize: global.font_16,
    color: colors.white,
    textAlign: 'center',
  },
});
