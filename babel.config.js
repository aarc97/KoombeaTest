module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./tests/'],
          '@components': './src/components',
          '@constants': './src/constants',
          '@utils': './src/utils',
          '@navigations': './src/navigations',
          '@screens': './src/screens',
          '@locales': './src/locales',
          '@libraries': './src/libraries',
          '@hooks': './src/hooks',
          '@context': './src/context',
          '@proptypes': './src/types',
          '@services': './src/services',
        },
      },
    ],
  ],
};
