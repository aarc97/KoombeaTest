import React, {FC, memo} from 'react';
import {Button, ButtonProps} from 'react-native-elements';
import styled from 'styled-components/native';
import {Spacing, Colors} from '../../../constants';

interface ButtonAction {
  onPress: () => void;
}

const ButtonAction: FC<ButtonProps | any> = ({onPress, ...rest}) => {
  return (
    <Container>
      <CustomButton title="Apply" type="outline" onPress={onPress} {...rest} />
    </Container>
  );
};

export default memo(ButtonAction);

const Container = styled.View`
  flex: 1;
  padding: 0 ${Spacing.SCALE_8 / 2}px;
`;

const CustomButton = styled(Button).attrs(() => ({
  buttonStyle: {
    backgroundColor: Colors.WHITE,
    borderWidth: 0,
    borderRadius: Spacing.SCALE_8,
  },
  titleStyle: {
    fontSize: Spacing.FONT_20,
    color: Colors.BLACK,
  },
}))``;
