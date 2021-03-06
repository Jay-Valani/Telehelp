import { StyleSheet } from "react-native";
import { colors } from "../../globals/colors";
import * as global from "../../globals/global";
import scale, { verticalScale } from "../../globals/scale";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    marginTop: verticalScale(28),
    marginHorizontal: scale(20),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  heading: {
    fontSize: global.font_24,
    color: colors.lightBlack,
    marginTop: verticalScale(8),
  },
  cancle: {
    height: 16,
    width: 16,
    tintColor: colors.lightBlack,
    marginTop: verticalScale(10),
  },
  subHeading: {
    fontSize: global.font_14,
    color: colors.lightBlack,
    marginTop: verticalScale(20),
    marginHorizontal: scale(20),
  },
  photo: {
    fontSize: global.font_14,
    color: colors.lightBlack,
    marginTop: verticalScale(20),
    marginHorizontal: scale(20),
  },
  card: {
    borderWidth: 1,
    borderColor: colors.lightGray,
    backgroundColor: colors.lightGray,
    height: 184,
    marginTop: verticalScale(16),
    marginHorizontal: scale(20),
    borderRadius: 10,
  },
  card2: {
    borderWidth: 1,
    borderColor: colors.gray,
    backgroundColor: colors.gray,
    height: 110,
    marginTop: verticalScale(16),
    marginHorizontal: scale(83),
    borderRadius: 10,
  },
  cardHeading: {
    fontSize: global.font_9,
    color: colors.white,
    marginTop: verticalScale(9),
    marginHorizontal: scale(10),
  },
  uploadPhoto: {
    fontSize: global.font_16,
    color: colors.appThemeColor,
    marginTop: verticalScale(20),
    textAlign: "center",
  },
  profile: {},
  rect: {
    marginTop: verticalScale(4),
    marginLeft: scale(2),
  },
  strip: {
    borderWidth: 1,
    marginTop: verticalScale(13),
    borderColor: colors.white,
    backgroundColor: colors.white,
    height: 22,
    marginLeft: 14,
  },
  rectangle: {
    borderWidth: 0.1,
    marginTop: verticalScale(27),
    height: 30,
    borderColor: colors.white,
    backgroundColor: colors.white,
  },
  btnContainer: {
    borderWidth: 0.1,
    height: 56,
    marginHorizontal: scale(20),
    borderRadius: 30,
    marginTop: verticalScale(19),
  },
  btnText: {
    fontSize: global.font_16,
    color: colors.white,
    textAlign: "center",
    marginVertical: verticalScale(16),
  },
  modalTakePhoto: {
    fontSize: global.font_20,
    color: colors.appThemeColor,
    textAlign: "center",
    marginVertical: verticalScale(20)
  },
  modalChoosePhoto: {
    fontSize: global.font_20,
    color: colors.appThemeColor,
    textAlign: "center",
    marginVertical: verticalScale(20)
  },
  modalCanclePhoto: {
    fontSize: global.font_20,
    color: colors.appThemeColor,
    textAlign: "center",
    fontWeight: "600",
    marginVertical: verticalScale(15)
  },
  change: {
    fontSize: global.font_16,
    color: colors.appThemeColor,
    fontWeight: "500",
    marginRight: scale(24)
  },
  remove: {
    fontSize: global.font_16,
    color: colors.red,
    fontWeight: "500",
    marginLeft: scale(24)
  }
});
