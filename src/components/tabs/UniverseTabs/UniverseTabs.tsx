import React, {FC} from 'react';
import {View} from 'react-native';

import {Spacing} from '../../../constants';
import {universesData} from '../../../store/fake/data';
import SelectionGroup from '../../forms/SelectionGroup';
import Tab from './Tab';

const tabs = [
  {
    description: '',
    name: 'All',
    objectID: 'all',
  },
  ...universesData,
];

const UniverseTabs: FC = () => {
  const onPress = (item: any, index: number) => {
    console.log('clicked ==>', index);
  };

  return (
    <View style={{marginBottom: Spacing.SCALE_8}}>
      <SelectionGroup
        horizontal
        values={tabs}
        onPress={onPress}
        CustomComponent={Tab}
      />
    </View>
  );
};

export default UniverseTabs;
