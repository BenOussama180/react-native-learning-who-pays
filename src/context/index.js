import { createContext, useState } from "react";

const Context = createContext();

const Provider = ({ children }) => {
  const [initialState, setInitialState] = useState({
    stage: 1,
    players: [],
    result: "",
  });
  addPlayerHandler = (playerName) => {
    setInitialState({
      ...initialState,
      players: [...initialState.players, playerName],
    });
  };
  deletePlayerHandler = (playerName) => {
    setInitialState({
      ...initialState,
      players: initialState.players.filter((player) => player !== playerName),
    });
  };
  pickLoserHandler = () => {
    let randomIndex = Math.floor(Math.random() * initialState.players.length);
    setInitialState({
      ...initialState,
      result: initialState.players[randomIndex],
      stage: 2,
    });
  };

  return (
    <>
      <Context.Provider
        value={{
          state: initialState,
          addPlayer: addPlayerHandler,
          deletePlayer: deletePlayerHandler,
          pickLoser: pickLoserHandler,
        }}
      >
        {children}
      </Context.Provider>
    </>
  );
};

export { Context, Provider };
