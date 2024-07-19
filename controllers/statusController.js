import axios from 'axios';
import {consentStatusUrl} from '../endpoints.js';

export const getStatusController = async (req, res) => {
    try {
        const response = await axios.get(consentStatusUrl);

        res.send(response.data);
    } catch (error) {
        const {status, data} = error?.response ?? {};

        res.status(status || 500).send({error: data ?? 'Internal server error'});
    }
}