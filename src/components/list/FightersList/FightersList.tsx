import {useNavigation} from '@react-navigation/core';
import {isEmpty} from 'lodash';
import React, {useCallback} from 'react';
import {ActivityIndicator, FlatList, ListRenderItemInfo} from 'react-native';
import {Text} from 'react-native-elements';
import useFighters from '../../../hooks/useFighters';
import {IFighter} from '../../../proptypes/fighter.types';
import {FighterCard} from '../../cards';

const FightersList = () => {
  const {navigate} = useNavigation();
  const {data, error, isLoading} = useFighters();

  const renderItem = useCallback(({item}: ListRenderItemInfo<IFighter>) => {
    const handleNavigation = () => navigate('Details', {details: item});
    return (
      <FighterCard key={item.objectID} item={item} onPress={handleNavigation} />
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const keyExtractor = (props: any) => `${props.objectID}${props.name}`;

  if (isLoading) {
    return <ActivityIndicator size="small" />;
  }

  if (error) {
    return <Text>Sorry, connection error</Text>;
  }

  if (isEmpty(data)) {
    return <Text>No values found</Text>;
  }

  return (
    <FlatList data={data} renderItem={renderItem} keyExtractor={keyExtractor} />
  );
};

export default FightersList;
