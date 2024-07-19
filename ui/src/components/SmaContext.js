import React, {createContext, useState} from "react";

export const SmaContextElement = createContext({
    error: '',
    setError: () => {},
})

export const SmaContext = ({children}) => {
    const [error, setError] = useState();

    return (
        <SmaContextElement.Provider value={{error, setError}}>
            {children}
        </SmaContextElement.Provider>
    )
}