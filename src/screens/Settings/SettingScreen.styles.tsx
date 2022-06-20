import { StyleSheet } from "react-native";
import scale, { verticalScale } from "../../Globals/scale";
import * as global from "../../Globals/global";
import { colors } from "../../Globals/color";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: "row",
    backgroundColor: colors.appThemeColor,
    flex: 0.18,
  },
  back_arrow: {
    tintColor: colors.white,
    marginTop: verticalScale(85),
    marginLeft: scale(27),
  },
  heading: {
    //  : global.RECOLETA_REGULAR,
    fontSize: global.font_32,
    color: colors.white,
    marginTop: verticalScale(80),
    marginLeft: scale(33),
  },
  footer: {
    flex: 0.82,
  },
  nameHeading: {
    //  : global.NEUTRIFPRO_SEMIBOLD,
    fontSize: global.font_16,
    color: colors.lightBlack,
  },
  edit: {
    //  : global.NEUTRIFPRO_SEMIBOLD,
    fontSize: global.font_16,
    color: colors.appThemeColor,
  },
  name: {
    //  : global.NEUTRIFPRO_REGULAR,
    fontSize: global.font_16,
    color: colors.gray,
    marginTop: verticalScale(8),
  },
  logout: {
    //  : global.NEUTRIFPRO_REGULAR,
    fontSize: global.font_16,
    color: colors.red,
    marginTop: verticalScale(20),
    marginHorizontal: scale(24)
  }
});
