import React, {FC} from 'react';
import styled from 'styled-components/native';
import {Text} from 'react-native-elements';

import {Colors, Spacing, Typography} from '../../constants';
import {NumberFormat} from '../formats';

interface IPrice {
  value: number | string;
}

const Price: FC<IPrice> = ({value}) => {
  return (
    <PriceContainer>
      <NumberFormat prefix="$" value={value} RenderComponent={PriceValue} />
    </PriceContainer>
  );
};

export default Price;

const PriceContainer = styled.View`
  flex-direction: row;
`;

const PriceValue = styled(Text)`
  padding: ${Spacing.SCALE_8}px ${Spacing.SCALE_16}px;
  background-color: ${Colors.PRIMARY};
  border-radius: ${Spacing.SCALE_8}px;
  font-size: ${Spacing.FONT_20}px;
  color: ${Colors.WHITE};
  font-family: ${Typography.FONT_FAMILY_MEDIUM};
`;
