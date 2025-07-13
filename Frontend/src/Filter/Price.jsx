import React, { useState } from 'react';
import {Range ,getTrackBackground} from 'react-range';
import { FiArrowLeft } from "react-icons/fi";

 const Price = ({activeSection,setActiveSection}) => {
     const [values, setValues] =useState([0, 2199]); // [min, max]
      const STEP = 50;
      const MIN = 0;
      const MAX = 2199;
    
  return (
    <div>
         <div  value={activeSection} onClick={()=>setActiveSection(null)} className='flex pt-7 pl-7 pb-5'><FiArrowLeft className='mt-1'/><span className='pl-4 font-[500]'>Price</span></div>

        <div className='pl-7 font-[500]'>The highest price is Rs.2199</div>

        <div className='slider mt-3'>
        <div className='px-6'>
        <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        onChange={(vals) => setValues(vals)}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            className="h-1 w-full rounded bg-gray-300 my-6"
            style={{
              background: getTrackBackground({
                values,
                colors: ["#d1d5db", "#000000", "#d1d5db"],
                min: MIN,
                max: MAX,
              }),
            }}
          >
           {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            className="h-5 w-5 bg-white rounded-full shadow-md border-2 border-black"
          />
        )}
      />

    </div>
   </div>

        <div className='px-4 mt-5 flex justify-between'>
          <div>
            <span> ₹</span>
             <span className='pl-2'><input className='border-1 border-pink-500 h-12 w-27 pl-4 rounded' type="text" min={0} max={2199} value={values[0]}  /></span>
          </div>
          
           <div>
            <span> ₹</span>
             <span className='pl-2'><input className='border-1 border-pink-500 h-12 w-27 pl-4 rounded' type="text" min={0} max={2199} value={values[1]}   /></span>
          </div>
        </div>

        <div className='buttons border-t-1 pt-2 border-gray-300 flex justify-between absolute gap-8 bottom-5 px-8'>
          <div><button className='pt-3 px-1 text-gray-500 '>Clear all </button><hr className='text-gray-500  ' /></div>
          <div className='py-3 px-8 bg-pink-400 text-[#ffffff]  rounded tracking-widest'><button>APPLY</button></div>
         </div>
    </div>
  )
}
export default  Price ;
