import React, {useCallback, FC} from 'react';
import {map} from 'lodash';
import {ScrollView} from 'react-native';
import RadioButton from '../RadioButton';
import {IRadioGroupValues} from '../../../proptypes/forms.types';

interface IRadioGroup {
  values: any[];
  onPress: (item: any, i: number) => void;
}

const RadioGroup: FC<IRadioGroup> = ({values, onPress}) => {
  const renderItem = useCallback(
    (item: IRadioGroupValues, idx: number) => {
      const onPressed = () => {
        onPress(item, idx);
      };

      return (
        <RadioButton
          key={`${idx}`}
          isSelected={item.checked}
          item={item}
          onPress={onPressed}
        />
      );
    },
    [onPress],
  );

  return <ScrollView>{map(values || [], renderItem)}</ScrollView>;
};

export default RadioGroup;
