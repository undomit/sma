import { Snackbar, IconButton } from "@mui/material";
import React, {useContext} from "react";
import { SmaContextElement } from "./SmaContext";

export const GlobalError = () => {
    const {error, setError} = useContext(SmaContextElement);

    return (
        <Snackbar
            open={Boolean(error)}
            onClose={() => setError('')}
            message={error}
            autoHideDuration={5000}
            action={
                <IconButton
                    size="small"
                    aria-label="close"
                    color="inherit"
                    onClick={() => setError('')}
                >
                    Close
                </IconButton>
            }
      />
    )
}