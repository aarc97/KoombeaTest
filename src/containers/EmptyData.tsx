import React, {memo} from 'react';
import {Text} from 'react-native-elements';
import {Container} from './styles';

const EmptyData = () => {
  return (
    <Container>
      <Text h4>No data found</Text>
    </Container>
  );
};

export default memo(EmptyData);
