import React, {FC} from 'react';
import styled from 'styled-components/native';
import {Spacing} from '../../../constants';
import ButtonAction from './ButtonAction';

const Reset = ButtonAction;
const Apply = ButtonAction;

interface IFilterActions {
  onReset: () => void;
  onApply: () => void;
}

const FilterActions: FC<IFilterActions> = ({onReset, onApply}) => {
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
