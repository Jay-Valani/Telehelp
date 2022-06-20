import { StyleSheet } from "react-native";
import { colors } from "../../globals/colors";
import * as global from "../../globals/global"
import scale, { verticalScale } from "../../globals/scale";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  cancle: {
    tintColor: colors.lightBlack,
    marginTop: verticalScale(12),
  },
  personalInfo: {
    fontSize: global.font_24,
    color: colors.lightBlack,
    fontWeight: "400"
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
    marginVertical: verticalScale(16),
  },
});
