import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {IFighter} from '../../../proptypes/fighter.types';
import {FighterCard} from '../../cards';

const info = {
  objectID: '45380ec4-37f6-41c7-8db8-b4607c215db5',
  name: 'Rosalina & Luma',
  universe: 'Mario',
  price: '444',
  popular: true,
  rate: 4,
  downloads: '15313',
  description:
    'Piranha Plant (パックンフラワー, Packun Flower) is a playable character in Super Smash Bros. Ultimate. Revealed alongside Ken and Incineroar on November 1st, 2018, it is the first DLC character in Ultimate, and was made available for purchase on February 1st, 2019. However, it was made available at no cost as early as January 29th, 2019 for players who purchased the digital version of Ultimate or registered their physical version with My Nintendo by January 31st, 2019. Piranha Plant is not part of either Fighters Pass, making it the only DLC character with this distinction. Piranha Plant is classified as Fighter #70.',
  created_at: 'Sat Mar 12 2022 08:26:32 GMT-0500 (-05)',
  imageURL: 'https://myapp.koombea.com/smash/6.png',
};

const info2 = {
  objectID: '55680ec4-37f6-41c7-8db8-b4607c215db5',
  name: 'Rosalina & Luma',
  universe: 'Mario',
  price: '444',
  popular: true,
  rate: 4,
  downloads: '15313',
  description:
    'Piranha Plant (パックンフラワー, Packun Flower) is a playable character in Super Smash Bros. Ultimate. Revealed alongside Ken and Incineroar on November 1st, 2018, it is the first DLC character in Ultimate, and was made available for purchase on February 1st, 2019. However, it was made available at no cost as early as January 29th, 2019 for players who purchased the digital version of Ultimate or registered their physical version with My Nintendo by January 31st, 2019. Piranha Plant is not part of either Fighters Pass, making it the only DLC character with this distinction. Piranha Plant is classified as Fighter #70.',
  created_at: 'Sat Mar 12 2022 08:26:32 GMT-0500 (-05)',
  imageURL: 'https://myapp.koombea.com/smash/6.png',
};

const FightersList = () => {
  const {navigate} = useNavigation();

  const DATA = [info, info2];

  const renderItem = ({item}: ListRenderItemInfo<IFighter>) => {
    const handleNavigation = () => navigate('Details', {details: item});
    return (
      <>
        <FighterCard
          key={item.objectID}
          item={item}
          onPress={handleNavigation}
        />
      </>
    );
  };

  const keyExtractor = (props: any) => props.objectID;

  return (
    <FlatList data={DATA} renderItem={renderItem} keyExtractor={keyExtractor} />
  );
};

export default FightersList;
