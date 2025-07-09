import React, { useState } from 'react'
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { MdCopyright } from "react-icons/md";

const Footer = () => {
    const[collections , setCollections]=useState(false);
    const[quickLinks , setQuickLinks]=useState(false);
    const[newsletter , setNewsletter]=useState(false);
  return (
    <>
  

      {/* for small devices  */}
    <div className='smallFooter  flex justify-center mt-20 mb-20 border-t-1 border-black '>
        <div className='main1 p-4 w-auto max-w-[520px]'>

            <div className='logo-img pt-4'>
                <a href="">
                <img className='h-[52px] w-[130px]' src="SOEZI-LOGO.avif" alt="" /></a><br />
            </div>

            <div className='Info text-[15px] pb-10 text=[#202025] tracking-wide'>
                At SOEZI, we focus on innovation and redefine the beauty industry with high-quality products and low-effort use.
                <br /><br />
                We are founded and developed by women and are the ultimate destination for all nail needs. We are committed to having our customers <span className='font-bold text-md' >#NAILIT!</span>
            </div>

            <div  className='Collection'>
                <div value={collections} onClick={()=>setCollections(!collections)} className='flex text-[16px] text-[#252525] font-[550] tracking-wide justify-between'>
                    COLLECTIONS {collections ? <span ><FiMinus className='mt-1' /></span>:<span ><FiPlus className='mt-1' /></span>  } 
                </div>
                {collections && 
                <>
                <div className='text-[#202025]'>
                    <a className='block pt-3' href="">Exclusively Yours Sale</a>
                    <a className='block pt-3' href="">Sona's Favs</a>
                    <a className='block pt-3' href="">Summer Glimmer</a>
                    <a className='block pt-3' href="">Glamboyance</a>
                    <a className='block pt-3' href="">Show Off</a>
                    <a className='block pt-3' href="">Hey Sister</a>
                    <a className='block pt-3' href="">KidEzi</a>
                    <a className='block pt-3' href="">ToEzi</a>
                    <a className='block pt-3' href="">Shop All</a>
                </div>
                </>
                }
            </div>


            <div  className='Quick Links'>
                <div value={quickLinks} onClick={()=>setQuickLinks(!quickLinks)} className='flex  text-[16px] text-[#252525] font-[550] tracking-wide justify-between pt-9'>
                    QUICK LINKS {quickLinks ? <span ><FiMinus className='mt-1' /></span>:<span ><FiPlus className='mt-1' /></span>  } 
                </div>
                {quickLinks && 
                <>
                <div className='text-[#202025]'>
                    <a className='block pt-3' href="">Contact Us </a>
                    <a className='block pt-3' href="">FAQ's</a>
                    <a className='block pt-3' href="">Blogs</a>
                    <a className='block pt-3' href="">Privacy Policy</a>
                    <a className='block pt-3' href="">Shipping Policy</a>
                    <a className='block pt-3' href="">Terms & Conditions </a>
                    <a className='block pt-3' href="">Disclaimer</a>
                    <a className='block pt-3' href="">Refund and Cancellations</a>
                    
                </div>
                </>
                }
            </div>


            <div  className='Newsletter'>
                <div value={newsletter} onClick={()=>setNewsletter(!newsletter)} className='flex  text-[16px] text-[#252525] font-[550] tracking-wide justify-between pt-9'>
                    NEWSLETTER {newsletter ? <span ><FiMinus className='mt-1' /></span>:<span ><FiPlus className='mt-1' /></span>  } 
                </div>
                {newsletter && 
                <>
                <div className='text-[#202025]'>
                    <p className='pt-4 '>Sign up for private sales, new launches, style tips and more.</p>

                    <div className='p-3 pt-6'>
                        <input className='p-3   w-full' type="email" placeholder='Your email'  />
                    </div>

                    <div className='pl-3 pt-3'>
                        <button className='py-2 px-8 rounded tracking-wide font-[500] text-white bg-pink-400'>SUSCRIBE</button>
                    </div>

                    <div className='mt-8 text-lg flex'>
                        <a href=""><FaFacebook className='ml-5' /></a>
                       <a href=""> <RiInstagramFill className='ml-8' /></a>
                       <a href=""> <FaYoutube className='ml-8' /></a>
                    </div>

                </div>
                </>
                }

            </div>


             <div className='imgwala mt-16'>
                <img src="footerimg1.jpg" alt="" />
            </div>

            <div className='flex justify-center mt-10'>
            <p className='flex'><MdCopyright /> 2025 , <span>SOEZI. </span> &nbsp; All rights reserved.</p>
            </div>


        </div>


    </div>



    {/*  lagre device */}
    <div className='largefooter'>
    <div className='mainn1  border-t-1 border-black mt-30 py-20'>
        <div className='for info-links flex justify-center '>

        <div className='1 w-72 px-6'>

            <div>
                <div className='logo-img'>
                <a href="">
                <img className='h-[52px] w-[130px]' src="SOEZI-LOGO.avif" alt="" /></a><br />
            </div>

            <div className='Info text-[15px] leading-6.5 pb-10 text=[#202025] tracking-wide'>
                At SOEZI, we focus on innovation and redefine the beauty industry with high-quality products and low-effort use.
                <br /><br />
                We are founded and developed by women and are the ultimate destination for all nail needs. We are committed to having our customers <span className='font-bold text-md' >#NAILIT!</span>
            </div>

            </div>
        </div>

        <div className='collection px-4'>
            <div className='flex text-[16px] text-[#252525] font-[550] tracking-wide justify-between'>  COLLECTIONS </div>
            <div className='text-[#202025] pt-8'>
                    <a className='block pt-3' href="">Exclusively Yours Sale</a>
                    <a className='block pt-3' href="">Sona's Favs</a>
                    <a className='block pt-3' href="">Summer Glimmer</a>
                    <a className='block pt-3' href="">Glamboyance</a>
                    <a className='block pt-3' href="">Show Off</a>
                    <a className='block pt-3' href="">Hey Sister</a>
                    <a className='block pt-3' href="">KidEzi</a>
                    <a className='block pt-3' href="">ToEzi</a>
                    <a className='block pt-3' href="">Shop All</a>
                </div>
        </div>

        <div className='quick-links px-6'>
            <div className='flex  text-[16px] text-[#252525] font-[550] tracking-wide justify-between '> QUICK LINKS </div>
            <div className='text-[#202025] pt-8'>
                    <a className='block pt-3' href="">Contact Us </a>
                    <a className='block pt-3' href="">FAQ's</a>
                    <a className='block pt-3' href="">Blogs</a>
                    <a className='block pt-3' href="">Privacy Policy</a>
                    <a className='block pt-3' href="">Shipping Policy</a>
                    <a className='block pt-3' href="">Terms & Conditions </a>
                    <a className='block pt-3' href="">Disclaimer</a>
                    <a className='block pt-3' href="">Refund and Cancellations</a>
                    
                </div>
        </div>

        <div className='newsletter w-72 '>
            <div className='flex  text-[16px] text-[#252525] font-[550] tracking-wide justify-between '>NEWSLETTER </div>
             <div className='text-[#202025]'>
                    <p className='pt-4 leading-7 '>Sign up for private sales, new launches, style tips and more.</p>

                    <div className='p-3 pt-6'>
                        <input className='p-3   w-full' type="email" placeholder='Your email'  />
                    </div>

                    <div className='pl-3 pt-3'>
                        <button className='py-2 px-8 rounded tracking-wide font-[500] text-white bg-pink-400'>SUSCRIBE</button>
                    </div>

                    <div className='mt-8 text-lg flex'>
                        <a href=""><FaFacebook className='ml-5' /></a>
                       <a href=""> <RiInstagramFill className='ml-8' /></a>
                       <a href=""> <FaYoutube className='ml-8' /></a>
                    </div>

                </div>
        </div>

        </div>

    </div>


    {/* for copyright */}
    <div className='mainn2 forcopy-img flex gap-80 justify-center mb-10   '>
             <div className='flex '>
            <p className='flex'><MdCopyright /> 2025 , <span className='font-bold'>SOEZI. </span> &nbsp; All rights reserved.</p>
            </div>

            <div className='imgwala w-auto h-auto  '>
                <img src="footerimg1.jpg" alt="" />
            </div>

    </div>

    </div>




  </>
  )
    
}

export default Footer