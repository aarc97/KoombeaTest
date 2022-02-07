import {scaleFont} from './mixins';

// FONT FAMILY
export const FONT_FAMILY_REGULAR = 'Roboto-Regular';
export const FONT_FAMILY_BOLD = 'Roboto-Bold';
export const FONT_FAMILY_HEAVY = 'Roboto-Black';
export const FONT_FAMILY_MEDIUM = 'Roboto-Medium';

// FONT WEIGHT
export const FONT_WEIGHT_REGULAR = '400';
export const FONT_WEIGHT_BOLD = '700';
export const FONT_WEIGHT_HEAVY = '800';
export const FONT_WEIGHT_MEDIUM = '500';

// FONT SIZE
export const FONT_SIZE_16 = scaleFont(16);
export const FONT_SIZE_14 = scaleFont(14);
export const FONT_SIZE_12 = scaleFont(12);

// LINE HEIGHT
export const LINE_HEIGHT_24 = scaleFont(24);
export const LINE_HEIGHT_20 = scaleFont(20);
export const LINE_HEIGHT_16 = scaleFont(16);

// FONT STYLE
export const FONT_REGULAR = {
  fontFamily: FONT_FAMILY_REGULAR,
  fontWeight: FONT_WEIGHT_REGULAR,
};

export const FONT_BOLD = {
  fontFamily: FONT_FAMILY_BOLD,
  fontWeight: FONT_WEIGHT_BOLD,
};

export const FONT_HEAVY = {
  fontFamily: FONT_FAMILY_HEAVY,
  fontWeight: FONT_WEIGHT_HEAVY,
};

export const FONT_MEDIUM = {
  fontFamily: FONT_FAMILY_MEDIUM,
  fontWeight: FONT_WEIGHT_MEDIUM,
};
