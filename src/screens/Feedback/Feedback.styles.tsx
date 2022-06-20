import { StyleSheet } from "react-native";
import scale, { verticalScale } from "../../Globals/scale";
import * as global from "../../Globals/global";
import { colors } from "../../Globals/color";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
  },
  card: {
    borderWidth: 1,
    borderColor: colors.white,
    height: 242,
    alignSelf: "center",
    backgroundColor: colors.white,
    borderRadius: 10,
    marginHorizontal: scale(40),
  },
  heading: {
    //  : global.NEUTRIFPRO_REGULAR,
    fontSize: global.font_16,
    color: colors.lightBlack,
    marginTop: verticalScale(28),
    textAlign: "center",
  },
  subHeading: {
    //  : global.NEUTRIFPRO_REGULAR,
    fontSize: global.font_16,
    color: colors.gray,
    marginTop: verticalScale(6),
    textAlign: "center",
    marginHorizontal: scale(16),
  },
  moodEmoji: {
    alignSelf: "center",
    marginTop: verticalScale(20),
  },
  moodTxt: {
    //  : global.NEUTRIFPRO_REGULAR,
    fontSize: global.font_16,
    color: colors.appThemeColor,
    marginTop: verticalScale(16),
    textAlign: "center",
  },
});
