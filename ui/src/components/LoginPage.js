import React, {useRef, useContext, useEffect} from "react";
import { Button, Card, CardContent, CardActions, Typography, CircularProgress} from "@mui/material";
import { useWriter } from "../hooks/useWriter";
import { useReader } from "../hooks/useReader";
import { SmaContextElement } from "./SmaContext";
import {css} from '@emotion/css';
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
    const usernameRef = useRef();
    const passwordRef = useRef();
    const {isPending, mutate} = useWriter('http://localhost:3000/login');
    const {data} = useReader('http://localhost:3000/status', {refetchOnMount: 'always'});
    const {setError} = useContext(SmaContextElement);
    const navigate = useNavigate();

    const handleSubmit = () => {
        const data = {
            grant_type: 'client_credentials',
            client_id: usernameRef.current.value,
            client_secret: passwordRef.current.value,
        };

        mutate(data, {
            onError: (error) => setError(error?.error?.error_description ?? 'Unexpected error'),
            onSuccess: () => navigate('/dashboard'),
        });
    }
    
    useEffect(() => {
        if (data?.data?.state === "Accepted")  {
            navigate('/dashboard');
        }
    }, [data, navigate]);

    return (
        <div className={css`display: flex; align-items: center; justify-content: center; height: 100vh`}>
            <Card>
                <CardContent>
                    <Typography variant="h5" sx={{marginBottom: '16px'}}>Enter your SMA credentials</Typography>
                    <form>
                        <div style={{display: 'grid', gap: '8px'}}>
                            <Typography>Username</Typography>
                            <input ref={usernameRef} name="username" />
                            <Typography>Password</Typography>
                            <input ref={passwordRef} name="password" />
                        </div>
                    </form>
                </CardContent>
                <CardActions sx={{padding: '16px', justifyContent: 'space-between'}}>
                    <Button variant="outlined" color="primary" onClick={handleSubmit}>Submit</Button>
                    {isPending && <CircularProgress />}
                </CardActions>
            </Card>
        </div>
    )
}