import React, { use, useState } from 'react'
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";

 function ShopComponent (){
  const[byOcassion , setByOcassion]=useState(false);
  const[effect , setEffect] =useState(false);
  const[length , setLength]=useState(false);
  const[shape , setShape]=useState(false);
  const[color , setColor] =useState(false);

  return (
    
    
    <div className='mainn text-[#6c747b] font-normal '>

      <div className='1 flex justify-between text-[14px]  pl-4 h-8'>
        <button >By Occasion</button>
        {!byOcassion ?(
        <button  value={byOcassion} onClick={()=>setByOcassion(!byOcassion)}><FiPlus /></button>
        ):
        (
        <button value={byOcassion} onClick={()=>setByOcassion(!byOcassion)}><FiMinus /></button>
      )}
      </div>

      {byOcassion &&
      <div>
        <div className='pl-8 font-normal  '>
          <button className='block py-3'>Holiday</button>
          <button className='block pb-3'>Casual</button>
          <button className='block pb-3'>Wedding</button>
          <button className='block pb-3'>Work</button>
          <button className='block pb-5'>Party</button>
        </div>
      </div>
      }

      

      <div className='2 flex justify-between text-[14px] text-[#6c747b] font-normal pl-4 h-8'>
        <button >Effect </button>
        {!effect ?(
        <button  value={effect} onClick={()=>setEffect(!effect)}><FiPlus /></button>
        ):
        (
        <button value={effect} onClick={()=>setEffect(!effect)}><FiMinus /></button>
      )}
      </div>
      {effect &&
      <div>
        <div className='pl-8 font-normal  '>
          <button className='block py-3'>Cat Eye</button>
          <button className='block pb-3'>Chorme</button>
          <button className='block pb-3'>French</button>
          <button className='block pb-3'>Glitter</button>
          <button className='block pb-5'>Glossy</button>
          <button className='block pb-5'>Matte</button>
          <button className='block pb-5'>Reflector</button>
          <button className='block pb-5'>Casual</button>
          <button className='block pb-5'>Egg Shell</button>
          <button className='block pb-5'>Foil</button>
          <button className='block pb-5'>NAil Art</button>
          <button className='block pb-5'>Jewelled</button>
          <button className='block pb-5'>ombre</button>
          <button className='block pb-5'>Swirl</button>
        </div>
      </div>
      }

       <div className='3 flex justify-between text-[14px] text-[#6c747b] font-normal pl-4 h-8'>
        <button >Length</button>
        {!length ?(
        <button  value={length} onClick={()=>setLength(!length)}><FiPlus /></button>
        ):
        (
        <button value={length} onClick={()=>setLength(!length)}><FiMinus /></button>
      )}
      </div>
      {length &&
      <div>
        <div className='pl-8 font-normal  '>
          <button className='block py-3'>Medium</button>
          <button className='block pb-3'>Short</button>
          <button className='block pb-3'>Long</button>
          <button className='block pb-3'>Exrtra Long</button>
        </div>
      </div>
      }


       <div className='4 flex justify-between text-[14px] text-[#6c747b] font-normal pl-4 h-8'>
        <button >Shape</button>
        {!shape ?(
        <button  value={shape} onClick={()=>setShape(!shape)}><FiPlus /></button>
        ):
        (
        <button value={shape} onClick={()=>setShape(!shape)}><FiMinus /></button>
      )}
      </div>
      {shape &&
      <div>
        <div className='pl-8 font-normal  '>
          <button className='block py-3'>Round</button>
          <button className='block pb-3'>Oval</button>
          <button className='block pb-3'>Square</button>
          <button className='block pb-3'>Coffin</button>
          <button className='block pb-3'>Almond</button>
          <button className='block pb-3'>Stiletto</button>
        </div>
      </div>
      }

       <div className='5 flex justify-between text-[14px] text-[#6c747b] font-normal pl-4 h-8'>
        <button >Color</button>
        {!color ?(
        <button  value={color} onClick={()=>setColor(!color)}><FiPlus /></button>
        ):
        (
        <button value={color} onClick={()=>setColor(!color)}><FiMinus /></button>
      )}
      </div>
      {color &&
      <div>
        <div className='pl-8 font-normal  '>
          <button className='block py-3'>Black</button>
          <button className='block pb-3'>Blue</button>
          <button className='block pb-3'>Brown</button>
          <button className='block pb-3'>Green</button>
          <button className='block pb-3'>Gray</button>
          <button className='block pb-3'>Nude</button>
          <button className='block pb-3'>Orange</button>
          <button className='block pb-3'>Pink</button>
          <button className='block pb-3'>Purple</button>
          <button className='block pb-3'>Red</button>
          <button className='block pb-3'>White</button>
          <button className='block pb-3'>Yellow</button>
          <button className='block pb-3'>Maroon</button>
          <button className='block pb-3'>Gold</button>
          <button className='block pb-3'>Rainbow</button>

        </div>
      </div>
      }

    </div>
  )
}

export default ShopComponent;