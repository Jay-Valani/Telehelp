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
    // height: 270,
    alignSelf: "center",
    backgroundColor: colors.white,
    borderRadius: 10,
    marginHorizontal: scale(30),
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
  appLogoContainer: {
    borderWidth: 1,
    alignSelf: "center",
    paddingHorizontal: 8,
    paddingVertical: 8,
    backgroundColor: colors.appThemeColor,
    borderColor: colors.appThemeColor,
    borderRadius: 10,
    marginTop: verticalScale(20),
  },
  app_logo: {
    alignSelf: "center",
  },
  notNow: {
    //  : global.NEUTRIFPRO_REGULAR,
    fontSize: global.font_16,
    color: colors.appThemeColor,
    marginTop: verticalScale(11),
    textAlign: "center",
    marginBottom: verticalScale(13),
  },
  customRatingBarStyle: {
      justifyContent: 'center',
      flexDirection: 'row',
      marginTop: verticalScale(12),
  },
  starImageStyle: {
      height: 20,
      width: 20,
      resizeMode: 'cover',
      marginHorizontal: scale(10),
  }
});
