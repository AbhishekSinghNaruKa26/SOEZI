import { useEffect, useState } from 'react';
import { FaRegHeart, FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { MdOutlineChevronRight } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { Range, getTrackBackground } from 'react-range';
import axios from 'axios';
import { FaHeart } from "react-icons/fa";



const Main = () => {

    const[price , setPrice]=useState(true);
    const[shape , setShape]=useState(true);
    const[effect , setEffect]=useState(true);
    const[color , setColor]=useState(true);
    const[kit , setKit]=useState(true);
    const[showmore , setShowmore]=useState(false);
    const[sort , setSort]=useState(false);
    const[cols , setCols]=useState(3);
    const[products , setProducts]=useState([]);


    
    const [values, setValues] =useState([0, 2199]); // [min, max]
      const STEP = 50;
      const MIN = 0;
      const MAX = 2199;
    const items = ["Featured" , "Best selling" , "Alphabetically A-Z", "Alphabetically Z-A", "Price, low to high","Price, high to low","Date, old to new","Date, new to old"];
    const[selected , setSelected]=useState(items[1]);

    const handleimgbutton=(num)=>{
       console.log("Clicked column:", num);
       
      setCols(num);
    };

    useEffect(()=>{
      axios.get('http://localhost:8080/api/getAll')
      .then((res)=>{
         console.log("DATA FROM BACKEND:", res.data);
        setProducts(res.data.products);
      })
      .catch((error)=>{
      
        console.error("Error",error);
        
      });

    },[])


    
    const[wishListId , setWishListId]=useState([]);

    


    const handleWishListId = (id)=>{
      console.log("Id" ,id);
      
      setWishListId(prev=>
        prev.includes(id) ? prev.filter(item => item!==id) : [...prev,id]
      )
    }

  return (

    

    <div className='mainn'> 
    <div className=' flex justify-center px-6 gap-8'>

        {/* Filter For large devices */}
        <div  className='filter hidden md:block ml-4 shrink-0 grow-0  text-[15px]  text-[#202025]  pt-5  ptfilter990  px-4'>

    
            <div className='text-xl  pb-6 flex justify-start font-[500]'>Filter :</div><hr className='text-gray-300' />
       

         {/* list */}
         <div className='list pt-4 '>

            <div value={price} onClick={()=>setPrice(!price)} className='price pb-4 text-lg flex justify-between '>Price: <span>{!price ?  < MdOutlineChevronRight className='mt-1.5 ' /> :<IoIosArrowDown className='mt-1.5' />
            } </span></div>{!price && <hr className='text-gray-300' /> }

            {/* For price */}
            {price && 
            <>
            <div className='for price'>
            <div className='slider  mt-3'>
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

           <div className='mb-4 mt-5 flex justify-between'>
          <div>
            <span className='pl-2'> ₹</span>
             <span className='pl-2'><input className='border-1 border-pink-500 h-12 w-12 pl-2 rounded' type="text" min={0} max={2199} value={values[0]}  /></span>
          </div>
          
           <div>
            <span className='pl-2'> ₹</span>
             <span className='pl-2'><input className='border-1 border-pink-500 h-12 w-12 pl-2 rounded' type="text" min={0} max={2199} value={values[1]}   /></span>
          </div>
           </div>

           </div>
            </>
            }

            
            <div  value={shape} onClick={()=>setShape(!shape)} className='Shape py-4 text-lg flex justify-between '>Shape:<span>{!shape ?  < MdOutlineChevronRight className='mt-1.5 ' /> :<IoIosArrowDown className='mt-1.5' />
            } </span></div>{!shape && <hr className='text-gray-300' /> }
            
            {/* for shape */}
            {shape &&
            <>
            <div className=' for shape px-2 pt-2.5'>

        <div className='Almond  pb-3' > 
          <label>
            <input  className='w-6 h-4 accent-black ' type="checkbox" name="" id=""   />
            <span className='pl-2 '>Almond (260)</span>
          </label>
        </div>
        

        <div className='Coffin  pb-3' > 
          <label>
            <input  className='w-6 h-4 accent-black ' type="checkbox" name="" id=""   />
            <span className=' pl-2'>Coffin (258)</span>
          </label>
         
        </div>

        <div className='Oval  pb-3' > 
          <label>
            <input  className='w-6 h-4 accent-black ' type="checkbox" name="" id=""   />
            <span className=' pl-2'>Oval (260)</span>
          </label>  
        </div>

        <div className='Medium  pb-3' > 
          <label>
            <input  className='w-6 h-4 accent-black ' type="checkbox" name="" id=""   />
            <span className='pl-2'>Medium (1)</span>
          </label>
        </div>


        <div className='Round pb-3' > 
          <label>
            <input  className='w-6 h-4 accent-black ' type="checkbox" name="" id=""   />
            <span className='pl-2 '>Round (258)</span>
          </label>

        </div>

        <div className='square  pb-3' > 
          <label>
            <input  className='w-6 h-4 accent-black ' type="checkbox" name="" id=""   />
            <span className='pl-2 '>Square (271)</span>
          </label>
        </div>

        <div className='Stiletto  pb-3' > 
          <label>
            <input  className='w-6 h-4 accent-black ' type="checkbox" name="" id=""   />
            <span className='pl-2 '>Stiletto (258)</span>
          </label>
        </div>

            </div>
            </>
            }

            
            <div value={effect} onClick={()=>setEffect(!effect)} className='Effect py-4 text-lg flex justify-between '>Effect: <span>{!effect ?  < MdOutlineChevronRight className='mt-1.5 ' /> :<IoIosArrowDown className='mt-1.5' />
            } </span></div>{!effect && <hr className='text-gray-300' /> }

            {/* for Effect */}
            {effect &&
            <>
            <div className="for effect pt-1.5 px-3">

         <div className='Gloss  pb-5' > 
          <label>
            <input  className='w-6 h-4 accent-black ' type="checkbox" name="" id=""   />
            <span className='px-2 '>Gloss (226)</span>
          </label>
        </div>

         <div className='Matte  pb-5' > 
          <label>
            <input  className='w-6 h-4 accent-black ' type="checkbox" name="" id=""   />
            <span className='px-2 '>Matte (35)</span>
          </label>
         
        </div>
        
            </div>
            </>
            }


            
            <div value={kit} onClick={()=>setKit(!kit)} className='Kit py-4 text-lg flex justify-between '>Kit:<span>{!kit ?  < MdOutlineChevronRight className='mt-1.5 ' /> :<IoIosArrowDown className='mt-1.5' />
            } </span></div>{!kit && <hr className='text-gray-300' /> }

            {/* for Kit */}
            {kit && 
            <>
            <div className="for kit pt-2 ">

         <div className='Application Kit  pb-5' > 
          <label>
            <input  className='w-6 h-4 accent-black ' type="checkbox" name="" id=""   />
            <span className=' '>Application Kit  (283)</span>
          </label>
         
        </div>

         <div className='Ready To Weat Kit  pb-5' > 
          <label>
            <input  className='w-6 h-4 accent-black ' type="checkbox" name="" id=""   />
            <span className=''>Ready To Wear kit (283)</span>
          </label>
         
        </div>
        
            </div>
            </>
            }

        
            <div value={color} onClick={()=>setColor(!color)} className='Color py-4 text-lg flex justify-between '>Color: <span>{!color ?  < MdOutlineChevronRight className='mt-1.5 ' /> :<IoIosArrowDown className='mt-1.5' />
            } </span></div>{!color && <hr className='text-gray-300' /> }

            {/* for color */}
            {color && 
            <>
            <div className='px-2 pt-3 '>

        <div className='Almond  pb-3' > 
          <label>
            <input  className='w-6 h-4 accent-black ' type="checkbox" name="" id=""   />
            <span className='px-2 '> Basic (2)</span>
          </label>
        </div>
        

        <div className='Coffin  pb-3' > 
          <label>
            <input  className='w-6 h-4 accent-black ' type="checkbox" name="" id=""   />
            <span className='px-2 '> Black (6)</span>
          </label>
         
        </div>

        <div className='Oval  pb-3' > 
          <label>
            <input  className='w-6 h-4 accent-black ' type="checkbox" name="" id=""   />
            <span className='px-2 '> Blue (21)</span>
          </label>  
        </div>

        <div className='Medium  pb-3' > 
          <label>
            <input  className='w-6 h-4 accent-black ' type="checkbox" name="" id=""   />
            <span className='px-2 '>Brown (7)</span>
          </label>
        </div>


        <div className='Round pb-3' > 
          <label>
            <input  className='w-6 h-4 accent-black ' type="checkbox" name="" id=""   />
            <span className='px-2 '> cateye (6)</span>
          </label>

        </div>

        <div className='square  pb-3' > 
          <label>
            <input  className='w-6 h-4 accent-black ' type="checkbox" name="" id=""   />
            <span className='px-2 '> CATEYE (1)</span>
          </label>
        </div>

        <div className='Stiletto  pb-3' > 
          <label>
            <input  className='w-6 h-4 accent-black ' type="checkbox" name="" id=""   />
            <span className='px-2 '> Chorme (2)</span>
          </label>
        </div>

        <div className='Stiletto  pb-3' > 
          <label>
            <input  className='w-6 h-4 accent-black ' type="checkbox" name="" id=""   />
            <span className='px-2 '> Extra (25)</span>
          </label>
        </div>

        <div className='Stiletto  pb-3' > 
          <label>
            <input  className='w-6 h-4 accent-black ' type="checkbox" name="" id=""   />
            <span className='px-2 '> FRENCH (1)</span>
          </label>
        </div>

        <div className='Stiletto  pb-3' > 
          <label>
            <input  className='w-6 h-4 accent-black ' type="checkbox" name="" id=""   />
            <span className='px-2 '> french (1)</span>
          </label>
        </div>

        <div className='Stiletto  pb-3' > 
          <label>
            <input  className='w-6 h-4 accent-black ' type="checkbox" name="" id=""   />
            <span className='px-2 '> Golden (10)</span>
          </label>
        </div>

        <div className='Stiletto  pb-3' > 
          <label>
            <input  className='w-6 h-4 accent-black ' type="checkbox" name="" id=""   />
            <span className='px-2 '> Green (9)</span>
          </label>
        </div>

        <div className='Stiletto  pb-3' > 
          <label>
            <input  className='w-6 h-4 accent-black ' type="checkbox" name="" id=""   />
            <span className='px-2 '> Nude (64)</span>
          </label>
        </div>

        <div value={showmore} onClick={()=>setShowmore(!showmore)} >
            {!showmore &&  <p className='border-b-1 border-black inline'>+ Show more</p>   }
        </div>

        {showmore &&
        <>
        <div>
             <div className='Stiletto  pb-3' > 
          <label>
            <input  className='w-6 h-4 accent-black ' type="checkbox" name="" id=""   />
            <span className='px-2 '> Ombre (1)</span>
          </label>
        </div>

        <div className='Stiletto  pb-3' > 
          <label>
            <input  className='w-6 h-4 accent-black ' type="checkbox" name="" id=""   />
            <span className='px-2 '> Orange (11)</span>
          </label>
        </div>

        <div className='Stiletto  pb-3' > 
          <label>
            <input  className='w-6 h-4 accent-black ' type="checkbox" name="" id=""   />
            <span className='px-2 '> pink (21)</span>
          </label>
        </div>

        <div className='Stiletto  pb-3' > 
          <label>
            <input  className='w-6 h-4 accent-black ' type="checkbox" name="" id=""   />
            <span className='px-2 '> purple (19)</span>
          </label>
        </div>

        <div className='Stiletto  pb-3' > 
          <label>
            <input  className='w-6 h-4 accent-black ' type="checkbox" name="" id=""   />
            <span className='px-2 '> Rainbow (8)</span>
          </label>
        </div>

        <div className='Stiletto  pb-3' > 
          <label>
            <input  className='w-6 h-4 accent-black ' type="checkbox" name="" id=""   />
            <span className='px-2 '> Red (12)</span>
          </label>
        </div>

        <div className='Stiletto  pb-3' > 
          <label>
            <input  className='w-6 h-4 accent-black ' type="checkbox" name="" id=""   />
            <span className='px-2 '> White (24)</span>
          </label>
        </div>

        <div className='Stiletto  pb-3' > 
          <label>
            <input  className='w-6 h-4 accent-black ' type="checkbox" name="" id=""   />
            <span className='px-2 '> Yellow (3)</span>
          </label>
        </div>

        </div>

        <div className='pl-2' value={showmore} onClick={()=>setShowmore(!showmore)}>
           {showmore &&  <p className='border-b-1 border-black inline '>- Show less</p> } 
        </div>
        </>
        }

       
        </div>
        </>
        }


        </div>
   </div>

        
        {/* mainn */}
    <div className='mainn  '>
      
      <div className='numbers-sortby text-[15px] pr-6  flex justify-between items-center'>
      {/* numbers */}
      <div className='numbers234 pt-10 text-2xl'> 
        <div className='flex gap-3 font-[500] pl-6'>
          <div>
            <button  onClick={()=>handleimgbutton(2)} className={`border-1 ${cols===2 ? 'bg-gray-200  text-black' : 'bg-white text-gray-200'} border-gray-400  px-1 h-[40px] w-[40px] `}>II</button>
          </div>

          <div>
            <button onClick={()=>handleimgbutton(3)}  className={`border-1 ${cols===3 ? 'bg-gray-200  text-black' : 'bg-white text-gray-200'} border-gray-400  px-1 h-[40px] w-[40px] `}>III</button>
          </div>

          <div>
            <button onClick={()=>handleimgbutton(4)}  className={`border-1 ${cols===4 ? 'bg-gray-200  text-black' : 'bg-white text-gray-200'} border-gray-400  px-1 h-[40px] w-[40px] `}>IIII</button>
          </div>
        
        </div>

      </div>

      {/* sort-by */}
      <div className='sortby pt-8 flex'>
        <div> Sort by:  </div>
        <div value={sort} onClick={()=>setSort(!sort)} className='flex pl-3  border-b-1 border-gray-400 '> {selected} <span><IoIosArrowDown className=' ml-12 mt-1' /></span></div>

        {sort &&  
        <>
        <div className='h-56 w-45 z-50 absolute mt-5.5 rounded ml-14 bg-white  border-1 leading-7 text-md border-black shadow-3xl'>
          <ul>
            {items.map((item,index)=>(
              <li
              key={index}
              className={`cursor-pointer pl-2  ${selected === item  ? 'bg-blue-600 , text-white ' : ""} `}
              onClick={()=>{setSelected(item);
                            setSort(!sort)

              }}
              >
                {item}
              </li>
            ))}
         </ul>

        </div>
        </>
        }


      <div className='pl-16'>
        313 products
      </div>

      </div>

      

      </div>

     
     {/* porducts */}
        <div className={`products shrink-0 grow-0  grid grid-cols-2 ${cols===2 ? 'bp990-grid-2' : cols===3 ?'bp990-grid-3' : 'bp990-grid-4'} gap-8 px-4 pt-4 md:pt-18 ptsort990 `}  >

          {/* Demo 1st Product */}
          {products.map((product , index)=>(
              <div key={index} className='1 bg-[#f7f7f7] h-auto w-auto pb-2 '>

            <div className='img relative '>
            <div key={product._id}  onClick={()=>{handleWishListId(product._id)}} className={`absolute text-lg top-5 text-white right-2.5  `}>{wishListId.includes(product._id) ?<FaHeart className='text-black'/> : <FaRegHeart/> }</div>
          
            <img className=' h-auto max-h-[260px]  max-w-[260px] w-full rounded-t-3xl ' src={`/${product.image}`} alt={product.title} />
            
            </div>

            <div className='product'>
                <div className='title flex justify-center'>
                    <a className='text-[14px] mt-1' href="">{product.title}</a>
                </div>

                <div className='rating flex justify-center'>
                    <span className=' flex justify-center mt-1 h-5 '>
                        <FaStar className='h-5 w-4.5 pl-0.5' /><FaStar className='h-5 w-4.5 pl-0.5' /><FaStar  className='h-5 pl-0.5 w-4.5' /><FaStar  className='h-5 w-4.5 pl-0.5' /><FaRegStarHalfStroke  className='h-5 w-4.5 pl-0.5' />
                    </span>
                    <span className='text-[10px] mt-2 pl-2'>{product.reviews}</span>
                </div>

                <div className='flex justify-center'>
                    <span className='text-[10px] mt-1'>reviews</span>
                </div>

                <div className='product-price mt-2'>
                   <div className=' flex justify-center'>
                    <span className='text-pink-500 text-[15px] pr-4'>Rs.{product.price}</span>
                    <span className='text-[12px] text-gray-600 mt-0.5 line-through'>Rs.{product.orignalPrice}</span>
                   </div>
                </div>

            </div>

        </div>

          ))}
       
        </div>


    </div>

    </div>


        


        

    </div>
  )
}

export default Main