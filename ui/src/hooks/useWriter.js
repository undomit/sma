import axios from 'axios';
import { useMutation } from '@tanstack/react-query';

export const useWriter = (url) => {
    const postFn = (body) => axios.post(url, body);

    return useMutation({mutationFn: postFn})
}