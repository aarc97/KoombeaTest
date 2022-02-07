import React, {useMemo} from 'react';
import {useRoute} from '@react-navigation/core';

import {DetailsScreenRouteProp} from '../../navigations/stacks/main.stack';
import Rating from './Rating';
import Price from './Price';
import {Main, Left, Right, Name, Universe, Avatar, Description} from './styles';

const DetailsInfo = () => {
  const {params} = useRoute<DetailsScreenRouteProp>();
  const details = useMemo(() => params.details, [params.details]);

  const {name, universe, downloads, imageURL, description, price, rate} =
    details;

  return (
    <>
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
    </>
  );
};

export default DetailsInfo;
