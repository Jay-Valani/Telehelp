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
  mainHeading: {
    fontSize: global.font_14,
    color: colors.lightBlack,
    marginTop: verticalScale(32),
    marginHorizontal: scale(23),
  },
  heading: {
    fontSize: global.font_32,
    color: colors.lightBlack,
    marginTop: verticalScale(24),
    marginHorizontal: scale(23),
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
  Circle: {
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
  modifiedAppointment: {
    fontSize: global.font_16,
    color: colors.lightBlack,
    marginLeft: scale(16),
    marginVertical: verticalScale(16),
  },
  cancleAppointment: {
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
