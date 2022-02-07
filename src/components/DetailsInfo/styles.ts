import styled from 'styled-components/native';
import {Colors, Spacing} from '../../constants';
import {Text} from 'react-native-elements';
import FastImage from 'react-native-fast-image';

const Container = styled.View`
  flex: 1;
  padding: ${Spacing.SCALE_24}px ${Spacing.SCALE_16}px;
  background-color: ${Colors.WHITE};
`;

const Avatar = styled(FastImage)`
  width: 160px;
  height: 160px;
`;

const Name = styled(Text)``;
const Universe = styled(Text)``;

const Main = styled.View`
  flex-direction: row;
  align-items: center;
`;
const Right = styled.View``;
const Left = styled.View`
  flex: 1;
`;

const Description = styled(Text)`
  line-height: ${Spacing.SCALE_24}px;
  margin-top: ${Spacing.SCALE_32}px;
`;

export {Avatar, Container, Name, Universe, Right, Left, Main, Description};
