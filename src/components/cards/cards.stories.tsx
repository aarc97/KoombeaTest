import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';

import styled from 'styled-components/native';
import {Colors, Spacing} from '../../constants';

import FighterCard from './FighterCard';
import {SafeAreaView} from 'react-native-safe-area-context';

export const status = {
  fighter: {
    objectID: '45380ec4-37f6-41c7-8db8-b4607c215db5',
    name: 'Rosalina & Luma',
    universe: 'Mario',
    price: '444',
    popular: true,
    rate: 4,
    downloads: '15313',
    description: 'Ayla',
    created_at: 'Sat Mar 12 2022 08:26:32 GMT-0500 (-05)',
    imageURL: 'https://myapp.koombea.com/smash/6.png',
  },
};

export const actions = {
  onView: action('ViewDetails'),
};

storiesOf('Cards', module)
  .addDecorator(getStory => <Container>{getStory()}</Container>)
  .add('Fighter Card', () => (
    <FighterCard item={status.fighter} onPress={actions.onView} />
  ));

const Container = styled(SafeAreaView)({
  flex: 1,
  padding: Spacing.SCALE_24,
  backgroundColor: Colors.BACKGROUND_LIGHT,
});
