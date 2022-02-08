import React, {FC, memo} from 'react';
import {ActivityIndicator} from 'react-native';
import {Text} from 'react-native-elements';
import {Container} from './styles';

interface ILoadingData {
  label?: string;
}

const LoadingData: FC<ILoadingData> = ({label = 'Loading Data...'}) => {
  return (
    <Container>
      <ActivityIndicator size="small" />
      <Text h4>{label}</Text>
    </Container>
  );
};

export default memo(LoadingData);
