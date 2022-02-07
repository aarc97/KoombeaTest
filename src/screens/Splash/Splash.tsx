import React, {memo} from 'react';
import {StatusBar} from 'react-native';

import styled from 'styled-components/native';
import {Colors, Spacing} from '../../constants';
// import Logo from '../../../assets/Logo';
import {Container} from './styles';

const Splash = () => {
  return (
    <Container>
      <StatusBar barStyle="light-content" />
      {/* <Logo /> */}
      <Loading color={Colors.WHITE} />
    </Container>
  );
};

export default memo(Splash);

const Loading = styled.ActivityIndicator({
  position: 'absolute',
  bottom: Spacing.SCALE_24,
});
