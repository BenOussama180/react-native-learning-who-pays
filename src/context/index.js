import React from "react";

const initialState = {
    stage: 1,
    players: [],
    result: "",
};

const Context = React.createContext();

const Provider = ({ children }) => {
    return (
        <>
            <Context.Provider value={initialState}>{children}</Context.Provider>
        </>
    );
};

export { Context, Provider };
