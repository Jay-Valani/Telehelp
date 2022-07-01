import { StyleSheet } from "react-native";
import { colors } from "../../globals/colors";
import * as global from "../../globals/global"
import scale, { verticalScale } from "../../globals/scale";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  circle: {
    tintColor: colors.appThemeColor,
    borderWidth: 2,
    borderColor: colors.appThemeColor,
    borderRadius: 20,
  },
  back_arrow: {
    marginTop: verticalScale(12),
    tintColor: colors.white
  },
  heading: {
    fontSize: global.font_32,
    color: colors.white,
    // marginTop: verticalScale(32),
    marginHorizontal: scale(23),
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
    textAlign: "center",
    marginVertical: verticalScale(15),
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
  plus: {
    fontSize: global.font_26,
    color: colors.lightBlack,
    textAlign: "center",
  },
  cancle: {
    tintColor: colors.black,
    marginTop: verticalScale(18),
    alignSelf: 'flex-end',
    marginRight: scale(24),
    height: 18,
    width: 18
  },
  view: {
    fontSize: global.font_16,
    color: colors.appThemeColor,
    fontWeight: "500",
    marginVertical: verticalScale(20),
  }
});
