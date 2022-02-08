import React, {FC, memo} from 'react';
import {Icon} from 'react-native-elements';
import styled from 'styled-components/native';
import {Colors, Spacing} from '../../../constants';

interface IDoneButton {
  onPress: () => void;
}

const DoneButton: FC<IDoneButton> = ({onPress, ...props}) => {
  return (
    <Pressable onPress={onPress} {...props}>
      <Icon name="check" type="ionicon" />
    </Pressable>
  );
};

export default memo(DoneButton);

const Pressable = styled.TouchableOpacity({
  backgroundColor: Colors.WHITE,
  padding: Spacing.SCALE_12,
  borderRadius: 100,
  elevation: 2,
});
