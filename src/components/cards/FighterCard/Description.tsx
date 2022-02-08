import React, {FC, memo} from 'react';
import {Text} from 'react-native-elements';

import {capitalize} from '../../../libraries/lodash';
// import NumberFormat from 'react-number-format';
import styled from 'styled-components/native';
import {Colors, Spacing} from '../../../constants';
import {NumberFormat} from '../../formats';

interface NumberFormatProps {
  value: string | number;
  prefix?: string;
}

interface IDescription {
  label: string;
  description: string | number;
  isPrice?: boolean;
  isNumeric?: boolean;
}

const Description: FC<IDescription> = ({
  label = '',
  description = '',
  isPrice,
  isNumeric,
}) => {
  const descriptionText = capitalize(label);
  return (
    <Container>
      <DescriptionText>{descriptionText}:</DescriptionText>
      {isPrice ? (
        <Price value={description} prefix="$" />
      ) : isNumeric ? (
        <Quantity value={description} />
      ) : (
        <Text>{description}</Text>
      )}
    </Container>
  );
};

const Quantity: FC<NumberFormatProps> = memo(({value = '0', ...rest}) => {
  return (
    <NumberFormat value={value} RenderComponent={QuantityValue} {...rest} />
  );
});

const Price: FC<NumberFormatProps> = memo(({value = '0', ...rest}) => {
  return <NumberFormat value={value} RenderComponent={PriceText} {...rest} />;
});

const Container = styled.View`
  flex-direction: row;
`;

const PriceText = styled(Text)`
  color: ${Colors.SUCCESS};
`;
const QuantityValue = styled(Text)`
  color: ${Colors.BLACK};
`;

const DescriptionText = styled(Text)<{price?: boolean}>`
  margin-right: ${Spacing.SCALE_8}px;
`;

export default memo(Description);
