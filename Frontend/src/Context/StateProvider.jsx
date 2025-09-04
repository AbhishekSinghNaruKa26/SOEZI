import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { createContext } from 'react'

const StateContext = createContext();

const StateProvider = ({children}) => {

    const[open , setOpen] = useState(false);

  return (
    <>
    <StateContext.Provider value={{open , setOpen}}>
        {children}
    </StateContext.Provider>

    </>
  )
}
export const useOpen = ()=> useContext(StateContext);
export default StateProvider