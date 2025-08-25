import React, { act, useState } from 'react'
import { GoStarFill } from "react-icons/go";
import { FaRegHeart} from "react-icons/fa6";
import { LuArrowLeftRight } from "react-icons/lu";
import { TbRulerMeasure } from "react-icons/tb";
import { LuCirclePlus } from "react-icons/lu";
import { FaPlayCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";
import { LuThumbsUp } from "react-icons/lu";
import { LuThumbsDown } from "react-icons/lu";
import {Swiper , SwiperSlide} from 'swiper/react';
import {Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const ProductShopping = () => {

    const[kit , setKit]= useState('ready' , 'application');
    const[howto , setHowto]=useState(false);
    const[ship , setShip]=useState(false);
    const[reviews , setReviews]=useState([
        {rating:5 , count : 16},
        {rating: 4, count : 0},
        {rating:3 , count : 1},
        {rating:2 , count : 0},
        {rating:1 , count : 0}  
    ]);
    const[userReviews , setUserReviews]=useState([
        {name:"Abhishek" , rating:5},
        {name:"Amar" , rating:5},
        {name:"subhash" , rating:4},
        {name:"sursa" , rating:3},
        {name:"ravsa" , rating:5},
        {name:"bhabhubali" , rating:4},
        {name:"girdhar" , rating:2},
        {name:"chetan" , rating:1},
        {name:"kuledeep" , rating:4},
        {name:"aryan" , rating:3},
        {name:"rameshwar" , rating:2},
        {name:"aabhuuu" , rating:5},
    ]);
    const[show , setShow]=useState(false);
    const[up , setUp]=useState(0,false);
    const[down , setDown] =useState(0, false);
    const[load , setLoad]=useState(false);
    const[active, setActive] = useState(null);


    const totalReviews = reviews.reduce((acc,curr)=>acc+curr.count,0);
    const faqs =[
        {
            question:"What is the scope on press-on nails ?",
            answer:"SOEZI ™ Press-on nails are amazing! You can have great nails in minutes. And you can wear them for only one dayor for up to two weeks– you decide. It’s in your control!"
        },
        {
            question:"How long do press-on nails last ?",
            answer:"Our nails are EZI to put on – EziON™ and EZI to take off- EziOFF™."
        } ,
        {
            question:"Are press-on nails reusable ?",
            answer:"Our nails fit everyone. We offer 24 nail tips in the SOEZI™ Application Kit & in the SOEZI™ Ready to Wear Kit. These 24 tips are a combination of universal tip sizes. It’s always SOEZI™ with our nails!"
        },
        {
            question:"Do press-on nails damage natural nails ?",
            answer:"If you are good to them, they can last up to 2 weeks using our SOEZI™Ezi ON™SuperStrong Nail Glue. If you want to wear the SOEZI™ press-on nails for only a day, use the great adhesive tabs in both the SOEZI™ Application Kit & the SOEZI™ Ready to Wear Kit. Yes, it is SOEZI™! Check out our link for the steps –  https://www.soezi.in/how-to-ezion/ Relax, it is SOEZI™ to wear our nails for 1 day OR 10 days! We got you!"
        },
        {
            question:"Best way to remove press-on nails ?",
            answer:"SOEZI™ Application Kit: 24 nail tips (UNIVERSAL SIZES)7.5 G EziON™ SuperStrong Nail Glue01 strips adhesive tabs01 SOEZI™ Nail Filer (Uh – non disposable of-course, we want SOEZI™ to be with you for a while!)7.5 G EziOFF™ Nourish & Restore Nail Glue Remover01 SOEZI™ Nail Buffer02 wood cuticle sticksPS: Try the SOEZI™Application Kit to enjoy the full benefits of the SOEZI™experience.You will thank yourself if you do!SOEZI™ Ready to Wear Kit:24 nail tips (UNIVERSAL SIZES)03 strips adhesive tabs02 wood cuticle sticks"
        }

    ];

    const toggle=(index)=>{
        if(active===index){

            setActive(null);
        }
        else{
            setActive(index);
        }
    }

  return (
    <div className=' '>


        <div className='flex justify-center overflow-visible'>
        <div className='sm:grid-cols-1 md:grid md:grid-cols-2 mb-10  w-[1200px]  min-h-screen  '>

            <div className='1  max-w-full mx-auto flex justify-center sticky top-0 h-[475px] self-start '>

                <div className='hidden md:auto w-18 mt-1'>
                    <img className='py-3' src="img1.webp" alt="" />
                    <img className='py-3' src="img2.webp" alt="" />
                    <img className='py-3' src="img3.webp" alt="" />
                    <img className='py-3'  src="img4.webp" alt="" />
                    <img className='py-3' src="img5.webp" alt="" />
                </div>
                <div className='ml-5 '>
                    <img className='w-auto h-auto object-contain max-h-[475px] 'src="img1.webp " alt="" />
                </div>

            </div>
      

            <div className='2 ml-8 '>

                {/* 2nd main info */}
                <div>
                <div className='flex mb-6'>
                    <button className=''>Home  </button>
                    <button className='pl-6'>All </button>
                    <div className='text-gray-500 pl-4'>Dress to Impress </div>
                </div>

                <div className='font-bold text-4xl mb-3'>Dress To Impress</div>

                <div className='flex'><GoStarFill /><GoStarFill /><GoStarFill /><GoStarFill /><GoStarFill /><span className='text-sm pl-2'>21 reviews</span></div>

                <div><span className='font-[500]'>Rs. 799</span> <span className='pl-3 line-through text-[12px]'>Rs. 999</span> </div>

                </div>


                {/* Product Deatails */}
                <div className='leading-7.5'>
                    <ul className='text-[15px] text-gray-800 list-disc'>
                        <li className='py-1'>First impressions don’t wait. Whether it's a date night or a client pitch, Dress to Impress nails are your silent power play. Sharp. Stylish. Unforgettable. Like you.</li>

                        <li className='py-1'>Reusable & Waterproof for Hassel-free GlamGoes with mutliple outfits for different occasion without chipping off.</li>

                        <li className='py-1'>Nail-Safe, Nourishing Glue & Remover Protects your natural nails beneath from damage, yellowing, and breakage.</li>

                        <li className='py-1'>No-Mess, 10-Minute Application That Lasts Up to 2 Weeks Easy to apply, stays strong for days.</li>
                    </ul>
                </div>

                {/* payment image */}
                <div className='mt-2'>
                    <img src="productshopping1.avif" alt="" />
                </div>
                
                {/* Kit Togggle */}
                <div className='my-2 text-gray-800'>
                    <span>Kit : &nbsp; </span>
                    <span>Ready to Wear Kit </span>
                </div>
                
                {/* ready & application button */}
                <div className='my-3'>
                    <button value={'ready'} onClick={()=>setKit('ready')} className={`px-3 py-2 rounded ${kit=='ready' ? 'bg-[#696969] text-white' :'bg-white text-black' }   border-1 border-black mr-5`}>Ready To Wear Kit</button>
                    <button value={'application'} onClick={()=>setKit('application')} className={`px-4 py-2 ${kit=='application' ? 'bg-[#696969] text-white' : 'bg-white text-black'}  rounded border-1 border-black`}>Application Kit </button>
                </div>

                {/* kit ready */}
                {kit=='ready' &&  
                <>
                <div className='py-2 mb-4 bg-[#696969] text-white  w-fit px-4 text-[12px]'>
                    <p className='text-[15px] text-[#ffff00] px-4 text-wider font-bold'>For Short Term Wear <br />(This kit includes)</p>
                    <ul className='list-disc list-inside '>
                        <li className='py-1'>24 NAIL <span className='text-[#ffff00] font-bold'>REUSABLE</span>  TIPS <span className='text-[#ffff00] font-bold' >(UNIVERSAL SIZES)</span></li>
                        <li className='py-1'>03 Strips Adhesive Tabs</li>
                        <li className='py-1'>02 Wood Cuticle Sticks</li>
                    </ul>
                </div>
                </>
                }
                
                {/* kit application */}
                {kit == 'application' && 
                <>
                <div className='py-'>
                <div className='bg-[#696969] text-white my-4 h-fit w-fit px-4'>
                    <p className='text-[15px] text-[#ffff00] pt-2 px-4 text-wider font-bold'>For Long Term Wear <br />(This kit includes)</p>
                    <ul className='list-disc list-inside text-[12px] py-2'>
                        <li className='py-1'>24 NAIL <span className='text-[#ffff00] font-bold'>REUSABLE</span> TIPS  <span className='text-[#ffff00] font-bold' >(UNIVERSAL SIZES)</span></li>
                        <li className='py-1'>7.5g EziONTM SuperStrong Nail Glue</li>
                        <li className='py-1'>01 Strips Adhesive Tabs</li>
                        <li className='py-1'>7.5g EziOFFTM Nourish & Restore Nail Glue Remover</li>
                        <li className='py-1'>02 Wood Cuticle Sticks</li>
                        <li className='py-1'>01 SOEZITM Nail Filer</li>
                        <li className='py-1' >01 SOEZITM Nail Buffer</li>
                    </ul>
                </div>
                </div>
                </>
                }
               
               {/* customize */}
                <div className='flex justify-between bg-[#f3f1f2] py-2 text-lg px-4  font-[500] border-b-1 border-b-pink-400'>
                    <p>
                        Customize This Press On 
                    </p>
                    <span>+</span>
                </div>

                {/* purchase buttons */}
                <div className='flex justify-center tracking-widest  h-[50px] mt-4 '>

                    <div className='flex items-center border-1 border-gray-400 rounded-lg text-xl'> 
                        <span className='bg-gray-200 h-full pt-2 rounded-lg px-3 '>-</span>
                        <span className='mx-3'> 1</span>
                        <span className='bg-gray-200 h-full pt-2 rounded-lg px-3 '>+</span>
                    </div>

                    <div className='flex items-center bg-[#fe7bbf] text-white px-11  ml-6 font-[500] rounded-full'>ADD TO CART</div>

                    <div className='flex  items-center px-8 border-1 border-black rounded-full ml-3'>BUY IT NOW </div>

                </div>

                {/* check date */}
                <div className='mt-5 font-[500]'>
                    <p>
                        Check Est. Delivery Date :
                    </p>
                </div>


                {/* check Pincode */}
                <div className='h-[37px] flex mt-1'>
                    <div className='w-[270px] flex items-center'>
                        <input className='bg-gray-200 w-full py-2 rounded px-4'  type="text" placeholder='Enter Pincode' />
                    </div>

                    <div className='flex items-center'>
                        <button className='px-3 py-2 bg-[#fe7bbf] rounded text-white'>Check</button>
                    </div>
                </div>


                {/* Some Button and checking  */}
                <div className='flex  flex-wrap w-[538px] h-[54px] text-[15px] mt-10' >
                    <div className='flex  items-center  w-[141px] h-[27px] mr-4'><span className='text-lg pr-2 ' ><FaRegHeart/></span> <span>Add to Wishlist</span></div>
                    <div className='flex items-center w-[100px] h-[27px] mr-4'><span className='text-lg'><LuArrowLeftRight /></span><span className='px-1'>Compare</span></div>
                    <div className='flex items-center w-[168px] h-[27px]'><span className='text-lg'><TbRulerMeasure /></span><span className='pl-2'>View Lenght Chart</span></div>
                    <div className='flex  items-center w-[180px] h-[27px]'><span className='text-yellow-500 text-xl'><LuCirclePlus /></span><span className='pl-2'>Extra Adhesive Tabs</span></div>
                </div>


                {/* How TO Use */}
                <div onClick={()=>setHowto(!howto)} className='flex justify-between mt-6 py-2 font-[500] border-b-1 border-pink-600'>
                    <p>How To Use</p>
                    <p className='text-2xl'>+</p>
                </div>
                {howto &&
                <>
                <div className='py-4'>

                    <div className='viedo1'>
                    <div className='flex font-bold pb-4'>
                        <span className='text-pink-700 flex items-center pr-2 text-2xl'><FaPlayCircle /></span>
                        <p className=''> How to Apply - EziON <sup>Tm</sup> with Superstrong Nail Glue</p>  
                    </div>
                    <div>
                        <iframe id="superstrong" class="video-iframe" width="100%" height="250" src="https://www.youtube.com/embed/6EgBUuH5urw?si=ZO3KiqrdMmd-YNi7" frameborder="0" allowfullscreen=""></iframe>
                    </div>

                    </div>

                    <div className='viedo2 py-5'>
                    <div className='flex font-bold pb-4'>
                        <span className='text-pink-700 flex items-center pr-2 text-2xl'><FaPlayCircle /></span>
                        <p className=''>How to Apply - EziON™ with Adhesive Tabs </p>  
                    </div>
                    <div>
                        <iframe id="superstrong" class="video-iframe" width="100%" height="250" src="https://www.youtube.com/embed/6EgBUuH5urw?si=ZO3KiqrdMmd-YNi7" frameborder="0" allowfullscreen=""></iframe>
                    </div>

                    </div>

                    <div className='viedo3'>
                    <div className='flex font-bold pb-4'>
                        <span className='text-pink-700 flex items-center pr-2 text-2xl'><FaPlayCircle /></span>
                        <p className=''>How to Remove - EziOFF™</p>  
                    </div>
                    <div>
                        <iframe id="superstrong" class="video-iframe" width="100%" height="250" src="https://www.youtube.com/embed/6EgBUuH5urw?si=ZO3KiqrdMmd-YNi7" frameborder="0" allowfullscreen=""></iframe>
                    </div>

                    </div>

                </div>
                </> 
                }

                {/* Shipping And Return  */}
                <div onClick={()=>setShip(!ship)} className='flex justify-between font-[500] mt-6 pb-3 border-b-1 border-pink-600'>
                    <p>Shipping And Return</p>
                    <p className='text-2xl'>+</p>
                </div>
                {ship && 
                <>
                <div className='text-gray-800'>
                    <p className='pt-6 text-[15px] leading-7'>
                    We will process and dispatch your order within <span className='font-bold'> 2-3 business days.</span> <br /><br />

                    You can verify your exact delivery date using your PINCODE on the product page of our website. <br /> <br />

                    International orders are processed within <span className='font-bold'> 3 days</span> of order receipt. Duties and extra costs are levied upon delivery. Package arrival time is dependent on destination. <br /> <br />

                    We require a complete address and telephone number to ship products.<span className='font-bold'>We do not accept returns due to hygiene reasons.</span>  Please contact customer service at hello@soezi.in with questions.
                    </p>

                    <h1 className='text-3xl font-[500] py-4'>Out Of Stock Items </h1>
                    <p className='tracking-wide'>If there is something that you simply love and must have and if that’s out of stock, drop us an email to hello@soezi.in or a what’s app on (+91) 9321678062 with product code. We promise to do everything we can to make it happen for you!</p>

                </div>
                </>
                }

                {/* reviwes */}

                <div className='text-yellow-500 text-xl flex mt-6'>
                    <span><GoStarFill/></span>
                    <span><GoStarFill/></span>
                    <span><GoStarFill/></span>
                    <span><GoStarFill/></span>
                    <span><GoStarFill/></span> 
                    <span className='text-sm text-gray-500 pl-2'>4.9(17 reviews)</span>
                </div>


            </div>
        </div>
        </div>

        {/* viedos */}
        <div className='bg-[#f7f7f7]  py-10 mb-10 w-full px-40 '>

            <div className='viedos py-8  mx-auto w-[1200px]'>

                <div className='text-4xl mb-10 font-[500] text-[#202025]'>
                <p>#NAILIT by moments </p>
                </div>

                <div className='flex'>
                <div className='1 h-[481px] mx-2 w-[218px]'>
                    <video width="218px"  height="387px"   src="https://cdn.shopify.com/videos/c/o/v/0a08f418a3454f6a83324da184cbe6d0.mp4" autoPlay muted loop playsInline className='rounded-xl' ></video>

                    <div className='bg-[#ffffff] px-8 mt-4 pt-2 pb-6'>
                        <p className='text-[14px]'> Champagne Kisses</p>
                        <p><span className='text-[15px] text-pink-600'>Rs. 799 </span> <span className='text-[12px] pl-2 line-through'>Rs.999</span></p>
                    </div>
                
                </div>

                <div className='2 h-[481px] mx-2 w-[218px]'>
                    <video  width="218px"  height="387px" autoPlay loop muted playsInline  src="https://cdn.shopify.com/videos/c/o/v/c2eaeae2598f46be9cb883fd017ca956.mp4" type="video/mp4"  className='rounded-xl'></video>

                    <div className='bg-[#ffffff] px-8 mt-4 pt-2 pb-6'>
                        <p className='text-[14px]'> Champagne Kisses</p>
                        <p><span className='text-[15px] text-pink-600'>Rs. 799 </span> <span className='text-[12px] pl-2 line-through'>Rs.999</span></p>
                    </div>
                
                </div>

                <div className='3 h-[481px]  mx-2 w-[218px]'>
                    <video width="218px"  height="387px"  src="https://cdn.shopify.com/videos/c/o/v/bc99a869f8cb4dccbf605e969602d604.mp4" type="video/mp4" autoPlay muted loop playsInline className='rounded-xl'></video>

                    <div className='bg-[#ffffff] px-8 mt-4 pt-2 pb-6'>
                        <p className='text-[14px]'> Champagne Kisses</p>
                        <p><span className='text-[15px] text-pink-600'>Rs. 799 </span> <span className='text-[12px] pl-2 line-through'>Rs.999</span></p>
                    </div>
                
                </div>

                <div className='4 h-[481px] mx-2 w-[218px]'>
                    <video width="218px"  height="387px"  src="https://cdn.shopify.com/videos/c/o/v/aa28e00e15984909a8304f5c26f45c1d.mp4" type="video/mp4" autoPlay muted playsInline className='rounded-xl'></video>

                    <div className='bg-[#ffffff] px-8 mt-4 pt-2 pb-6'>
                        <p className='text-[14px]'> Champagne Kisses</p>
                        <p><span className='text-[15px] text-pink-600'>Rs. 799 </span> <span className='text-[12px] pl-2 line-through'>Rs.999</span></p>
                    </div>
                
                </div>

                <div className='5 h-[481px] mx-2 w-[218px]'>
                    <video  width="218px"  height="387px"  src="https://cdn.shopify.com/videos/c/o/v/8165663991cb4295a2b7561938583ac7.mp4" type="video/mp4" autoPlay loop muted playsInline className='rounded-xl'></video>

                    <div className='bg-[#ffffff] px-8 mt-4 pt-2 pb-6'>
                        <p className='text-[14px]'> Champagne Kisses</p>
                        <p><span className='text-[15px] text-pink-600'>Rs. 799 </span> <span className='text-[12px] pl-2 line-through'>Rs.999</span></p>
                    </div>
                
                </div>

                </div>


            </div>

        </div>

        {/* Reviews */}

        <div className='w-[1170px] mx-auto'>
        <div className='w-full  mb-5'>

            <div className='1 w-full '>

            <div className='headingg mb-6 tracking-widest'>
                <p className='font-[500] text-2xl'>Customer Reviews</p>
            </div>

            <div className='stars w-full'>
                <div className='w-[80px] mx-auto'>
                <p className='font-bold text-5xl mb-2'>4.9</p>
                <div className='text-yellow-500 text-xl flex '>
                    <span><GoStarFill/></span>
                    <span><GoStarFill/></span>
                    <span><GoStarFill/></span>
                    <span><GoStarFill/></span>
                    <span><GoStarFill/></span> 
                </div>
                <p className='text-sm text-gray-500 pl-2'> {totalReviews} reviews</p>
                </div>

            </div>

            </div>


            {reviews.map((review)=>{
                const percentage =(review.count /totalReviews )*100;
            return(

                <div  key={review.rating} className=' mx-auto mt-4 w-[1200px]'>

                <div  className='flex w-full'>
                <div className='flex px-1 mt-[-4px]'>{review.rating} <span className='text-yellow-500 px-2'><GoStarFill/></span></div>
                <div className='flex relative'>    
                    <div className='h-2 w-[1088px] bg-gray-400'></div>
                    <div className='absolute top-0 z-40 h-2  bg-black ' style={{width:`${percentage}%`}}></div>
                    <span className='mt-[-6px] px-2'>{review.count}</span>
                </div>
                </div>
  

            </div>
            )})}
            



        </div>

        {/* searchBar */}
        <div className=' w-full mb-4 '>

            <div className='flex'>

            <div className='flex  w-full border-1 border-gray-300'>
            <div><CiSearch className='mt-2.5 text-xl mr-3' /></div>
            <div className='w-full py-2'>
                <input className='' type="text" placeholder='Search for reivews ' />
            </div>
            </div>
            <div className=' ml-4 border-1 text-sm border-gray-200 p-2'><FaChevronDown /></div>
               

        </div>

        </div>

        {/* write review button */}
        <div className='mb-10 w-full rounded  bg-black' >
            <button className='py-2 px-4 w-full  text-white'>Write A Review </button>
        </div>

        {/* users Reviews */}

        <div className='grid grid-cols-4 '>
            {userReviews.map((review, index)=>{
                return(

                    <div key={index} className='p-2 border-1 border-gray-200 my-3  h-fit w-[271px]'>
                        
                        <div className='font-bold'>{review.name}</div>
                        <div className='text-[12px]'>Aug 14,2007</div>

                        <div className='flex justify-between px-2 rounded mt-1.5 py-2 bg-gray-200'>
                            <div><span className='text-[12px]'>Rating {review.rating}/5</span></div>

                            <div className='flex text-yellow-500 pt-1'>
                                <span><GoStarFill/></span>
                                <span><GoStarFill/></span>
                                <span><GoStarFill/></span>
                                <span><GoStarFill/></span>
                                <span><GoStarFill/></span>
                            </div>

                        </div>

                        <div className='mt-2  text-[14px]'>
                                <p className=''>Although the nails are pretty, the glue for press ons doesnt hold up at all. Nails started <button onClick={()=>setShow(!show)}>{!show && <>...See more</>}</button> 
                                {show && 
                                <>
                                falling within 2 hours. Had to remove them all after reapplying for the third time.
                                <button onClick={()=>setShow(!show)}>...Show less</button>
                                </>
                                }
                                </p> 
                        </div>

                        <div className='mt-2 mb-2'>
                            <p className='flex justify-between text-[12px]'>Was this helpful? <div className='flex'>
                                <span onClick={()=>setUp(up+1)} className='px-2 flex'><LuThumbsUp />{up &&<>{up}</> }</span> 
                                <span onClick={()=>setDown(down+1)} className='flex'><LuThumbsDown />{down}</span>
                                </div></p>

                        </div>

                        

                    </div>

                )})

            }
             
            
            </div>
             <div className='w-[200px] mt-6 mx-auto mb-10'><button className='px-12 text-[14px] font-bold rounded py-2 border-1 border-gray-300'>Load more</button></div>


        </div>


        {/* swipper */}
        <div className='w-full py-10'>
        <div className='h-auto  w-full max-w-[1560px] mx-auto px-10 mb-8 '>

            <div className='text-4xl font-[500]'>
                <p className='mb-10'>You May Also Like</p>
            </div>

            <div className='w-full'>
                <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={40}
                slidesPerView={4}
                loop={true}
                >
                    <SwiperSlide>
                         <div>
                <div className='h-[362px] w-[362px] rounded-xl'>
                <img className='rounded-2xl' src="img1.webp" alt="" />
                </div>

                <div className='bg-[#f7f7f7] p-4'>
                    <p className='flex justify-center py-1'>Dress To Impress</p>
                     <div className='text-yellow-500 text-xl py-1 flex justify-center '>
                    <span><GoStarFill/></span>
                    <span><GoStarFill/></span>
                    <span><GoStarFill/></span>
                    <span><GoStarFill/></span>
                    <span><GoStarFill/></span> 
                    </div>

                    <div className='flex justify-center'>
                        <span className='text-pink-500 px-3'>Rs.7990</span> <span className='line-through text-sm'>Rs.999</span>
                    </div>

                </div>

                </div>
                    </SwiperSlide>

                    <SwiperSlide>
                         <div>
                <div className='h-[362px] w-[362px] rounded-xl'>
                <img className='rounded-2xl' src="img1.webp" alt="" />
                </div>

                <div className='bg-[#f7f7f7] p-4'>
                    <p className='flex justify-center py-1'>Dress To Impress</p>
                     <div className='text-yellow-500 text-xl py-1 flex justify-center '>
                    <span><GoStarFill/></span>
                    <span><GoStarFill/></span>
                    <span><GoStarFill/></span>
                    <span><GoStarFill/></span>
                    <span><GoStarFill/></span> 
                    </div>

                    <div className='flex justify-center'>
                        <span className='text-pink-500 px-3'>Rs.7990</span> <span className='line-through text-sm'>Rs.999</span>
                    </div>

                </div>

                </div>
                    </SwiperSlide>

                    <SwiperSlide>
                         <div>
                <div className='h-[362px] w-[362px] rounded-xl'>
                <img className='rounded-2xl' src="img1.webp" alt="" />
                </div>

                <div className='bg-[#f7f7f7] p-4'>
                    <p className='flex justify-center py-1'>Dress To Impress</p>
                     <div className='text-yellow-500 text-xl py-1 flex justify-center '>
                    <span><GoStarFill/></span>
                    <span><GoStarFill/></span>
                    <span><GoStarFill/></span>
                    <span><GoStarFill/></span>
                    <span><GoStarFill/></span> 
                    </div>

                    <div className='flex justify-center'>
                        <span className='text-pink-500 px-3'>Rs.7990</span> <span className='line-through text-sm'>Rs.999</span>
                    </div>

                </div>

                </div>
                    </SwiperSlide>

                    <SwiperSlide>
                         <div>
                <div className='h-[362px] w-[362px] rounded-xl'>
                <img className='rounded-2xl' src="img1.webp" alt="" />
                </div>

                <div className='bg-[#f7f7f7] p-4'>
                    <p className='flex justify-center py-1'>Dress To Impress</p>
                     <div className='text-yellow-500 text-xl py-1 flex justify-center '>
                    <span><GoStarFill/></span>
                    <span><GoStarFill/></span>
                    <span><GoStarFill/></span>
                    <span><GoStarFill/></span>
                    <span><GoStarFill/></span> 
                    </div>

                    <div className='flex justify-center'>
                        <span className='text-pink-500 px-3'>Rs.7990</span> <span className='line-through text-sm'>Rs.999</span>
                    </div>

                </div>

                </div>
                    </SwiperSlide>

                    <SwiperSlide>
                         <div>
                <div className='h-[362px] w-[362px] rounded-xl'>
                <img className='rounded-2xl' src="img1.webp" alt="" />
                </div>

                <div className='bg-[#f7f7f7] p-4'>
                    <p className='flex justify-center py-1'>Dress To Impress</p>
                     <div className='text-yellow-500 text-xl py-1 flex justify-center '>
                    <span><GoStarFill/></span>
                    <span><GoStarFill/></span>
                    <span><GoStarFill/></span>
                    <span><GoStarFill/></span>
                    <span><GoStarFill/></span> 
                    </div>

                    <div className='flex justify-center'>
                        <span className='text-pink-500 px-3'>Rs.7990</span> <span className='line-through text-sm'>Rs.999</span>
                    </div>

                </div>

                </div>
                    </SwiperSlide>

                    <SwiperSlide>
                         <div>
                <div className='h-[362px] w-[362px] rounded-xl'>
                <img className='rounded-2xl' src="img2.webp" alt="" />
                </div>

                <div className='bg-[#f7f7f7] p-4'>
                    <p className='flex justify-center py-1'>Dress To Impress</p>
                     <div className='text-yellow-500 text-xl py-1 flex justify-center '>
                    <span><GoStarFill/></span>
                    <span><GoStarFill/></span>
                    <span><GoStarFill/></span>
                    <span><GoStarFill/></span>
                    <span><GoStarFill/></span> 
                    </div>

                    <div className='flex justify-center'>
                        <span className='text-pink-500 px-3'>Rs.7990</span> <span className='line-through text-sm'>Rs.999</span>
                    </div>

                </div>

                </div>
                    </SwiperSlide>



                </Swiper>

               

                
            </div>

        </div>
        </div>


        {/* questions */}

        <div className='w-full h-auto  mx-auto py-6   border-b-1 border-[#202025] bg-[#f3f1f2]'>
            
            
            <div className='mx-auto w-130'>
                <p className='text-4xl'>Frequently asked <span className='font-bold'>questions</span></p>
            </div>

            <div className='flex justify-center'>
             <div className='w-[1177px] mx-auto mt-8'>
                {faqs.map((item , index)=>(
                    <div key={index}  className=''>

                        <div onClick={()=>toggle(index)} className={`flex justify-between px-3 ${active=== index ? 'border-none': ""} border-b-2 border-pink-500 my-6`}>
                            <p>{item.question}</p>
                            <span className='text-2xl'>{active=== index ? "-" : "+"}</span>
                        </div>

                        {active === index && 
                        <>
                        <div className=''>
                            <p className='border-b-2 border-pink-500 pb-3'>{item.answer}</p>
                        </div>
                        </>
                        }

                    </div>

                ))}
             </div>

            </div>

            <div className='flex my-8  w-full '>
                <div className='w-[1170px] flex justify-center mx-auto'>

                    <button className='h-[48px] w-[150px] text-white bg-pink-400 tracking-widest font-[500] rounded'>View All </button>
                </div>
                
            </div>

        </div>



    </div>
  )
}

export default ProductShopping;

