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
    marginTop: verticalScale(88),
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
  cardInfo: {
    //  : global.NEUTRIFPRO_SEMIBOLD,
    fontSize: global.font_16,
    color: colors.lightBlack,
  },
  remove: {
    //  : global.NEUTRIFPRO_SEMIBOLD,
    fontSize: global.font_16,
    color: colors.red,
  },
  cardNo: {
    //  : global.NEUTRIFPRO_REGULAR,
    fontSize: global.font_14,
    color: colors.gray,
    marginTop: verticalScale(10),
    marginHorizontal: scale(16),
  },
  footerContainer: {
    borderWidth: 0.5,
    height: 80,
    marginHorizontal: scale(20),
    borderRadius: 10,
    borderColor: colors.white,
    backgroundColor: colors.white,
    elevation: 4,
    shadowOffset: { height: 4, width: 0 },
    shadowRadius: 4,
    shadowOpacity: 0.2,
    shadowColor: colors.lightBlack,
    marginTop: verticalScale(30),
  },
});
