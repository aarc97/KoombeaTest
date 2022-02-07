import React, {FC, memo, useMemo} from 'react';

import {useRoute} from '@react-navigation/core';

import {DetailsScreenRouteProp} from '../../navigations/stacks/main.stack';
import styled from 'styled-components/native';
import {Colors, Spacing, Typography} from '../../constants';
import {AirbnbRating, Text} from 'react-native-elements';
import FastImage from 'react-native-fast-image';
import {NumberFormat} from '../../components/formats';

const Details: FC = () => {
  const {params} = useRoute<DetailsScreenRouteProp>();

  const details = useMemo(() => params.details, [params.details]);
  const {name, universe, downloads, imageURL, description, price, rate} =
    details;

  return (
    <Container>
      <Main>
        <Left>
          <Name h3>{name}</Name>
          <Universe>{universe}</Universe>
          <Rating downloads={downloads} rate={rate} />
          <Price value={price} />
        </Left>
        <Right>
          <Avatar source={{uri: imageURL}} />
        </Right>
      </Main>
      <Description>{description}</Description>
    </Container>
  );
};

export default Details;

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

const Price = memo(({value}: {value: number | string}) => {
  return (
    <PriceContainer>
      <NumberFormat prefix="$" value={value} RenderComponent={PriceValue} />
    </PriceContainer>
  );
});

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

const Rating: FC<{downloads: string; rate: number}> = memo(
  ({downloads, rate}) => {
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
  },
);

const RatingLabel = styled(Text)`
  margin-left: ${Spacing.SCALE_8}px;
`;
const RatingContainer = styled.View`
  align-items: flex-start;
  margin: ${Spacing.SCALE_24}px -${Spacing.SCALE_8}px;
`;

const Description = styled(Text)`
  line-height: ${Spacing.SCALE_24}px;
  margin-top: ${Spacing.SCALE_32}px;
`;
