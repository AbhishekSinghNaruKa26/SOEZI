import React from 'react';
import { createContext } from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';



const SearchContext = createContext();


const SearchProvider = ({children}) => {
    const[query , setQuery] = useState("");
    const[result , setResult] = useState([]);
    
    useEffect(()=>{
        const delayBounce = setTimeout(async() => {

            if(query.trim() !== ""){
               const res = await axios.get(`http://localhost:8080/api/search?q=${query}`)
               console.log("Data :" , res.data);
               setResult(res.data.product)
            }
            else{
                setResult([]);
            }
        }, 300);
        return () => clearTimeout(delayBounce);
    },[query])



    
  return (
    <>
    <SearchContext.Provider value={{query , setQuery , result  , setResult}}>
        {children}
    </SearchContext.Provider>
    </>
  )
}

export const useSearch = ()=> useContext(SearchContext);
export default SearchProvider