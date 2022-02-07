import React, {FC} from 'react';
import {Alert} from 'react-native';
import styled from 'styled-components/native';
import {Spacing} from '../../../constants';
import ButtonAction from './ButtonAction';

const Reset = ButtonAction;
const Apply = ButtonAction;

const FilterActions: FC = () => {
  const onReset = () => {
    Alert.alert('reset');
  };
  const onApply = () => {
    Alert.alert('apply');
  };

  return (
    <Footer>
      <Reset title="Reset" onPress={onReset} />
      <Apply title="Apply" onPress={onApply} />
    </Footer>
  );
};

export default FilterActions;

const Footer = styled.View`
  flex-direction: row;
  padding: ${Spacing.SCALE_12}px ${Spacing.SCALE_12}px;
`;
