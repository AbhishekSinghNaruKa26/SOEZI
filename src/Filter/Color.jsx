import React from "react";
import { FiArrowLeft } from "react-icons/fi";

const Color = ({activeSection ,setActiveSection}) => {
  return (
    <div className="">

      <div
        value={activeSection} onClick={() => setActiveSection(null)}className="flex  items-center pt-7 pl-7 pb-5 cursor-pointer"><FiArrowLeft className="mt-1" /><span className="pl-4 font-medium">Color</span>
      </div>

      <div className='px-7 pt-4 overflow-y-auto h-125'>

        <div className='Almond  pb-5' > 
          <label>
            <input  className='w-6 h-4 accent-black ' type="checkbox" name="" id=""   />
            <span className='px-2 '> Basic (2)</span>
          </label>
        </div>
        

        <div className='Coffin  pb-5' > 
          <label>
            <input  className='w-6 h-4 accent-black ' type="checkbox" name="" id=""   />
            <span className='px-2 '> Black (6)</span>
          </label>
         
        </div>

        <div className='Oval  pb-5' > 
          <label>
            <input  className='w-6 h-4 accent-black ' type="checkbox" name="" id=""   />
            <span className='px-2 '> Blue (21)</span>
          </label>  
        </div>

        <div className='Medium  pb-5' > 
          <label>
            <input  className='w-6 h-4 accent-black ' type="checkbox" name="" id=""   />
            <span className='px-2 '>Brown (7)</span>
          </label>
        </div>


        <div className='Round pb-5' > 
          <label>
            <input  className='w-6 h-4 accent-black ' type="checkbox" name="" id=""   />
            <span className='px-2 '> cateye (6)</span>
          </label>

        </div>

        <div className='square  pb-5' > 
          <label>
            <input  className='w-6 h-4 accent-black ' type="checkbox" name="" id=""   />
            <span className='px-2 '> CATEYE (1)</span>
          </label>
        </div>

        <div className='Stiletto  pb-5' > 
          <label>
            <input  className='w-6 h-4 accent-black ' type="checkbox" name="" id=""   />
            <span className='px-2 '> Chorme (2)</span>
          </label>
        </div>

        <div className='Stiletto  pb-5' > 
          <label>
            <input  className='w-6 h-4 accent-black ' type="checkbox" name="" id=""   />
            <span className='px-2 '> Extra (25)</span>
          </label>
        </div>

        <div className='Stiletto  pb-5' > 
          <label>
            <input  className='w-6 h-4 accent-black ' type="checkbox" name="" id=""   />
            <span className='px-2 '> FRENCH (1)</span>
          </label>
        </div>

        <div className='Stiletto  pb-5' > 
          <label>
            <input  className='w-6 h-4 accent-black ' type="checkbox" name="" id=""   />
            <span className='px-2 '> french (1)</span>
          </label>
        </div>

        <div className='Stiletto  pb-5' > 
          <label>
            <input  className='w-6 h-4 accent-black ' type="checkbox" name="" id=""   />
            <span className='px-2 '> Golden (10)</span>
          </label>
        </div>

        <div className='Stiletto  pb-5' > 
          <label>
            <input  className='w-6 h-4 accent-black ' type="checkbox" name="" id=""   />
            <span className='px-2 '> Green (9)</span>
          </label>
        </div>

        <div className='Stiletto  pb-5' > 
          <label>
            <input  className='w-6 h-4 accent-black ' type="checkbox" name="" id=""   />
            <span className='px-2 '> Nude (64)</span>
          </label>
        </div>

        <div className='Stiletto  pb-5' > 
          <label>
            <input  className='w-6 h-4 accent-black ' type="checkbox" name="" id=""   />
            <span className='px-2 '> Ombre (1)</span>
          </label>
        </div>

        <div className='Stiletto  pb-5' > 
          <label>
            <input  className='w-6 h-4 accent-black ' type="checkbox" name="" id=""   />
            <span className='px-2 '> Orange (11)</span>
          </label>
        </div>

        <div className='Stiletto  pb-5' > 
          <label>
            <input  className='w-6 h-4 accent-black ' type="checkbox" name="" id=""   />
            <span className='px-2 '> pink (21)</span>
          </label>
        </div>

        <div className='Stiletto  pb-5' > 
          <label>
            <input  className='w-6 h-4 accent-black ' type="checkbox" name="" id=""   />
            <span className='px-2 '> purple (19)</span>
          </label>
        </div>

        <div className='Stiletto  pb-5' > 
          <label>
            <input  className='w-6 h-4 accent-black ' type="checkbox" name="" id=""   />
            <span className='px-2 '> Rainbow (8)</span>
          </label>
        </div>

        <div className='Stiletto  pb-5' > 
          <label>
            <input  className='w-6 h-4 accent-black ' type="checkbox" name="" id=""   />
            <span className='px-2 '> Red (12)</span>
          </label>
        </div>

        <div className='Stiletto  pb-5' > 
          <label>
            <input  className='w-6 h-4 accent-black ' type="checkbox" name="" id=""   />
            <span className='px-2 '> White (24)</span>
          </label>
        </div>

        <div className='Stiletto  pb-5' > 
          <label>
            <input  className='w-6 h-4 accent-black ' type="checkbox" name="" id=""   />
            <span className='px-2 '> Yellow (3)</span>
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

export default Color;
