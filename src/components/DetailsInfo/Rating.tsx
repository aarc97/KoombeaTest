import React, {FC, memo} from 'react';

import styled from 'styled-components/native';
import {AirbnbRating, Text} from 'react-native-elements';

import {Colors, Spacing} from '../../constants';

interface IRating {
  downloads: string;
  rate: number;
}

const Rating: FC<IRating> = ({downloads, rate}) => {
  return (
    <RatingContainer>
      <AirbnbRating
        showRating={false}
        selectedColor={Colors.ORANGE}
        count={5}
        defaultRating={rate}
        size={Spacing.SCALE_24}
      />
      <RatingLabel>Downloads: {downloads}</RatingLabel>
    </RatingContainer>
  );
};

export default memo(Rating);

const RatingLabel = styled(Text)`
  margin-left: ${Spacing.SCALE_8}px;
`;
const RatingContainer = styled.View`
  align-items: flex-start;
  margin: ${Spacing.SCALE_24}px -${Spacing.SCALE_8}px;
`;
