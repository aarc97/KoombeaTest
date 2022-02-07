import React, {FC, memo} from 'react';
import {StyleSheet} from 'react-native';
import {CheckBox, CheckBoxProps} from 'react-native-elements';
import {Colors, Spacing} from '../../../constants';

const RadioButton: FC<CheckBoxProps & {isSelected: boolean; item: any}> = ({
  isSelected,
  item,
  ...rest
}) => {
  return (
    <CheckBox
      checkedIcon="dot-circle-o"
      uncheckedIcon="circle-o"
      checkedColor={Colors.PRIMARY}
      checked={isSelected}
      title={item.name}
      textStyle={{
        fontSize: Spacing.FONT_16,
      }}
      containerStyle={styles.container}
      {...rest}
    />
  );
};

export default memo(RadioButton);

const styles = StyleSheet.create({
  container: {
    marginVertical: 0,
    backgroundColor: Colors.WHITE,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
});
