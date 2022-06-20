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
    flex: 0.15,
  },
  back_arrow: {
    tintColor: colors.white,
    marginTop: verticalScale(75),
    marginLeft: scale(27),
  },
  heading: {
     : global.RECOLETA_REGULAR,
    fontSize: global.font_32,
    color: colors.white,
    marginTop: verticalScale(67),
    marginLeft: scale(33),
  },
  footer: {
    flex: 0.85,
  },
  orderId: {
    //  : global.NEUTRIFPRO_REGULAR,
    fontSize: global.font_16,
    color: colors.lightBlack,
  },
  price: {
    //  : global.NEUTRIFPRO_REGULAR,
    fontSize: global.font_16,
    color: colors.lightBlack,
  },
  title: {
    //  : global.NEUTRIFPRO_REGULAR,
    fontSize: global.font_16,
    color: colors.gray,
    marginTop: verticalScale(10),
  },
});
