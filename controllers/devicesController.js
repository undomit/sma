import axios from 'axios';

export const getDevicesController = async (req, res) => {
    const plantId = req.params.plantId;

    try {
        const response = await axios.get(`https://sandbox.smaapis.de/monitoring/v1/plants/${plantId}/devices`, {
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