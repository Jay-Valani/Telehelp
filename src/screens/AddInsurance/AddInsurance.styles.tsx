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
  heading: {
    fontSize: global.font_32,
    color: colors.lightBlack,
    marginTop: verticalScale(32),
    marginHorizontal: scale(23),
  },
  btnContainer: {
    borderWidth: 0.1,
    borderColor: colors.appThemeColor,
    backgroundColor: colors.appThemeColor,
    height: 56,
    marginHorizontal: scale(20),
    borderRadius: 30,
  },
  btnText: {
    fontSize: global.font_16,
    color: colors.white,
    textAlign: "center",
    marginVertical: verticalScale(16),
  },
  card: {
    borderWidth: 0.2,
    borderRadius: 10,
    borderColor: colors.gray,
    marginHorizontal: scale(23),
  },
  info: {
    fontSize: global.font_16,
    color: colors.lightBlack,
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
  modalTitle: {
    fontSize: global.font_18,
    color: colors.lightBlack,
    marginTop: verticalScale(8),
    textAlign: "center",
    fontWeight: "600"
  },
  modalSubTitle: {
    fontSize: global.font_16,
    color: colors.gray,
    marginTop: verticalScale(32),
    textAlign: "center",
    fontWeight: "400",
    marginHorizontal: scale(20),
  }
});
