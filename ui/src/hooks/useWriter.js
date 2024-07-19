import axios from 'axios';
import { useMutation } from '@tanstack/react-query';

export const useWriter = (url, urlEncoded) => {
    const postFn = (body) => axios.post(url, body, {
        headers: {
            'Content-Type': urlEncoded ? 'application/x-www-form-urlencoded' : 'application/json'
        }
    })

    return useMutation({mutationFn: postFn})
}