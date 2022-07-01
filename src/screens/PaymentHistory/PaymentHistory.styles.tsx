import { StyleSheet } from "react-native";
import * as global from "../../globals/global";
import scale, {verticalScale} from '../../globals/scale';
import {images} from '../../assets/images/map';
import {colors} from '../../globals/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: "row",
    backgroundColor: colors.appThemeColor,
    flex: 0.2,
  },
  back_arrow: {
    tintColor: colors.white,
    marginTop: verticalScale(90),
    marginLeft: scale(27),
  },
  heading: {
    fontSize: global.font_32,
    color: colors.white,
    marginTop: verticalScale(80),
    marginLeft: scale(33),
  },
  footer: {
    flex: 0.8,
  },
  orderId: {
    fontSize: global.font_16,
    color: colors.lightBlack,
  },
  price: {
    fontSize: global.font_16,
    color: colors.lightBlack,
  },
  title: {
    fontSize: global.font_16,
    color: colors.gray,
    marginTop: verticalScale(10),
  },
});
