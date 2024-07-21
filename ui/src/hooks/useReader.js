import axios from 'axios';
import {useQuery} from '@tanstack/react-query';

export const useReader = (url, options) => {
    const getFn = () => axios.get(url);

    return useQuery({
        queryKey: [url],
        queryFn: getFn,
        staleTime: 1000 * 60 * 5,  // 5 minutes
        cacheTime: 1000 * 60 * 10, // 10 minutes
        retry: false,
        ...options,
    });
}