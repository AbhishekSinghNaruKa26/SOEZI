
import { useEffect, useState } from 'react';
import axios from 'axios';


const ProductPage = () => {
    
    const[showForm , setShowForm]=useState(false);
    const[products  ,setProducts]=useState([])
    const[formData , setFormData]=useState({
        image:'',
        title:'',
        rating:'',
        reviews:'',
        price:'',
        orignalPrice:''
    });


//fetch all products from backend
    const fetchProducts = async()=>{
        try {

            const res =  await axios.get('http://localhost:8080/api/getAll');
            setProducts(res.data.products);
            

        } catch (error) {
            console.error("Error",error)
        }

    }

        // add a product 
        const handleAddProducts = async()=>{
            try {

                await axios.post('http://localhost:8080/api/product' ,{
                    image:formData.image,
                    title:formData.title,
                    rating:parseFloat(formData.rating),
                    reviews:parseFloat(formData.reviews),
                    price:parseFloat(formData.price),
                    orignalPrice:parseFloat(formData.orignalPrice)
                });

                setShowForm(false);
                setFormData({title:'' ,rating:'' , price:'' });
                fetchProducts();


            } catch (error) {
                console.error("Error",error)
            }
        }

        useEffect(()=>{
            fetchProducts();
        },[])


  return (
    <div className="mainn p-4">

        <div className="">
            <div className="head flex justify-between">
            <div className="flex items-center text-xl font-bold tracking-wider ">Product Management</div>
            <div><button value={showForm} onClick={()=>setShowForm(!showForm)} className="px-5 py-2 bg-blue-600 rounded-xl text-white"> + Add Product </button></div>
            </div>

            {showForm&& 
            <>
            <div className='border bg-gray-100 w-100 rounded-2xl bottom- z-50 absolute mb-30 left-110 py-3 px-12 '>

                <div className='flex justify-end text-xl p-    '><button value={showForm} onClick={()=>setShowForm(!showForm)}>X</button></div>
              <div className='flex justify-center text-xl mb-4'>Product Details </div>


              <div>

                <input type="text"
                       placeholder='Image Url'
                       className='block rounded border px-2 w-full border-black py-1 my-2'
                       value={formData.image}
                       onChange={(e)=>setFormData({...formData,image:e.target.value})}
                />


                <input type="text" 
                       placeholder='Title'
                       value={formData.title}
                       className='block rounded border px-2 border-black  my-4 py-1 w-full'
                       onChange={(e)=>setFormData({...formData,title:e.target.value})}
                />

                <input type="number"
                       placeholder='Rating'
                       className='block rounded border w-full px-2 border-black py-1 my-4'
                       value={formData.rating}
                       onChange={(e)=>setFormData({...formData,rating:e.target.value})}
                 />

                 <input type="text"
                        placeholder='Reviews'
                        className='block rounded border px-2 w-full border-black py-1 my-4'
                        value={formData.reviews}
                        onChange={(e)=>setFormData({...formData,reviews:e.target.value})}
                 />

                
                 <input type="number"
                        placeholder='price'
                        className='block rounded border px-2 w-full border-black py-1 my-4'
                        value={formData.price}
                        onChange={(e)=>setFormData({...formData,price:e.target.value})}
                  />

                  <input type="text"
                         placeholder='Enter Orignal Price'
                         className='block rounded border px-2 w-full border-black py-1 my-4'
                         value={formData.orignalPrice}
                         onChange={(e)=>setFormData({...formData,orignalPrice:e.target.value})}
                 />



              </div>


              <div className='flex justify-center mt-6 '>
                <button onClick={handleAddProducts} className='px-6 py-2 rounded-2xl bg-blue-700 text-white'>
                    Add Product 
                </button>
              </div>

            </div>
            </>
            }

            <div className='scrollbar-hide overflow-y-auto h-160'> 
            <div className="bg-gray-600   mt-4 rounded-xl">
         
                <ul className="flex justify-between h-15 items-center px-4  text-white  ">
                    <li>Image</li>
                    <li>Title</li>
                    {/* <li>Rating</li> */}
                    {/* <li>Reviews</li> */}
                    <li className='pl-28'>Price</li>
                    <li>Orignal Price</li>
                    <li>Action</li>
                </ul>
            </div>

            {products.map((product , index)=>(
                <div key={index} className='bg-gray-300 mt-2 rounded-xl px-4 py-2 flex justify-between  '>
                    <div className=''>{product.image}</div>
                    <div className='w-65 '>{product.title}</div>
                    <div className='w-10'>{product.price}</div>
                    <div className=''>{product.orignalPrice}</div>
                    <div>
            <button className="px-2  py-1 bg-white rounded-3xl border">Delete</button>
          </div>
                </div>
            ))}

            </div>

          

        </div>

    </div>
  )
}

export default ProductPage;