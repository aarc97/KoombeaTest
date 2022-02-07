import React, {FC, memo} from 'react';
import {} from 'react-native';
import {Text} from 'react-native-elements';
import styled from 'styled-components/native';

import {Spacing, Colors, Typography} from '../../../../constants';

interface ITabs {
  item: {
    objectID: string;
    name: string;
  };
  isSelected: boolean;
  onPress: () => void;
}

const Tab: FC<ITabs> = ({item, isSelected, onPress}) => {
  return (
    <TabContainer isSelected={isSelected} onPress={onPress}>
      <TabLabel isSelected={isSelected}>{item?.name}</TabLabel>
    </TabContainer>
  );
};

export default memo(Tab);

const TabContainer = styled.TouchableOpacity<{isSelected: boolean}>`
  background-color: ${({isSelected}) =>
    isSelected ? Colors.SELECTED : Colors.GRAY_LIGHT};
  border-radius: ${Spacing.SCALE_8 / 2}px;
  padding: ${Spacing.SCALE_8 / 2}px ${Spacing.SCALE_8}px;
  margin: 0 ${Spacing.SCALE_8 / 2}px;
  align-self: flex-start;
`;

const TabLabel = styled(Text)<{isSelected: boolean}>`
  color: ${({isSelected}) => (isSelected ? Colors.WHITE : Colors.BLACK)};
  font-family: ${Typography.FONT_FAMILY_MEDIUM};
`;
