import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { FiPlus } from "react-icons/fi";
import { useState } from "react";
import { FiMinus } from "react-icons/fi";
import ShopComponent from "./ShopComponent";



const MenuComponent = ({close}) => {
    const[shopbar , setShopbar] = useState(false);
    const[collectionbar , setCollectionbar]=useState(false);
    const[howtouse , setHowtouse]=useState(false);
    const[aboutus , setAboutus]=useState(false);
    const[contactus , setContactus] =useState(false);

    function shopPlus(){
        setShopbar(!shopbar);
    }


  return (

    <div className=' h-screen fixed overflow-y-auto bg-[#f9f0ff]  p-5 font-bold text-[#2c2c2c]'>
         <div className='flex justify-end text-xl  mb-5'><button  onClick={close}> <RxCross1 /></button></div>
        <div className='text-[12px]  w-73 '>

            
            <div className='flex justify-between pt-1 pb-4'>
                <button>SHOP</button>
                {!shopbar ?(
                 <button  value={shopbar} onClick={shopPlus}><FiPlus /></button>
                ):
                (
                 <button value={shopbar} onClick={shopPlus}><FiMinus /></button>
                )}
               

            </div>{!shopbar ? (
                <hr className="text-gray-300" />
            ):(
                <hr className="hidden" />
            )}

            {shopbar && 
                <div>
                   <ShopComponent />
                </div> 
            }



            <div className='naillartedits pt-3 pb-4'>
                <button  className="block w-full text-left">NAIL ART EDITS </button>
            </div><hr className='text-gray-300' />

             <div className='pressflauntcare pt-3 pb-4'>
                <button  className="block w-full text-left">PRES.FLAUNT.CARE</button>
            </div><hr className='text-gray-300' />

            <div className='nailcare pt-3 pb-4'>
                <button  className="block w-full text-left">NAIL CARE</button>
            </div><hr className='text-gray-300' />

              <div className='customizeyournail pt-3 pb-4'>
                <button  className="block w-full text-left">CUSTOMIZE YOUR DREAM NAIL</button>
            </div><hr className='text-gray-300' />


            <div className='collection   flex justify-between pt-3 pb-4'>
                <button>COLLECTIONS</button>
                {!collectionbar ?(
                 <button  value={collectionbar} onClick={()=>setCollectionbar(!collectionbar)}><FiPlus /></button>
                ):
                (
                 <button value={collectionbar} onClick={()=>setCollectionbar(!collectionbar)}><FiMinus /></button>
                )}
            </div>{!collectionbar ? (
                <hr className="text-gray-300" />
            ):(
                <hr className="hidden" />
            )}
        
        {collectionbar &&
      <div>
        <div className='pl-4 text-[14px] font-normal text-[#6c747b] '>
          <button className='block w-full text-left pb-3 '>Hello Kitty</button>
          <button className='block w-full text-left pb-3'>Sonna's Favs</button>
          <button className='block w-full text-left pb-3'>Summer Glimmer</button>
          <button className='block w-full text-left pb-3'>Glamboynanace</button>
          <button className='block w-full text-left pb-3'>Show Off</button>
          <button className='block w-full text-left pb-3'>Hey Sister</button>
          <button className='block w-full text-left pb-3'>KidEzi</button>
          <button className='block w-full text-left pb-3'>ToEzi</button>

        </div>
        </div>
        }
 
 
            <div className='Howtouse flex justify-between pt-3 pb-4'>
                <button>HOW TO USE</button>
                {!howtouse ?(
                 <button  value={howtouse} onClick={()=>setHowtouse(!howtouse)}><FiPlus /></button>
                ):
                (
                 <button value={howtouse} onClick={()=>setHowtouse(!howtouse)}><FiMinus /></button>
                )}
            </div>{!howtouse ? (
                <hr className="text-gray-300" />
            ):(
                <hr className="hidden" />
            )}

            {howtouse &&
          <div>
          <div className='pl-4 text-sm  font-normal text-[#6c747b] '>
          <button className='block w-full text-left pb-3 '>How To Apply -EziON <sup>TM</sup></button>
          <button className='block w-full text-left pb-3'>How To Remove -EziOFF <sup>TM</sup></button>
          <button className='block w-full text-left pb-3'>How To Reuse -SOEZI <sup>TM</sup></button>
          <button className='block w-full text-left pb-3'>How To Apply -ToEzi EziON <sup>TM</sup></button>
          <button className='block w-full text-left pb-3'>How To Remove -ToEzi EziOFF <sup>TM</sup></button>
          <button className='block w-full text-left pb-3'>How To Apply -KidEzi EziON <sup>TM</sup></button>

        </div>
        </div>
        }


            <div className='aboutus flex justify-between pt-3 pb-4'>
                <button>ABOUT US</button>
                {!aboutus ?(
                 <button  value={aboutus} onClick={()=>setAboutus(!aboutus)}><FiPlus /></button>
                ):
                (
                 <button value={aboutus} onClick={()=>setAboutus(!aboutus)}><FiMinus /></button>
                )}
            </div>{!aboutus ? (
                <hr className="text-gray-300" />
            ):(
                <hr className="hidden" />
            )}

        {aboutus &&
      <div>
        <div className='pl-4 text-sm  font-normal text-[#6c747b] '>
          <button className='block w-full text-left pb-3 '>FAQ's</button>
          <button className='block w-full text-left pb-5'>Blogs</button>
        </div><hr className="text-gray-300" />
        </div>
        }


            <div className='contactus flex justify-between pt-3 pb-4'>
                <button>CONTACT US</button>
                 {!contactus ?(
                 <button  value={contactus} onClick={()=>setContactus(!contactus)}><FiPlus /></button>
                ):
                (
                 <button value={contactus} onClick={()=>setContactus(!contactus)}><FiMinus /></button>
                )}
            </div>{!contactus ? (
                <hr className="text-gray-300" />
            ):(
                <hr className="hidden" />
            )}

        {contactus &&
        <div>
        <div className='pl-4 text-sm  font-normal text-[#6c747b] '>
          <button className='block w-full text-left pb-3 '>Distributed With Us</button>
        </div><hr className="text-gray-300" />
        </div>
        }





            <div className=' pt-3 pb-4'>
                <button className="block w-full text-left">LOGIN</button>
            </div><hr className='text-gray-300' />

            <div className='flex font-normal text-gray-500  pt-3 pb-4'>
               <IoCallOutline className='text-xl' /> &nbsp; &nbsp; (+91) 7413940716 
            </div><hr className='text-gray-300' />

             <div className='flex font-normal text-gray-500 pt-3 pb-4'>
               <MdOutlineMail className='text-xl' />&nbsp; &nbsp; abhisheknaruka7773@gmail.com 
            </div><hr className='text-gray-300' />




        </div>
    </div>
  )
}

export default MenuComponent