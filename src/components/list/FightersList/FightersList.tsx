import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/core';
import {isEmpty} from 'lodash';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItemInfo,
  RefreshControl,
} from 'react-native';

import useFighters from '../../../hooks/useFighters';
import {IFighter} from '../../../proptypes/fighter.types';
import {FighterCard} from '../../cards';
import {mutate} from 'swr';
import {UNIVERSE_API} from '../../../constants/api.constants';
import LoadingData from '../../../containers/LoadingData';
import ConnectionError from '../../../containers/ConnectionError';
import EmptyData from '../../../containers/EmptyData';

const FightersList = () => {
  const {navigate} = useNavigation<any>();
  const {
    data,
    error,
    isLoading,
    isValidating,
    mutate: mutateFighters,
  } = useFighters();

  const renderItem = useCallback(({item}: ListRenderItemInfo<IFighter>) => {
    const handleNavigation = () => navigate('Details', {details: item});
    return (
      <FighterCard key={item.objectID} item={item} onPress={handleNavigation} />
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const keyExtractor = (props: any) => `${props.objectID}${props.name}`;

  const onRefresh = async () => {
    await mutate(UNIVERSE_API);
    mutateFighters();
  };

  if (isValidating) {
    return <LoadingData label="Updating data..." />;
  }

  if (isLoading) {
    return <ActivityIndicator size="small" />;
  }

  if (error) {
    return <ConnectionError />;
  }

  if (isEmpty(data)) {
    return <EmptyData />;
  }

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
      }
    />
  );
};

export default FightersList;
