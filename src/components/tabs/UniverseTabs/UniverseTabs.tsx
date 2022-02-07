import React, {FC} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {Text} from 'react-native-elements';

import {Spacing} from '../../../constants';
import useUniverse from '../../../hooks/useUniverse';
// import {universesData} from '../../../store/fake/data';
import SelectionGroup from '../../forms/SelectionGroup';
import Tab from './Tab';

const UniverseTabs: FC = () => {
  const {data, isLoading, error} = useUniverse();

  const onPress = (item: any, index: number) => {
    console.log('clicked ==>', index);
  };

  if (isLoading) {
    return <ActivityIndicator size="small" />;
  }

  if (error) {
    return <Text>Sorry, connection error</Text>;
  }

  return (
    <View style={{marginBottom: Spacing.SCALE_8}}>
      <SelectionGroup
        horizontal
        values={data}
        onPress={onPress}
        CustomComponent={Tab}
      />
    </View>
  );
};

export default UniverseTabs;
