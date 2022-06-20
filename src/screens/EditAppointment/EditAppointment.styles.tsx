import { StyleSheet } from "react-native";
import scale, { verticalScale } from "../../Globals/scale";
import * as global from "../../Globals/global";
import { colors } from "../../Globals/color";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  cancle: {
    tintColor: colors.lightBlack,
    height: 16,
    width: 16,
    marginTop: verticalScale(56),
    marginLeft: scale(24),
  },
  heading: {
    marginTop: verticalScale(36),
    marginLeft: scale(20),
    //  : global.RECOLETA_REGULAR,
    fontSize: global.font_32,
    color: colors.black,
  },
  card: {
    borderWidth: 0.2,
    borderColor: colors.gray,
    marginTop: verticalScale(40),
    marginHorizontal: 20,
    height: 180,
    borderRadius: 8,
  },
  name: {
    //  : global.NEUTRIFPRO_REGULAR,
    fontSize: global.font_18,
    color: colors.lightBlack,
  },
  profession: {
    //  : global.NEUTRIFPRO_REGULAR,
    fontSize: global.font_12,
    color: colors.lightBlack,
    marginTop: verticalScale(8),
  },
  faceImage: {
    height: 48,
    width: 48,
  },
  calenderImage: {
    height: 16,
    width: 16,
  },
  date: {
    //  : global.NEUTRIFPRO_REGULAR,
    fontSize: global.font_12,
    color: colors.lightBlack,
    marginLeft: scale(9),
  },
  timeImage: {
    height: 16,
    width: 16,
  },
  time: {
    //  : global.NEUTRIFPRO_REGULAR,
    fontSize: global.font_13,
    color: colors.lightBlack,
    marginLeft: scale(9),
  },
  modifiedAppointment: {
    //  : global.NEUTRIFPRO_REGULAR,
    fontSize: global.font_16,
    color: colors.lightBlack,
    marginLeft: scale(16),
    marginVertical: verticalScale(16),
  },
  cancleAppointment: {
    //  : global.NEUTRIFPRO_REGULAR,
    fontSize: global.font_16,
    color: colors.lightBlack,
    marginLeft: scale(16),
    marginVertical: verticalScale(16),
  },
  checked: {
    height: 24,
    width: 24,
    alignSelf: "center",
    marginLeft: scale(16),
  },
  card2: {
    marginTop: verticalScale(40),
    marginHorizontal: scale(20),
  },
  appointmentContainer: {
    flexDirection: "row",
    borderWidth: 0.2,
    height: 56,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderColor: colors.gray,
  },
  circle: {
    borderWidth: 0.5,
    marginLeft: scale(16),
    alignSelf: "center",
    height: 24,
    width: 24,
    borderRadius: 30,
    borderColor: colors.gray
  },
  appointmentContainerCancle: {
    flexDirection: "row",
    borderWidth: 0.2,
    height: 56,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: colors.gray,
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
    //  : global.NEUTRIFPRO_REGULAR,
    fontSize: global.font_16,
    color: colors.white,
    textAlign: "center",
    marginVertical: verticalScale(16),
  },
});
