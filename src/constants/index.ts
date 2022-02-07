import * as Colors from './colors';
import * as Mixins from './mixins';
import * as Spacing from './spacing';
import * as Typography from './typography';
import * as Api from './api.constants';
import * as routes from './routes.constants';
import {Platform} from 'react-native';

const IS_ANDROID = Platform.OS === 'android';

const {Routes} = routes;

export {Api, Colors, Mixins, Spacing, Typography, Routes, IS_ANDROID};
