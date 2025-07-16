import { useState } from "react"
import ProductPage from "./ProductPage";
import OrderPage from "./OrderPage";
import UserPage from './UserPage'


const AdminDashboard = () => {

    const[activeTab, setActiveTab]=useState('product');

    

  return (
  <div className="mainn bg-[#f5f5f5]">

    <div className="p-6">

        <div className="header flex justify-between py-3">
            <div className="flex items-center">Admin Pannel</div>
            <div>
            <button className="px-6 py-2 bg-pink-500  text-white rounded-xl">Logout</button>
            </div>
        </div><hr />

        <div className="grid grid-cols-[210px_1fr]"> 

        <div className="dashboard Buttons p-3 mt-4  text-white h-screen bg-pink-500 w-55">

        
            <div className="flex justify-center font-bold text-2xl ">Dashboard</div>
            <div  onClick={()=>setActiveTab('product')} className="pt-6 text-lg hover:text-black">Product Management</div>
            <div onClick={()=>setActiveTab('order')} className="pt-6 text-lg hover:text-black">Order Management</div>
            <div  onClick={()=>setActiveTab('user')} className="pt-6 text-lg hover:text-black">User Management</div>


        </div>

        <div className="Details p-4 h-screen bg-white mx-4  mt-4">

            {activeTab === 'product' && 
            <>
            <div>
                <ProductPage />
            </div>
            </>
            }

            {activeTab === 'order' &&
            <>
            <OrderPage />
            </>
            }

            {activeTab=== 'user' && 
            <>
            <UserPage />
            </>}
        </div>

        </div>

    </div>

  </div>
  )
}

export default AdminDashboard