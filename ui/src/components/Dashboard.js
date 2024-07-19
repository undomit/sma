import React from 'react';
import { Button } from '@mui/material';
import { useWriter } from '../hooks/useWriter';
import { useNavigate } from 'react-router-dom';

export const Dashboard = () => {
    const {mutateAsync} = useWriter('http://localhost:3000/logout');
    const navigate = useNavigate();

    const handleLogout = async () => {
        const response = await mutateAsync();

        if (response.status === 200) {
            navigate('/');
        }
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <Button variant="primary" onClick={handleLogout}>Logout</Button>
        </div>
    )
}