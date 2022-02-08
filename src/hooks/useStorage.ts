import {useEffect, useState, useCallback} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const {getItem, setItem} = AsyncStorage;

export const getItemFromStorage = async (key: string) => {
  try {
    const item = await getItem(key);
    if (item !== null) {
      return JSON.parse(item);
    }
    return null;
  } catch (e) {
    return Promise.reject(new Error(`get ${key} error ==> ${e}`));
  }
};

export const setItemToStorage = async (key: string, item: string | any) => {
  return setItem(key, JSON.stringify(item));
};

const useStorage = (key: string, initialState?: any) => {
  // const [loaded, setLoaded] = useState<boolean>(false);
  const [data, setData] = useState(initialState);

  useEffect(() => {
    get();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const get = useCallback(async () => {
    const value = await getItemFromStorage(key);
    if (value) {
      setData(value);
    }
    return value;
  }, [key]);

  const set = useCallback(
    async payload => {
      await setItemToStorage(key, payload);
      setData(payload);
    },
    [key],
  );

  return {data, setItem: set, getItem: get};
  // return {data, setItem: set, getItem: get, loaded};
};

export default useStorage;
