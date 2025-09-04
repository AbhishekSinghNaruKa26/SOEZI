import React from 'react'
import { useOpen } from '../Context/StateProvider'
import { IoIosSearch } from "react-icons/io";
import { useSearch } from '../Services/SearchProvider';
import { useNavigate } from 'react-router-dom';

const SearchProduct = () => {
    const{open , setOpen} = useOpen();
    const{query , setQuery } = useSearch();
    const{result  ,setResult} = useSearch();
    const navigate  = useNavigate();

  return (
    <>
    <div className='px-6 pt-4 h-screen max-w-[500px]'>

    <div className='flex justify-between  items-center'>
        <div className='text-[12px] text-[#20202599]'>WHAT ARE YOU LOOOKING FOR ?</div>
        <button className='text-xl' onClick={()=>setOpen(!open)}>X</button>
    </div>

    <div className='flex justify-between items-center mt-3 border-b-2 pb-2 border-pink-400'>
        <div className='text-xl'>
            <input type="text"
            placeholder='Search Products...' 
            className='outline-none'
            value={query}
            onChange={(e)=>setQuery(e.target.value)}
            />
             
        </div>
        <div onClick={()=>navigate('/search')} className='text-xl'><IoIosSearch/></div>
       
    </div>

   <div>
    
  {result.map((item) => (
    <div key={item._id}>
      <h3>{item.title}</h3>
      <p>₹{item.price}</p>
      <img src={item.image} alt={item.title} width="100" />
    </div>
  ))}
</div>

    </div>

    
    </>

  )
}

export default SearchProduct