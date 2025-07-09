import React from 'react';
import { FiArrowLeft } from "react-icons/fi";

const Shape = ({ setActiveSection }) => {
  return (
    <div>
      <div onClick={() => setActiveSection(null)} className='flex items-center pt-7 pl-7 pb-5 cursor-pointer'>
        <FiArrowLeft className='mt-1' />
        <span className='pl-4 font-medium'>Shape</span>
      </div>

      <div className='px-7 pt-4'>

        <div className='Almond  pb-5' > 
          <label>
            <input  className='w-6 h-4 accent-black ' type="checkbox" name="" id=""   />
            <span className='px-2 '> Almond (260)</span>
          </label>
        </div>
        

        <div className='Coffin  pb-5' > 
          <label>
            <input  className='w-6 h-4 accent-black ' type="checkbox" name="" id=""   />
            <span className='px-2 '> Coffin (258)</span>
          </label>
         
        </div>

        <div className='Oval  pb-5' > 
          <label>
            <input  className='w-6 h-4 accent-black ' type="checkbox" name="" id=""   />
            <span className='px-2 '> Oval (260)</span>
          </label>  
        </div>

        <div className='Medium  pb-5' > 
          <label>
            <input  className='w-6 h-4 accent-black ' type="checkbox" name="" id=""   />
            <span className='px-2 '> Medium (1)</span>
          </label>
        </div>


        <div className='Round pb-5' > 
          <label>
            <input  className='w-6 h-4 accent-black ' type="checkbox" name="" id=""   />
            <span className='px-2 '> Round (258)</span>
          </label>

        </div>

        <div className='square  pb-5' > 
          <label>
            <input  className='w-6 h-4 accent-black ' type="checkbox" name="" id=""   />
            <span className='px-2 '> Square (271)</span>
          </label>
        </div>

        <div className='Stiletto  pb-5' > 
          <label>
            <input  className='w-6 h-4 accent-black ' type="checkbox" name="" id=""   />
            <span className='px-2 '> Stiletto (258)</span>
          </label>
        </div>

      </div>

       <div className='buttons border-t-1 pt-2 border-gray-300 flex justify-between absolute gap-8 bottom-5 px-8'>
        <div><button className='pt-3 px-1 text-gray-500 '>Clear all </button><hr className='text-gray-500  ' /></div>
        <div className='py-3 px-8 bg-pink-400 text-[#ffffff]  rounded tracking-widest'><button>APPLY</button></div>
       </div>

    </div>
  );
};

export default Shape;
