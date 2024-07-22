import axios from 'axios';

export const getDetailsController = async (req, res) => {
    const deviceId = req.params.deviceId;

    try {
        const response = await axios.get(`https://sandbox.smaapis.de/monitoring/v1/devices/${deviceId}`, {
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