import React, {FC} from 'react';
import {Image} from 'react-native';

import Walkthrough from 'react-native-onboarding-swiper';
import DoneButton from '../../components/buttons/DoneButton/DoneButton';
import {Colors} from '../../constants';
import useOnboarding from '../../hooks/useOnboarding';
import useStore from '../../store';

const Onboarding: FC = () => {
  const {setItem} = useOnboarding();
  const handleFirstTime = useStore(state => state.handleFirstTime);

  const UpdateFirstTime = async () => {
    await setItem(false);
    handleFirstTime(false);
  };

  return (
    <>
      <Walkthrough
        bottomBarColor={Colors.PRIMARY}
        DoneButtonComponent={DoneButton}
        onDone={UpdateFirstTime}
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
