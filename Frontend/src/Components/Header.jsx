import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight,FaRegHeart } from "react-icons/fa";
import { HiBars3 } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { SlBasket } from "react-icons/sl";
import { IoCloseOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import MenuComponent from "../Others/MenuComponent";
import { useNavigate } from "react-router-dom";


function Header() {
  const [announceBtn, setAnnounceBtn] = useState(true);
  const [menu , setMenu]=useState(false);


  const announceToggle = () => {
    setAnnounceBtn(!announceBtn);
    console.log("Jay Shree Ram", announceBtn);
    return;
  };
  const navigate= useNavigate();
  const menuToggle = ()=>{
    return setMenu(!menu);
 
  }
  const closeMenu =()=>{
    return setMenu(false);
    
  }

  const[howTo , setHowTo]=useState([
    'How To Apply -EziON ', 'How To Remove -EziOFF' , 'How To Reuse -SOEZI','How To Apply -ToEzi EziON','How To Remove -ToEzi EziOFF','How To Apply -KidEzi EziON'
  ]);
  return (
    <>
      <div className="mainn ">
         
        {/* Announcement Or Part -1 */}

        <div className=" text-xl lg:text-2xl   bg-[#f4f1f2] flex justify-center py-1 ">
          
          <div className="mt-2  text-2xl">
            <button
              disabled={announceBtn === true}
              value={announceBtn}
              onClick={announceToggle}
              className={`${announceBtn ? "text-gray-400" : "text-black"}`}
            >
              <FaAngleLeft />
            </button>
          </div>

          {announceBtn && (
            <p
              className={` my-2 sm:mx-15 font-bold text-black/70  text-[15px]  `}
            >
              Shop For Rs.1999 & Get Ezi Care Kit Free
              <a
                href=""
                className="block flex justify-center h-4 font-normal  sm:inline pl-2 underline "
              >
                Shop Now 
              </a>
            </p>
          )}

          {!announceBtn && (
            <p
              className={`mx-1 sm:mx-15 mt-2 font-bold text-black/70 text-[16px] `}
            >
              Free Shipping On All Products
            </p>
          )}

          <div className="mt-2  text-2xl">
            <button
              disabled={announceBtn === false}
              value={announceBtn}
              onClick={announceToggle}
              className={`${announceBtn ? "text-black" : "text-gray-400"} `}
            >
              <FaAngleRight />
            </button>
          </div>

        </div>

        {/* Header for small devices or  Part-2  */}
        
        <div className=" header-part-small hidden max-[990px]:flex h-16  flex justify-between md:px-30 px-6 ">  


          <div className="flex   items-center text-2xl">
            <div className="pr-3"><button value={menu} onClick={menuToggle}><HiBars3  /></button> 
            
            {menu && 
            <div className=" absolute top-0 left-0 z-50"><MenuComponent close={closeMenu} /></div> 
             
            }
            </div>
            <div className="px-1">  <IoIosSearch /></div>
          </div>
         

          <div className="flex items-center"><img className="h-[53px] w-[130px]" src="/SOEZI-LOGO.avif" alt="" /></div>

          <div className="flex items-center text-xl">
            <div className="pr-1  flex"><div className=" flex items-center"><FaRegHeart /></div><span className="relative bg-[#fe7bbf] p-2 text-white text-sm  h-4 absolute right-1.5 bottom-1  w-4 justify-center flex items-center  rounded-full  ">0</span></div>

            <div className="px-1  flex"><div className="flex items-center"><SlBasket /></div><span className="relative bg-[#fe7bbf] p-2 text-white text-sm  h-4 absolute right-1.5 bottom-1  w-4 justify-center flex items-center  rounded-full  ">0</span> </div>
          </div>
  

        </div><hr />
      



        {/* Header for large devices or Part-3 */}

      <div className="header2 header-part-large  font-bold text-[12px] tracking-widest h-17 flex items-center justify-center px-5 ">

        <div className="flex items-center ">

          <div className="this1 p-1 flex  ">

          <div className="text-2xl mt-2">
            <button><IoIosSearch /></button>
          </div>

          <div className="this2 flex px-3">
            <button>
              <img src="" alt="" />
              <h1>INDIA (INR )</h1>
              </button>
          </div>

        </div>

        <a href="">
          <div className="this2 px-2 font-normal ">
         <button><a className="flex " href="">SHOP <IoIosArrowDown className=" text-[16px] ml-1" /> </a></button> <hr />
        </div>
        </a>
          <a className="flex p-2" href="">NAIL ART Edits</a>
          <a className="flex p-2" href="">NAIL CARE</a>
          <div className="custom-toggle hidden xl:flex items-center"><img className="h-[53px] m-8 w-[130px]" src="/SOEZI-LOGO.avif" alt="" /></div>

          <div className="group relative  flex px-2 hover:border-b ">ABOUT US <IoIosArrowDown className=" text-[16px] ml-1" />
          <div className="invisible bg-[#f9f0ff] pr-40 pl-5 py-8 left-[-20px] group-hover:visible   absolute top-11 z-50">
            <ul className="leading-7 text-[#2c2c2c] font-normal text-[14px]">
              <li>FAQ's</li>
              <li>Blogs</li>
            </ul>
          </div>
          </div>
          

          <div className="group relative flex p-2 hover:border-b" href="">HOW TO <IoIosArrowDown className="- text-[16px] ml-1" />
          <div className="invisible group-hover:visible py-5 px-5  bg-[#f9f0ff] top-12.5 w-65 z-50 absolute">
           {howTo.map((how)=>(
            <ul className="leading-8 text-[#2c2c2c] font-normal tracking-normal text-[14px]" key={how}>
              <li>{how}</li>
            </ul>
           ))}
          </div>
          </div>

          <div className="group relative flex p-2 hover:border-b" href="">CONTACT US <IoIosArrowDown className="- text-[16px] ml-1" />
          <div className="invisible group-hover:visible py-7 px-3  bg-[#f9f0ff] top-12.5 w-65 z-50 absolute ">
            <ul className="leading-8 text-[#2c2c2c] font-normal tracking-normal text-[14px]">
              <li>Distributed With Us</li>
              <li>CUSTOMIZE YOUR DREAM NAIL</li>
            </ul>
          </div>
          </div>

          <a className="flex p-2" href="">
            <div className="px-1  flex"><div onClick={()=>navigate('/login')} className="flex text-[22px] items-center"><CiUser /></div> </div>
          </a>

          <a className="flex p-2" href="">
            <div className="relative pr-1  flex"><div className=" flex text-[20px] font-normal items-center"><FaRegHeart /></div><span className="bg-[#fe7bbf] p-2 text-white text-sm absolute left-3.5 bottom-1.5  h-4  w-4 justify-center flex items-center  rounded-full  ">0</span></div>
          </a>


          <a className="flex p-2" href="">
            <div className="relative px-1  flex"><div className="flex text-[20px] items-center"><SlBasket /></div><span className="bg-[#fe7bbf] p-2 text-white text-sm absolute left-4.5 bottom-1.5  h-4  w-4 justify-center flex items-center  rounded-full  ">0</span> </div>
          </a>
          
        </div>



       
        

      </div>



        
        {/* scorllBar part-3 */}
        <div className="relative overflow-hidden whitespace-nowrap h-[34px] md:h-[52px] py-1.5 md:py-3 bg-[#F3F1F3] text-[#fe7bbf] text-[15px] md:text-[16px] z-0">
        <div className="absolute flex scrolling-text">
        <div className="flex">
        <span className="px-5">EZI NOURISH &amp; STRENGTHEN</span>
        <span className="px-5">MESS-FREE PRECISION</span>
        <span className="px-5">QUICK-ABSORBING &amp; LIGHTWEIGHT</span>
        <span className="px-5">FAST-DRYING FORMULA</span>
        </div>
        <div className="flex">
       <span className="px-5">EZI NOURISH &amp; STRENGTHEN</span>
       <span className="px-5">MESS-FREE PRECISION</span>
       <span className="px-5">QUICK-ABSORBING &amp; LIGHTWEIGHT</span>
       <span className="px-5">FAST-DRYING FORMULA</span>
    </div>
  </div>
        </div>




        

      </div>
    </>
  );
}
export default Header;
