import React, {  useState } from 'react';
import { LiaGripLinesSolid } from "react-icons/lia";
import { RxCross1 } from "react-icons/rx";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { IoChevronDownSharp } from "react-icons/io5";
import Price from '../Filter/Price';
import Shape from '../Filter/Shape';
import Effect from '../Filter/Effect';
import  Kit  from '../Filter/Kit';
import Color from '../Filter/Color';

const Filterr = () => {
  const [right, setRight] = useState(false);
  const [featured, setFeatured] = useState(false);
  const [activeSection, setActiveSection] = useState(false);

  const items = [
    "Featured", "Best Selling", "Alphabetically,A-Z", "Alphabetically,Z-A",
    "Price, low to high", "Price, high to low", "Date, old to new", "Date, new to old"
  ];
  const [selected, setSelected] = useState(items[0]);

  return (
    <div className='mainn  '>

      {/* Small Devices */}
    <div className='main1 flex justify-center'>
    <div className='md:hidden flex justify-between w-full max-w-[500px] text-[15px] gap-10  p-5 tracking-wide'>

      {/* Toggle Button */}
      <div onClick={() => setRight(!right)} className='Filter&Product flex cursor-pointer'>
        <div className='line-toggle py-2 relative'>
          <div className={` h-1.5 w-1.5 absolute bottom-3.5 rounded-full bg-black ${right ? 'left-1' : 'left-4'} transform -translate-y-0.5 transition-all duration-500 ease-in-out`} />
          <div className={` h-1.5 w-1.5 absolute bottom-1 rounded-full bg-black ${right ? 'left-4' : 'left-1'} transform -translate-y-0.5 transition-all duration-500 ease-in-out`} />
          <div className='w-[25px] h-[0.5px] bg-black mb-2.5'></div>
          <div className='w-[25px] h-[1px] bg-black'></div>
        </div>
        <div className='span-of-filter pt-1'>
          <span className='p-2  px-2'>Filter and sort</span>
        </div>
      </div>

      {/* Product Count */}
      <div><h1>313 Products</h1>
      </div>

      {/* Filter Panel */}
      {right && (
        <div className='Showfilter overflow-y-auto  z-50 text-[#202025] w-76 absolute top-0 right-0 bg-[#ffffff] h-screen'>
          {/* Header */}
          <div className='flex justify-between p-5'>
            <div>
              <h1 className='font-[500] pb-1'>Filter And Sort</h1>
              <h1 className='text-[15px]'>313 Products</h1>
            </div>
            <div className='text-xl mb-5'>
              <button onClick={() => setRight(!right)}> <RxCross1 /></button>
            </div>
          </div>
          <hr className='text-gray-300' />

          {/* Active Section - PRICE */}
          {activeSection === "price" && (
            <Price activeSection={activeSection} setActiveSection={setActiveSection} />
          )}

          {/* Active Section - SHAPE */}
          {activeSection === "shape" && (
          <Shape activeSection={activeSection} setActiveSection={setActiveSection} />
          )}

          {/* Active Section - EFFECT */}
          {activeSection === "effect" && (
          <Effect value={activeSection} activeSection={activeSection} setActiveSection={setActiveSection} />
          )}

          {/* Active Section - KIT */}
          {activeSection === "kit" && (
          <Kit activeSection={activeSection} setActiveSection={setActiveSection} />
          )}

          {/* Active Section - COLOR */}
          {activeSection === "color" && (
          <Color activeSection={activeSection} setActiveSection={setActiveSection} />
          )}

          {/* Main Filter List */}
          {!activeSection && (
            <div className='pt-7 font-[500]'>
              {/* Price */}
              <div value={activeSection}  onClick={() => setActiveSection("price")} className='py-4 px-6 flex justify-between cursor-pointer'>
                <span>Price</span>
                <span className='mt-1'><HiOutlineArrowLongRight /></span>
              </div>
              <hr className='text-gray-300' />

              {/* Shape */}
              <div value={activeSection} onClick={() => setActiveSection("shape")} className='py-4 px-6 flex justify-between cursor-pointer'>
                <span>Shape</span>
                <span className='mt-1'><HiOutlineArrowLongRight /></span>
              </div>
              <hr className='text-gray-300' />

              {/* Effect */}
              <div value={activeSection} onClick={()=>setActiveSection("effect")} className='py-4 px-6 flex justify-between'>
                <span>Effect</span>
                <span className='mt-1'><HiOutlineArrowLongRight /></span>
              </div>
              <hr className='text-gray-300' />

              {/* Kit */}
              <div value={activeSection} onClick={()=>setActiveSection("kit")} className='py-4 px-6 flex justify-between'>
                <span>Kit</span>
                <span className='mt-1'><HiOutlineArrowLongRight /></span>
              </div>
              <hr className='text-gray-300' />

              {/* Color */}
              <div value={activeSection} onClick={()=>setActiveSection("color")} className='py-4 px-6 flex justify-between'>
                <span>Color</span>
                <span className='mt-1'><HiOutlineArrowLongRight /></span>
              </div>
              <hr className='text-gray-300' />

              {/* Sort By */}
              <div className='pt-4 px-4 flex justify-between'>
                <span>Sort by :</span>
                <div className='Featured w-44'>
                  <p onClick={() => setFeatured(!featured)} className='flex justify-between text-gray-500 cursor-pointer'>
                    {selected} <span className='mt-1 text-black'><IoChevronDownSharp /></span>
                  </p>
                </div>
              </div>

              {/* Featured Dropdown */}
              {featured && (
                <div className='flex relative justify-end'>
                  <div className='mainn h-55 w-45 mt-3 mr-4 absolute top-0 z-50 bg-white shadow-2xl p-2 border-1 border-black bottom-12 leading-6.5'>
                    <ul>
                      {items.map((item, index) => (
                        <li
                          key={index}
                          className={`cursor-pointer ${selected === item ? "bg-blue-200" : ""}`}
                          onClick={() => {
                            setSelected(item);
                            setFeatured(false);
                          }}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Buttons */}
              <div className='buttons border-t-1 pt-2 border-gray-300 flex justify-between absolute gap-8 bottom-5 px-8'>
                <div>
                  <button className='pt-3 px-1 text-gray-500'>Clear all</button>
                  <hr className='text-gray-500' />
                </div>
                <div className='py-3 px-8 bg-pink-400 text-white rounded tracking-widest'>
                  <button>APPLY</button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
    </div>


    




    </div>
    


  );
};

export default Filterr;
