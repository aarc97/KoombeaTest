import React, {FC} from 'react';
import {map} from 'lodash';
import {View} from 'react-native';
import RadioButton from '../RadioButton';
import {IRadioGroupValues} from '../../../proptypes/forms.types';

interface IRadioGroup {
  values: any[];
  onPress: (item: any, i: number) => void;
}

const RadioGroup: FC<IRadioGroup> = ({values = [], onPress}) => {
  const renderItem = (item: IRadioGroupValues, idx: number) => {
    return (
      <RadioButton
        key={`${item.key}`}
        isSelected={item.checked}
        item={item}
        onPress={() => onPress(item, idx)}
      />
    );
  };
  return <View>{map(values, renderItem)}</View>;
};

export default RadioGroup;
