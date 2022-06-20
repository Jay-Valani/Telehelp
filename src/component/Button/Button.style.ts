import { StyleSheet } from 'react-native';
import * as global from '../../globals/global';
import {colors} from "../../globals/colors"

export const styles = StyleSheet.create({
  defaultBtnStyle: {
    padding: 15,
    alignItems: 'center',
    backgroundColor: colors.appThemeColor,
    borderWidth: 1,
    borderRadius: 36,
    borderColor: colors.white,
  },
  defaultTitleStyle: {
    color: colors.white,
    fontSize: global.font_16
  },
});
