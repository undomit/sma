import axios from 'axios';
import {tokenRequestUrl, authorizeUrl, consentUrl} from '../endpoints.js';

let SMA_TOKEN;
export let clientId;
export let clientSecret;
export let refreshToken;

export const loginController = async (req, res) => {
    try {
        const tokenResponse = await axios.post(tokenRequestUrl, new URLSearchParams(req.body).toString(), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        });
        console.log(tokenResponse);

        const accessToken = tokenResponse.data.access_token;

        SMA_TOKEN = accessToken;
        clientId = req.body.client_id;
        clientSecret = req.body.client_secret;
        refreshToken = tokenResponse.data.refresh_token;

        const authResponse = await axios.post(authorizeUrl, {loginHint: 'apiTestUser@apiSandbox.com'}, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            }
        });

        res.json(authResponse.data);
    } catch (error) {
        console.log(error);
        const {status, data} = error?.response ?? {};

        res.status(status || 500).send({error: data ?? 'Internal server error'});
    }
}

export const addAuthToken = (req, res, next) => {
    console.log(SMA_TOKEN);

    if (SMA_TOKEN) {
        req.headers['Authorization'] = `Bearer ${SMA_TOKEN}`;
    }

    next();
}