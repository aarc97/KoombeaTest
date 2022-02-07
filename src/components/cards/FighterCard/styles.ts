import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';
import {Text} from 'react-native-elements';

import {Spacing, Colors} from '../../../constants';
import {FONT_BOLD} from '../../../constants/typography';

const Card = styled.TouchableOpacity`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  background-color: ${Colors.WHITE};
  padding: ${Spacing.SCALE_12}px;
  border-bottom-color: ${Colors.GRAY_LIGHT};
  border-bottom-width: 1px;
`;

const Left = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

const Main = styled.View`
  margin-left: ${Spacing.SCALE_12}px;
`;

const Right = styled.View`
  align-items: flex-end;
`;

const Image = styled(FastImage)`
  width: 75px;
  height: 75px;
`;

const Title = styled(Text)`
  font-size: ${Spacing.FONT_16}px;
  font-family: ${FONT_BOLD.fontFamily};
`;
const FeaturedSubtitle = styled(Text)``;

export {Card, Left, Main, Image, Right, Title, FeaturedSubtitle};
