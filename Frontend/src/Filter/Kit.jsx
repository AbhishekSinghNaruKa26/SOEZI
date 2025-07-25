import React from "react";
import { FiArrowLeft } from "react-icons/fi";

 const Kit = ({ activeSection, setActiveSection }) => {
  return (
    <div>
      <div value={activeSection} onClick={() => setActiveSection(null)}  className="flex items-center pt-7 pl-7 pb-5 cursor-pointer"><FiArrowLeft className="mt-1" /><span className="pl-4 font-medium">Kit</span>
      </div>
      
      <div className="pt-5 px-5">

         <div className='Application Kit  pb-5' > 
          <label>
            <input  className='w-6 h-4 accent-black ' type="checkbox" name="" id=""   />
            <span className='px-2 '> Application Kit  (283)</span>
          </label>
         
        </div>

         <div className='Ready To Weat Kit  pb-5' > 
          <label>
            <input  className='w-6 h-4 accent-black ' type="checkbox" name="" id=""   />
            <span className='px-2 '> Ready To Wear kit (283)</span>
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
export default Kit;
