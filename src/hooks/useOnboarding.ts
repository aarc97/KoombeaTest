import {useCallback, useEffect} from 'react';
import {IS_FIRST_TIME} from '../constants/api.constants';
import useStore from '../store';
import useStorage from './useStorage';

const useOnboarding = () => {
  const {getItem, setItem} = useStorage(IS_FIRST_TIME);

  const isFirstTime = useStore(state => state.isFirstTime);
  const handleFirstTime = useStore(state => state.handleFirstTime);

  const updateValue = useCallback(async () => {
    const info = await getItem();
    handleFirstTime(!!info);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    updateValue();
  }, [updateValue]);

  return {isFirstTime, setItem};
};

export default useOnboarding;
