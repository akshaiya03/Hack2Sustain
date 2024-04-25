import React from 'react'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
    const navigate=useNavigate();
  return (
    <div>
      <div className='md:flex'>
      <div className='md:w-[700px]'>
        <h1 className='sm: font-bold text-4xl sm: text-center pt-14'>Loren epsum</h1>
      <p className='sm: text-2xl p-5 m-2 text-center md:text-3xl font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ornare mauris arcu, in consectetur tortor cursus et. Vestibulum aliquet felis id urna consectetur blandit. Nunc ex arcu, mollis sed lacinia at, porttitor sed justo. Nulla tempor mauris in convallis hendrerit. Nulla aliquet sapien ac metus tincidunt auctor.</p>
      <button
      onClick={()=>{
        navigate("/login")
     }}
      className=' md: bg-blue-500 text-white text-xl rounded-lg p-5 ml-32'>Get started</button>
      </div>
      <div>
      
      </div>
      </div>
    
    </div>
    
  )
}

export default LandingPage
