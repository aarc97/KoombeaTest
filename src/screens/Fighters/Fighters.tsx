import React, {FC} from 'react';
import styled from 'styled-components/native';

import FightersList from '../../components/list/FightersList';
import {UniverseTabs} from '../../components/tabs';
import {Colors, Spacing} from '../../constants';

const Fighters: FC = () => {
  return (
    <Container>
      <UniverseTabs />
      <FightersList />
    </Container>
  );
};

export default Fighters;

const Container = styled.View`
  flex: 1;
  background-color: ${Colors.WHITE};
  padding-top: ${Spacing.SCALE_24}px;
`;
