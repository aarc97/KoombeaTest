import React, {memo} from 'react';
import {Text} from 'react-native-elements';
import {Container} from './styles';

const ConnectionError = () => {
  return (
    <Container>
      <Text h4>Sorry, connection error</Text>
    </Container>
  );
};

export default memo(ConnectionError);
