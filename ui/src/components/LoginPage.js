import React, {useRef, useContext, useEffect} from "react";
import { Button} from "@mui/material";
import { useWriter } from "../hooks/useWriter";
import { useReader } from "../hooks/useReader";
import { SmaContextElement } from "./SmaContext";
import {css} from '@emotion/css';
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
    const usernameRef = useRef();
    const passwordRef = useRef();
    const {isPending, mutate} = useWriter('http://localhost:3000/login');
    const {data} = useReader('http://localhost:3000/status');
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
            onSuccess: (data) => {console.log(data); navigate('/dashboard')},
        });
    }
    
    useEffect(() => {
        console.log(data);
        if (data?.state === "Accepted")  {
            navigate('/dashboard');
        }
    }, [data]);

    return (
        <div className={css`width: 300px;`}>
            <p>Enter your SMA credentials</p>
            <form>
                <div style={{display: 'grid', gap: '8px'}}>
                    <label>Username</label>
                    <input ref={usernameRef} name="username" />
                    <label>Password</label>
                    <input ref={passwordRef} name="password" />
                </div>
            </form>
            {isPending && <p>Loading...</p>}

            <Button variant="primary" onClick={handleSubmit}>Submit</Button>
        </div>
    )
}