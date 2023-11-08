import { QueryClient } from '@tanstack/react-query';
import moment from 'moment-timezone';

export const getSettingCacheTime = () => {
  const cacheTime = moment(moment().add(1, 'days').startOf('day')).diff(moment());
  return { cacheTime: cacheTime, staleTime: cacheTime };
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      cacheTime: 0,
    },
  },
});

export default queryClient;
