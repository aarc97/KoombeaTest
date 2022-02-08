import {map} from 'lodash';
import React, {
  useCallback,
  useState,
  ComponentType,
  FC,
  Dispatch,
  SetStateAction,
} from 'react';
import {ScrollView} from 'react-native';

interface ISelectionGroup {
  values: any[];
  onPress: (
    item: any,
    i: number,
    setIndex: Dispatch<SetStateAction<number>>,
  ) => void;
  CustomComponent: ComponentType<any>;
  horizontal?: boolean;
}

const SelectionGroup: FC<ISelectionGroup> = ({
  values,
  CustomComponent,
  horizontal,
  onPress,
}) => {
  const [currentSelectedIndex, setCurrentSelectedItem] = useState<number>(0);

  const renderItem = useCallback(
    (item: any, idx: number) => {
      const isSelected = currentSelectedIndex === idx;
      const onPressed = () => {
        onPress(item, idx, setCurrentSelectedItem);
        setCurrentSelectedItem(idx);
      };

      return (
        <CustomComponent
          key={`${idx}`}
          isSelected={isSelected}
          item={item}
          onPress={onPressed}
        />
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentSelectedIndex],
  );

  if (!CustomComponent) {
    throw new Error('You must wrap a custom component');
  }

  return (
    <ScrollView horizontal={horizontal}>
      {map(values || [], renderItem)}
    </ScrollView>
  );
};

export default SelectionGroup;
