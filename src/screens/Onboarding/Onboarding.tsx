import {useNavigation} from '@react-navigation/core';
import React, {FC} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

import Walkthrough from 'react-native-onboarding-swiper';
import {Colors, Spacing} from '../../constants';

const DoneButton: FC = props => {
  return (
    <TouchableOpacity
      {...props}
      style={{
        backgroundColor: Colors.WHITE,
        padding: Spacing.SCALE_12,
        borderRadius: 100,
        elevation: 2,
      }}>
      <Icon name="check" />
    </TouchableOpacity>
  );
};

const Onboarding: FC = () => {
  const {navigate} = useNavigation();
  return (
    <>
      <Walkthrough
        bottomBarColor={Colors.PRIMARY}
        DoneButtonComponent={DoneButton}
        onDone={() => navigate('Fighters')}
        pages={[
          {
            backgroundColor: Colors.PRIMARY,
            image: <Image source={require('../../../assets/png/lucas.png')} />,
            title: '',
            subtitle: 'Access our Extended Catalog',
          },
          {
            backgroundColor: Colors.PRIMARY,
            image: <Image source={require('../../../assets/png/sonic.png')} />,
            title: '',
            subtitle: 'Filter Fighters',
          },
          {
            backgroundColor: Colors.PRIMARY,
            image: <Image source={require('../../../assets/png/mario.png')} />,
            title: '',
            subtitle: 'And More...',
          },
        ]}
      />
    </>
  );
};

export default Onboarding;
