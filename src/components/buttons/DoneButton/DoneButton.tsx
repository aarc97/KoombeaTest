import React, {FC, memo} from 'react';
import styled from 'styled-components/native';
import {Colors, Spacing} from '../../../constants';

import Icon from 'react-native-vector-icons/Ionicons';

interface IDoneButton {
  onPress: () => void;
}

const DoneButton: FC<IDoneButton> = ({onPress, ...props}) => {
  return (
    <Pressable onPress={onPress} {...props}>
      <Icon name="check" size={Spacing.SCALE_24} color={Colors.PRIMARY} />
    </Pressable>
  );
};

export default memo(DoneButton);

const Pressable = styled.TouchableOpacity({
  backgroundColor: Colors.WHITE,
  padding: Spacing.SCALE_12,
  borderRadius: 100,
  //   elevation: 2,
});
