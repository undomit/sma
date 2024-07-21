import axios from 'axios';
import {plantsUrl} from '../endpoints.js';

export const getPlantsController = async (req, res) => {
    try {
        const response = await axios.get(plantsUrl, {
            headers: {
                'Authorization': req.headers['Authorization'],
            }
        });

        res.send(response.data);
    } catch (error) {
        const {status, data} = error?.response ?? {};

        res.status(status || 500).send({error: data ?? 'Internal server error'});
    }
}