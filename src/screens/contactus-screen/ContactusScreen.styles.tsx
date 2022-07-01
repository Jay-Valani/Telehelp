import { StyleSheet } from "react-native";
import * as global from "../../globals/global";
import scale, { verticalScale } from "../../globals/scale";
import {colors} from "../../globals/colors"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    flex: 0.2,
    backgroundColor: colors.appThemeColor,
  },
  footer: {
    flex: 0.8,
  },
  headingContainer: {
    flexDirection: "row",
    marginHorizontal: scale(20),
    marginTop: verticalScale(56),
    justifyContent: "space-between",
  },
  cancle: {
    height: 12,
    width: 12,
    marginTop: verticalScale(15),
  },
  greetings: {
    fontSize: global.font_32,
    color: colors.white,
  },
  contactUs: {
    fontSize: global.font_16,
    color: colors.white,
    marginHorizontal: scale(20),
    marginTop: verticalScale(18),
  },
  chatContainer: {
    flexDirection: "row",
    marginHorizontal: scale(10),
  },
  appLogoContainer: {
    backgroundColor: colors.appThemeColor,
    padding: 10,
    borderRadius: 50,
    height: 40,
    width: 40,
    marginTop: verticalScale(50),
  },
  greenSpot: {
    backgroundColor: "#5CD06E",
    padding: 2,
    borderRadius: 50,
    height: 10,
    width: 10,
    marginLeft: verticalScale(15),
  },
  appLogo: {
    height: 20,
    width: 20,
    alignSelf: "center",
  },
  chatServerContainer: {
    marginLeft: scale(8),
    marginRight: scale(39),
    borderWidth: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    borderColor: colors.lightGray,
    backgroundColor: colors.lightGray,
    flex: 1,
  },
  chatServer: {
    fontSize: global.font_16,
    color: colors.lightBlack,
    padding: 10,
    marginVertical: scale(16),
    paddingHorizontal: scale(20),
  },
  chatclientContainer: {
    marginLeft: scale(39),
    marginRight: scale(8),
    borderWidth: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderColor: colors.lightGray,
    backgroundColor: colors.lightGray,
    flex: 1,
  },
  chatclient: {
    fontSize: global.font_16,
    color: colors.appThemeColor,
    padding: 10,
    marginVertical: scale(16),
    paddingHorizontal: scale(20),
  },
  options: {
    fontSize: global.font_16,
    color: colors.appThemeColor,
    padding: 5,
    textAlign: "center",
    marginTop: verticalScale(12),
    marginBottom: verticalScale(8),
  },
  messageContainer: {
    flexDirection: "row",
    marginTop: verticalScale(12),
    marginHorizontal: scale(20),
    justifyContent: "space-between",
    borderWidth: 1,
    borderRadius: 30,
    borderColor: colors.lightGray,
    backgroundColor: colors.lightGray,
    // padding: 10,
  },
  message: {
    paddingVertical: verticalScale(12),
    marginLeft: verticalScale(20),
    flex: 1,
    fontSize: global.font_14,
    color: colors.gray,
  },
  vectorContainer: {
    backgroundColor: colors.appThemeColor,
    borderRadius: 30,
    paddingVertical: verticalScale(18),
    paddingHorizontal: verticalScale(18),
  },
  vector: {
    height: 17,
    width: 18,
  },
});
