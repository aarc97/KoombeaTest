import React, {FC} from 'react';
import FastImage from 'react-native-fast-image';

import {
  Card,
  Left,
  Right,
  Image,
  Title,
  FeaturedSubtitle,
  Main,
} from './styles';
import Description from './Description';
import {IFighterCard} from '../../../proptypes/fighter.types';

const FighterCard: FC<IFighterCard> = ({item, onPress, ...rest}) => {
  const {name, price, rate, universe, imageURL, downloads} = item;

  return (
    <Card {...rest} onPress={onPress}>
      <Left>
        <Image
          source={{
            uri: imageURL,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
        <Main>
          <Title>{name}</Title>
          <FeaturedSubtitle>{universe}</FeaturedSubtitle>
        </Main>
      </Left>
      <Right>
        <Description isPrice label="Price" description={price} />
        <Description label="Rate" description={rate} />
        <Description label="Downloads" description={downloads} />
      </Right>
    </Card>
  );
};

export default FighterCard;
