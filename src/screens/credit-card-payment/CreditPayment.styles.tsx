import { StyleSheet } from "react-native";
import { colors } from "../../globals/colors";
import * as global from "../../globals/global"
import scale, { verticalScale } from "../../globals/scale";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  circle: {
    tintColor: colors.appThemeColor,
    borderWidth: 2,
    borderColor: colors.appThemeColor,
    borderRadius: 20,
  },
  heading: {
    fontSize: global.font_14,
    color: colors.black,
    marginTop: verticalScale(32),
    marginHorizontal: scale(20),
    textAlign: "left"
  },
  enterCredDetailsTxt: {
    fontSize: global.font_32,
    color: colors.black,
    marginTop: verticalScale(24),
    marginHorizontal: scale(20),
    textAlign: "left",
    fontWeight: "400"
  },
  btnContainer: {
    borderWidth: 0.1,
    height: 56,
    marginHorizontal: scale(20),
    borderRadius: 30,
    borderColor: colors.appThemeColor,
    backgroundColor: colors.appThemeColor,
    marginTop: verticalScale(38),
  },
  btnText: {
    fontSize: global.font_16,
    color: colors.white,
    textAlign: "center",
    marginVertical: verticalScale(18),
  },
  agree: {
    fontSize: global.font_16,
    color: colors.gray,
    marginLeft: scale(10)
  },
  terms_condi: {
    fontSize: global.font_16,
    color: colors.appThemeColor,
  },
});
