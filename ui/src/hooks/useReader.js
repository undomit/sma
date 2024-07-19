import axios from 'axios';
import {useQuery} from '@tanstack/react-query';

export const useReader = (url) => {
    const getFn = () => axios.get(url);

    return useQuery({
        queryKey: [url],
        queryFn: getFn,
    });
}