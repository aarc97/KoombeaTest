import React, {FC, memo} from 'react';
import {Text, ViewStyle} from 'react-native';
import styled from 'styled-components/native';

import {Colors, Spacing, Typography} from '../../../constants';

interface IGroup {
  children: React.ReactNode;
  header: string;
  style?: ViewStyle;
}

const GroupContainer: FC<IGroup> = ({
  children,
  header = '',
  style,
  ...rest
}) => {
  return (
    <Container style={style} {...rest}>
      <Header>{header}</Header>
      {children}
    </Container>
  );
};

export default memo(GroupContainer);

const Container = styled.View`
  padding: ${Spacing.SCALE_16}px;
  background-color: ${Colors.WHITE};
  elevation: 2;
`;

const Header = styled(Text)`
  color: ${Colors.GRAY};
  font-family: ${Typography.FONT_MEDIUM.fontFamily};
  margin-bottom: ${Spacing.SCALE_12}px;
`;
