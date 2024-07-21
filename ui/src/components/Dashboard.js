import React, {useContext, useState} from 'react';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { css } from '@emotion/css';
import styled from '@emotion/styled';
import { SmaContextElement } from './SmaContext';
import { useReader } from '../hooks/useReader';
import axios from 'axios';

export const Dashboard = () => {
    const {data: plants, refetch: fetchPlants} = useReader('http://localhost:3000/plants', {enabled: false});
    const {setError} = useContext(SmaContextElement);
    const [devices, setDevices] = useState();
    const [details, setDetails] = useState();

    const handleError = (error) => setError(error?.error?.error_description ?? 'Unexpected error');

    const handleGetPlants = (e) => fetchPlants().catch(handleError);

    const handleGetDevices = async (plantId) => {
        try {
            const response = await axios.get(`http://localhost:3000/plants/${plantId}/devices`);
            setDevices(response.data.devices);
        } catch (error) {
            handleError(error);
        }
    };

    const handleGetDetails = async (deviceId) => {
        try {
            const response = await axios.get(`http://localhost:3000/devices/${deviceId}`);
            setDetails(response.data.details);
        } catch (error) {
            handleError(error);
        }
    }

    return (
        <div className={css`display: flex; flex-direction: column; gap: 40px; padding: 20px`}>
            <div className={css`display: flex; justify-content: space-between; align-items: center;`}>
                <h1>Dashboard</h1>
            </div>
            <div className={css`display: grid; grid-template-columns: 250px 1fr 1fr; gap: 50px;`}>
                <div>
                    <Button variant="outlined" color="secondary" onClick={handleGetPlants}>FETCH PLANTS</Button>
                    <CardContainer>
                        {plants?.data?.plants?.map(({plantId, ...props}) => (
                            <Card key={plantId}>
                                <CardContent>
                                    {Object.entries(props).map(([key, value]) => (
                                        <p key={key}>{`${key}: ${value}`}</p>
                                    ))}
                                </CardContent>
                                <CardActions>
                                    <Button variant='primary' onClick={() => handleGetDevices(plantId)}>Get Devices</Button>
                                </CardActions>
                            </Card>
                        ))}
                    </CardContainer>
                </div>
                <div>
                    <Typography variant="h5">Devices</Typography>
                    <CardContainer>
                        {devices?.map(({deviceId, ...props}) => (
                            <Card key={deviceId}>
                                <CardContent>
                                    {Object.entries(props).map(([key, value]) => (
                                        <p key={key}>{`${key}: ${value}`}</p>
                                    ))}
                                </CardContent>
                                <CardActions>
                                    <Button variant='primary' onClick={() => handleGetDetails(deviceId)}>Get Details</Button>
                                </CardActions>
                            </Card>
                        ))}
                    </CardContainer>
                </div>
                <div>
                    <Typography variant="h5">Device Details</Typography>
                    {details && (
                        <CardContainer>
                            <Card>
                                <CardContent>
                                    {(Object.entries(details ?? {})).map(([key, value]) => (
                                        <p key={key}>{`${key}: ${value}`}</p>
                                    ))}
                                </CardContent>
                            </Card>
                        </CardContainer>
                    )}
                </div>
            </div>
        </div>
    )
}

const CardContainer = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`