import styled from 'styled-components/native';

import {Colors, Spacing} from '../../constants';
import {SafeAreaView} from 'react-native-safe-area-context';

const Container = styled(SafeAreaView)`
  flex: 1;
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.PRIMARY};
`;

const Loading = styled.View`
  position: absolute;
  bottom: ${Spacing.SCALE_32}px;
`;

export {Container, Loading};
