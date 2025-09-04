import React from 'react'
import { IoIosSearch } from "react-icons/io";
const SearchComponet = () => {

  return (
    <>

    <div>
        <div>
            <h1 className='heading text-3xl font-bold flex justify-center mt-4 tracking-widest'>Search Results</h1>
        </div>

        <div className='flex justify-center mt-6'>
        <div className='flex justify-between  w-1/2 min-w-[260px] border-2 border-pink-400'>

             <input type="text"
            placeholder='Search'
            className='h-[48px] w-full px-2 '
            
            />
            <div className='text-2xl px-4 flex  items-center'><IoIosSearch/></div>

           
        </div>
        </div>

    </div>


    </>
  )
}

export default SearchComponet