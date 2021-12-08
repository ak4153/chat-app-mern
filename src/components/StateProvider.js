import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

//component
//arguments are everything that is passeddown from the App.js
export const StateProvider = ({ reducer, initialState, children }) => (
  //context is set by the 'value' prop
  <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        
  </StateContext.Provider>
);
export const useStateValue = () => useContext(StateContext);
