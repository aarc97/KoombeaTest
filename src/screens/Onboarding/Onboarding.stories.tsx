import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';

import styled from 'styled-components/native';
import {Colors, Spacing} from '../../constants';
import Onboarding from './Onboarding';

export const status = {};

export const actions = {
  onView: action('OnView'),
};

storiesOf('Cards', module)
  .addDecorator(getStory => <Container>{getStory()}</Container>)
  .add('Onboarding', () => <Onboarding />);

const Container = styled.View({
  flex: 1,
  padding: Spacing.SCALE_24,
  backgroundColor: Colors.BACKGROUND_LIGHT,
});
