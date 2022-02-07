import {ThemeProvider} from 'react-native-elements';
import {Colors, Spacing, Typography} from '../constants';

const customTheme = {
  colors: {
    primary: Colors.PRIMARY,
    secondary: Colors.SECONDARY,
    success: Colors.SUCCESS,
    error: Colors.ALERT,
  },
  Button: {
    buttonStyle: {
      paddingVertical: Spacing.SCALE_14,
      marginVertical: Spacing.SCALE_12,
      // borderWidth: 1,/
      borderRadius: 4,
    },
    titleStyle: {
      fontSize: Spacing.FONT_16,
      fontFamily: Typography.FONT_MEDIUM.fontFamily,
    },
  },
  Text: {
    h2Style: {
      fontSize: Spacing.FONT_32,
      fontFamily: Typography.FONT_BOLD.fontFamily,
    },
    h4Style: {
      // fontSize: Spacing.FONT_32,
      fontFamily: Typography.FONT_BOLD.fontFamily,
    },
  },
};

export {customTheme, ThemeProvider};
