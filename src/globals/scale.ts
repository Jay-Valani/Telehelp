import { Dimensions, Platform } from 'react-native';

//Screen Constants
// const SCREEN_HEIGHT = Platform.OS === 'ios' ? Dimensions.get('window').height : Dimensions.get('window').height <= 550 ? 667 : Dimensions.get('window').height;
const SCREEN_HEIGHT = Platform.OS === 'ios' ? 812 : 812;
const SCREEN_WIDTH = 375;

const { height, width } = Dimensions.get('window');

/**
 * Function to scale a value based on the size of the screen size and the original
 * size used on the design.
 */

console.log(
  'Dimensions.get.width',
  Dimensions.get('window').width,
  Dimensions.get('window').height
);

const iOSHeaderFont =
  Dimensions.get('window').width >= 375 && Dimensions.get('window').height > 800
    ? width
    : 590;

const androidHeaderFont =
  Dimensions.get('window').width >= 375 && Dimensions.get('window').height > 800
    ? width
    : 650;

const SCREEN_WIDTH_HEADER_FONT =
  Platform.OS === 'ios' ? iOSHeaderFont : androidHeaderFont;

const fontForHeader = (units: number = 1) =>
  (width / SCREEN_WIDTH_HEADER_FONT) * units;

export default function (units: number = 1) {
  return (width / SCREEN_WIDTH) * units;
}
const scaleForFont = (units: number = 1) => (width / SCREEN_WIDTH) * units;
const verticalScale = (size: number) => (height / SCREEN_HEIGHT) * size;

export { verticalScale, scaleForFont, fontForHeader };
