import {Dimensions, Platform, PixelRatio} from 'react-native';

export const DEVICE_WIDTH = Dimensions.get('window').width;
export const DEVICE_HEIGHT = Dimensions.get('window').height;
export const SMALL_DEVICE = DEVICE_WIDTH < 375;
export const MIDDLE_DEVICE = DEVICE_WIDTH >= 375 && DEVICE_WIDTH < 414;
export const BIG_DEVICE = DEVICE_WIDTH >= 414;
export const STATUS_BAR_HEIGHT = 20;
export const IS_IOS = Platform.OS === 'ios';
export const IS_ANDROID = Platform.OS === 'android';
export const PIXEL_RATIO_1X = PixelRatio.get() < 2;
export const PIXEL_RATIO_BORDER = IS_IOS ? 0.5 : 1;
export const DEFAULT_BOTTOM_NAVIGATION_HEIGHT = 60;
export const ANDOID_STATUSBAR_VERSION = 6;
export const REGEX_EMAIL = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
export const REGEX_PHONE = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/;

export const MAX_WIDTH_DEVICE = 414;
// use https://www.paintcodeapp.com/news/ultimate-guide-to-iphone-resolutions

export const CONTROLS_HEIGHT = 56;

const mixins = {
  color: {
    white: '#fff',
    white02: 'rgba(255, 255, 255, 0.2)',
    white08: 'rgba(255, 255, 255, 0.8)',
    white06: 'rgba(255, 255, 255, 0.6)',
    cloud: '#A6E1FE',
    sky: '#F0F9FF',
    pink: '#FF4E52',
    tomato: '#f4511e',
    blue: '#546BEA',
    purple: '#A6ABFB',
    blueLight: '#AFCBFF',
    blueDark: '#1F134E',
    blueDark05: 'rgba(37, 36, 90, 0.5)',
    blueDarken: '#1C172F',
    gray: '#5A6576',
    grayBorder: '#d2d2d2',
    grayLight: '#EFEFF4',
    grayLight09: 'rgba(170, 175, 180, 0.9)',
    grayMiddle: '#E5E5EA',
    black: '#000',
    orange: '#FBCB69',
    yellow: '#ffa21f',
    green: '#006600',
    greenToxik: '#009900',
  },
  font: {
    largeFont: 28,
    bigFont: 20,
    middleFont: 18,
    defaultFont: 16,
    thinFont: 13,
    smallFont: 12,
  },
  indent: {
    mini: 2,
    small: 4,
    middle: 6,
    medial: 8,
    doubleMiddle: 12,
    medium: 14,
    default: 16,
    big: 32,
  },
};

export const BLUE_GRADIENT = ['#546BEA', 'rgba(84, 107, 234, 0.84)'];
export const PINK_GRADIENT = ['#EB6A9F', '#FBADB4'];
export const GRIN_GRADIENT = ['#2DC897', '#7EF192'];
export const PURPLE_GRADIENT = ['#A665D1', '#FFBBCF'];
export const ORANGE_GRADIENT = ['#F07590', '#FFB182'];
export const GRIN_INVERT_GRADIENT = ['#7EF192', '#2DC897'];

const SHADOW = {
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.05,
  shadowRadius: 12,
  elevation: mixins.indent.mini,
};

export const GREY_SHADOW = {
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowColor: mixins.color.black,
  elevation: mixins.indent.mini,
  ...SHADOW,
};

export const DARK_SHADOW = {
  ...SHADOW,
  shadowColor: mixins.color.black,
  shadowOpacity: 0.2,
  shadowRadius: 4,
  elevation: mixins.indent.mini,
};

export const DARK_SHADOW_INVERT = {
  ...DARK_SHADOW,
  shadowOffset: {
    width: 0,
    height: -4,
  },
  shadowOpacity: 0.15,
};

export const PINK_SHADOW = {
  ...SHADOW,
  shadowOffset: {
    width: 0,
    height: 10,
  },
  shadowColor: mixins.color.pink,
  shadowOpacity: 0.2,
  shadowRadius: 4,
};

export const GREEN_SHADOW = {
  ...SHADOW,
  shadowOffset: {
    width: 0,
    height: 10,
  },
  shadowColor: mixins.color.green,
  shadowOpacity: 0.2,
  shadowRadius: 4,
};

export const PURPLE_SHADOW = {
  ...SHADOW,
  shadowOffset: {
    width: 0,
    height: 10,
  },
  shadowColor: mixins.color.purple,
  shadowOpacity: 0.2,
  shadowRadius: 4,
};

export const ORANGE_SHADOW = {
  ...SHADOW,
  shadowOffset: {
    width: 0,
    height: 10,
  },
  shadowColor: ORANGE_GRADIENT[0],
  shadowOpacity: 0.2,
  shadowRadius: 4,
};

export const BLUE_SHADOW = {
  ...SHADOW,
  shadowColor: mixins.color.blue,
  shadowOpacity: 0.4,
};

export default mixins;
