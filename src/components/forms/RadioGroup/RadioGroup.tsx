import React, {FC} from 'react';
import {View} from 'react-native';
import RadioButton from '../RadioButton';
import SelectionGroup from '../SelectionGroup';

interface IRadioGroup {
  values: any[];
  onPress: (item: any, i: number) => void;
}

const RadioGroup: FC<IRadioGroup> = ({values, onPress}) => {
  return (
    <View>
      <SelectionGroup
        values={values}
        CustomComponent={RadioButton}
        onPress={onPress}
      />
    </View>
  );
};

export default RadioGroup;
