import axios from 'axios';
import {logoutUrl} from '../endpoints.js';
import { clientId, clientSecret, refreshToken } from './loginController.js';

export const logoutController = async (req, res) => {
    try {
        const response = await axios.post(logoutUrl, new URLSearchParams({client_id: clientId, client_secret: clientSecret, refresh_token: refreshToken}).toString(), {
            headers: {
                'Authorization': req.headers['Authorization'],
            }
        });
        
        res.send(response.data);
    } catch (error) {
        res.status(500).send({error});
    }
    
}