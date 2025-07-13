import React, {  useState } from 'react'

const Auth = () => {

  const[register , setRegister]=useState(false);
  const[userName ,setUserName]=useState('');
  const[email , setEmail]=useState('');
  const[password, setPassword]=useState('');


  const handleRegister = async(e)=>{
    try {

      const res = await fetch('http://localhost:8080/api/register',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({userName,email,password})
      });

      const data =await res.json();

      if(res.ok){
        console.log("Registered SuccessFully" ,data);
        
      }else{
        console.error("Registered Failed",data.message);
        
      };
      


    } catch (error) {
      console.error('Error ',error);
      
    }
  }

  return (
    <div className='bg-[#f5f5f5] flex  justify-center items-center h-screen' >

      {/* login form */}
      {!register ? 
       <div className=' py-10 bg-white rounded-xl border-black px-10'>
        <form  action="">

            <div className='flex justify-center'>
            <img className='h-15 w-35 ' src="SOEZI-LOGO.avif" alt="" />
            </div>
     

          <div className='pt-10'>
            <h1 className='font-[500] text-[21px]'>Sign in </h1>
            <h2 className='text-[14px] text-[#000000A8] pt-1.5'>Enter your email and Password To Into Login SOEZI </h2>
          </div>

          <div>
            <input className='border w-full mt-4 py-3 flex items-center pl-2 rounded' type="email" placeholder='Email' />
          </div>

          <div>
            <input className='border w-full mt-4 py-3 flex items-center pl-2 rounded' type="password" placeholder='Password' />
          </div>

          <div>
            <button className='bg-blue-700 text-white w-full mt-3 py-2 rounded'>Countinue</button>
          </div>

          <div className='pt-3 flex justify-center'>
            <p>Don't Have account <button type='button' value={register} onClick={()=>{setRegister(!register); console.log("hello");
            }} className='text-blue-800  hover:border-b'>Register</button> </p>
          </div>
          


          <div className='flex gap-3'>
            <span><button className='text-blue-800 mt-4'>Privacy</button></span>
            <span><button className='text-blue-800 mt-4' >Terms</button></span>
          </div>

          

        </form>
      </div>
      :
      // Register Form 
      <div>
        <form action="" onSubmit={handleRegister}>
        {register && 
        <>
        <div className='bg-white px-8 py-10 rounded-xl'>

          <div className='flex justify-center'>
            <img className='h-15 w-35 ' src="SOEZI-LOGO.avif" alt="" />
            </div>
     

          <div className='pt-10'>
            <h1 className='font-[500] text-[21px]'>Sign in </h1>
            <h2 className='text-[14px] text-[#000000A8] pt-1.5'>Enter Your UserName , Email , Password To Register SOEZI</h2>
          </div>

          <div>
            <input value={userName} onChange={(e)=>setUserName(e.target.value)} className='border w-full mt-4 py-3 flex items-center pl-2 rounded' type="text" placeholder='User Name' />
          </div>
          <div>Hello</div>

          <div>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} className='border w-full mt-4 py-3 flex items-center pl-2 rounded' type="email" placeholder='Email' />
          </div>

          <div>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} className='border w-full mt-4 py-3 flex items-center pl-2 rounded' type="password" placeholder='Password' />
          </div>

          <div>
            <button className='bg-blue-700 text-white w-full mt-3 py-2 rounded'>Countinue</button>
          </div>

          <div className='pt-3 flex justify-center'>
            <p>Already Have an account <button type='button' value={register} onClick={()=>{setRegister(!register); console.log("hello");
            }} className='text-blue-800  hover:border-b'>Login</button> </p>
          </div>
          


          <div className='flex gap-3'>
            <span><button className='text-blue-800 mt-4'>Privacy</button></span>
            <span><button className='text-blue-800 mt-4' >Terms</button></span>
          </div>

        </div>
        </>
        }
     </form>
     </div>

      }
      {/* <div className=' py-10 bg-white rounded-xl border-black p-8'>
        <form action="">

    
            <div className='flex justify-center'>
            <img className='h-15 w-35 ' src="SOEZI-LOGO.avif" alt="" />
            </div>
     

          <div className='pt-10'>
            <h1 className='font-[500] text-[21px]'>Sign in </h1>
            <h2 className='text-[14px] text-[#000000A8] pt-1.5'>Enter your email and we'll send you a verification code</h2>
          </div>

          <div>
            <input className='border w-full mt-4 py-3 flex items-center pl-2 rounded' type="email" placeholder='Email' />
          </div>

          <div>
            <button className='bg-blue-700 text-white w-full mt-3 py-2 rounded'>Countinue</button>
          </div>

          <div className='pt-3 flex justify-center'>
            <p>Don't Have account <button type='button' value={register} onClick={()=>{setRegister(!register); console.log("hello");
            }} className='text-blue-800  hover:border-b'>Register</button> </p>
          </div>
          


          <div className='flex gap-3'>
            <span><button className='text-blue-800 mt-4'>Privacy</button></span>
            <span><button className='text-blue-800 mt-4' >Terms</button></span>
          </div>

          

        </form>
      </div> */}

      {/* Register Form */}
      {/* <form action="">
        {register && 
        <>
        <div>hello</div>
        </>
        }
     </form> */}

    </div>
  )
}

export default Auth;