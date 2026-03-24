
import React from 'react'
import { motion } from 'motion/react';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserdata } from '../redux/userSlice';
import axios from 'axios';
import { serverUrl } from '../App';

function Footer() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignOut = async () => {
    try {
      await axios.get(serverUrl + '/api/auth/logout',{withCredentials:true} )
    dispatch(setUserdata(null));
    navigate('/auth')
    }
        catch (error) {
      console.error('Error signing out:', error);
    }
  };
  return (
    <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{opacity: 1, y:0}}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className='z-10 mx-6 mb-6 mt-24
    rounded-2xl
    bg-gradient-to-br from-black/90 via-black/80 to-black/90
    backdrop-blur-2xl
    border border-white/10
    px-8 py-8
    shadow-[0_25px_60px_rgba(0,0,0,0.7)]'>
     <div className='grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-8'>  
        <motion.div 
        whileHover = {{rotateX: 6, rotateY: -6}}
        className='flex flex-col gap-4 transform-gpu'
        style ={{transformStyle: "preserve-3d"}}>
            <div className='flex item-center gap-3 cursor-pointer'
            style = {{transform: "translateZ(20px)"}}>
                <img src ={logo} alt="logo" className='w-10 h-10 object-contain'/>
                <span className=' text-lg font-semibold
                bg-gradient-to-br from-white via-gray-300 to-white
                bg-clip-text text-transparent'
                style={{textShadow: "0 6px 18px rgba(0,0,0,0.4)"}}>
                    Notio.<span className='text-blue-500'>Ai</span>
                </span>
            </div>
<p className='text-sm text-gray-400 max-w-sm'>
            Notio.Ai is your ultimate study companion, leveraging the power of AI to help you create, organize, and optimize your study materials for maximum learning efficiency.
             </p>
        </motion.div>
      <div className='text-center'>
      <h1 className='text-sm font-semibold text-white mb-4'> Quick Links</h1>
        <ul className='space-y-3 text-sm'>
          <li onClick={() => navigate('/notes')} className='text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer'>
            Notes
          </li>
          <li onClick={() => navigate('/history')} className='text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer'>
           History
          </li>
          <li onClick={() => navigate('/pricing')} className='text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer'>  
            Add Credit 
          </li>
        </ul>

      </div>
        <div className='text-center'>
      <h1 className='text-sm font-semibold text-white mb-4'> Support & Account </h1>
        <ul className='space-y-3 text-sm'>
          <li onClick={() => navigate('/auth')} className='text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer'>
            Sign In 
          </li>
          <li onClick={() => handleSignOut()} className='text-red-500/80 hover:text-red-400 hover:translate-x-1 transition-all duration-300 cursor-pointer'>
            Sign Out 
          </li>
          <li className='text-gray-400 hover:text-white transition-all duration-300 cursor-pointer'>  
            support@notio.ai
          </li>
        </ul>

      </div>
      </div>
      <div className='my-6 h-px bg-white/10'/>
      <p className='text-center text-sm text-gray-500'> &copy;{new Date().getFullYear()} Notio.Ai. All rights reserved.</p>
    </motion.div>
  )
}
export default Footer