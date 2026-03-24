import React from 'react'
import { AnimatePresence, motion } from 'motion/react';
import logo from '../assets/logo.png';
import { useSelector,useDispatch } from 'react-redux';
import axios from 'axios';
import { serverUrl } from '../App';
import { setUserdata } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';
function Navbar() {
  const {userData} = useSelector((state) => state.user);
  const credits = userData ? userData.credits : 0;
  const [showCredits, setShowCredits] = React.useState(false);
  const [showProfile, setShowProfile] = React.useState(false);
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
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
    className='relative z-20 mx-6 mt-6
    rounded-2xl 
    bg-gradient-to-br from-black/90 via-black/80 to-black/90
    backdrop-blur-2xl
    border border-white/20
    shadow-[0_22px_55px_rgba(0,0,0,0.75)]
    flex items-center justify-between px-8 py-4'>
 {/* left side */}
 <div className='flex items-center gap-3'>
    <img src ={logo} alt="Notio.Ai" className='w-10 h-10'/>
    <span className='text-lg hidden md:block font-semibold
    text-white'>Notio.<span className='text-blue-500'>Ai</span>
    </span>
 </div >
 <div className='flex items-center gap-6 relative'>
    <div className= 'relative'>
      <motion.div 
      onClick={() => {setShowCredits(!showCredits); setShowProfile(false)}}
      whileHover={{ scale: 1.15 }} whileTap={{scale: 0.97}} className='flex items-center
      px-4 py-2 rounded-full
      bg-white/10
      border border-white/10
      text-white text-sm
      shadow-md
      cursor-pointer'>
        <span className= 'text-base'> 🔷</span>
        <span>{credits}</span>
        <motion.span whileHover={{scale: 1.15}} whileTap={{scale: 0.97}} className='ml-2 h-5 w-5 rounded-full justify-center items-center flex
         bg-white text-black text-xs font-bold '>
          ➕
          
        </motion.span>
      </motion.div>
  <AnimatePresence>
{ showCredits && (
        <motion.div 
        initial = {{opacity: 0, y: -10, scale: 0.95}}
        animate = {{opacity: 1, y: 0, scale: 1}}
        exit = {{opacity: 0, y: -10, scale: 0.95}}
        transition={{duration: 0.4, ease: "easeInOut"}}
        className='absolute  right-0 w-64 mt-8 p-4 rounded-2xl 
        bg-black/90 backdrop-blur-xl border border-white/10
        shadow-[0_25px_60px_rgba(0,0,0,0.7)]
        text-white'>
            <h4 className='font-semibold mb-2'>Buy Credits</h4>
            <p className= 'text-sm text-gray-300 mb-4'>Purchase credits to experience max of our features</p>
            <button 
             onClick={() => {setShowCredits(false); navigate('/pricing')}}  
             className='w-full py-2 rounded-lg bg-gradient-to-br from-white to-gray-200
            text-black font-semibold
            hover:opacity-80'>
              Buy Credits
            </button>
      </motion.div>
)}
  </AnimatePresence>
    </div>
 {userData && (
 <div className= 'relative'>
      <motion.div 
      onClick={() => { setShowProfile(!showProfile); setShowCredits(false); }}
      whileHover={{ scale: 1.1 }} whileTap={{scale: 0.97}} className='flex items-center
      px-4 py-2 rounded-full
      bg-white/10
      border border-white/10
      text-white text-sm
      shadow-md
      cursor-pointer'>
        <span className= 'text-lg'> {userData.name.slice(0, 1).toUpperCase()}</span>
      </motion.div>

      <AnimatePresence>
{ showProfile && (
        <motion.div 
        initial={{opacity: 0, y: -10, scale: 0.95}}
        animate={{opacity: 1, y: 0, scale: 1}}
        exit={{opacity: 0, y: -10, scale: 0.95}}
        transition={{duration: 0.4, ease: "easeInOut"}}
        className='absolute right-0 w-64 mt-6 p-2 rounded-2xl 
        bg-black/90 backdrop-blur-xl border border-white/10
        shadow-[0_25px_60px_rgba(0,0,0,0.7)]
        text-white flex flex-col'>
            <div className='px-4 py-3 mb-1'>
               <h4 className='font-semibold text-white text-base'>{userData.name}</h4>
               <p className='text-xs text-gray-400 mt-1'>Manage your account</p>
            </div>
            
            <div className="h-px bg-white/10 mx-2 mb-2"></div>
            
            <MenuItem text="Profile Settings" onClick={() => setShowProfile(false)}/>
            <MenuItem text="History" onClick={() => {setShowProfile(false); navigate('/history')}}/>
            
            <div className="h-px bg-white/10 mx-2 my-2"></div>
            
            <MenuItem text="Sign out" red onClick={() => handleSignOut()}/>
      </motion.div>
)}
  </AnimatePresence>
 </div>
 )}
 </div>
    </motion.div>
  )
}


function MenuItem({onClick, text, red}) {
  return(
    <div 
    onClick={onClick}
    className={`w-full text-left px-5 py-3 cursor-pointer
    text-sm transition-all duration-300 rounded-lg hover:translate-x-1 ${
    red 
    ? "text-red-400 hover:bg-red-500/10 hover:text-red-300"
    : "text-gray-200 hover:bg-white/10 hover:text-white"
    }`}>
{text}
    </div>
  )
}
export default Navbar