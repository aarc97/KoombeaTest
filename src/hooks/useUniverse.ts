import axios from 'axios';

import useSWR from 'swr';
import {UNIVERSE_API} from '../constants/api.constants';

const fetcher = (url: string) => axios.get(url).then(res => res.data);

const useUniverse = () => {
  const {data, error} = useSWR(UNIVERSE_API, fetcher);
  return {
    data: [{objectID: 'all', name: 'All', description: 'all'}, ...data],
    error,
    isLoading: !error && !data,
  };
};

export default useUniverse;
