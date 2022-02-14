import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/core';
import {
  FlatList,
  ListRenderItemInfo,
  RefreshControl,
  StyleSheet,
} from 'react-native';
import {mutate} from 'swr';

import useFighters from '../../../hooks/useFighters';
import {IFighter} from '../../../proptypes/fighter.types';
import {FighterCard} from '../../cards';
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

  const handleNavigation = useCallback((item: IFighter) => {
    navigate('Details', {details: item});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderItem = ({item}: ListRenderItemInfo<IFighter>) => {
    return (
      <FighterCard
        key={item.objectID}
        item={item}
        onPress={() => handleNavigation(item)}
      />
    );
  };

  const keyExtractor = (props: any) => `${props.objectID}${props.name}`;

  const onRefresh = async () => {
    await mutate(UNIVERSE_API);
    mutateFighters();
  };

  if (isValidating) {
    return <LoadingData label="Updating data..." />;
  }

  if (error) {
    return <ConnectionError />;
  }

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
      }
      ListEmptyComponent={<EmptyData />}
      contentContainerStyle={styles.list}
    />
  );
};

export default FightersList;

const styles = StyleSheet.create({
  list: {
    flexGrow: 1,
  },
});
