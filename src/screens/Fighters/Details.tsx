import React, {FC} from 'react';

import styled from 'styled-components/native';
import {Colors, Spacing} from '../../constants';

import DetailsInfo from '../../components/DetailsInfo';

const Details: FC = () => {
  return (
    <Container>
      <DetailsInfo />
    </Container>
  );
};

export default Details;

const Container = styled.View`
  flex: 1;
  padding: ${Spacing.SCALE_16}px;
  background-color: ${Colors.WHITE};
`;
