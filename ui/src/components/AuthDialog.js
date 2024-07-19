import React, {useRef, useContext} from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { useWriter } from "../hooks/useWriter";
import { tokenRequestUrl } from "../endpoints";
import { SmaContextElement } from "./SmaContext";
import { css } from "@emotion/react";

export const AuthDialog = ({open, onClose}) => {
    const usernameRef = useRef();
    const passwordRef = useRef();
    const {isPending, mutate} = useWriter(tokenRequestUrl, true);
    const {setError} = useContext(SmaContextElement);

    const handleSubmit = (event) => {
        const data = {
            grant_type: 'client_credentials',
            client_id: usernameRef.current.value,
            client_secret: passwordRef.current.value,
        };

        const urlEncodedData = new URLSearchParams(data).toString();
        mutate(urlEncodedData, {
            
            onError: (error) => setError(error.response.data.error_description ?? 'Unexpected error'),
            onSuccess: (data) => {console.log(data); onClose()},
        });
    }

    return (
        <Dialog open={open}>
            <DialogTitle>Enter your SMA credentials</DialogTitle>
            <DialogContent>
                <form>
                    <div style={{display: 'grid', gap: '8px'}}>
                        <label>Username</label>
                        <input ref={usernameRef} name="username" />
                        <label>Password</label>
                        <input ref={passwordRef} name="password" />
                    </div>
                </form>
                {isPending && <p>Loading...</p>}
            </DialogContent>
            <DialogActions>
                <Button onClick={() => onClose()} variant="secondary">Cancel</Button>
                <Button variant="primary" onClick={handleSubmit}>Submit</Button>
            </DialogActions>
        </Dialog>
    )
}