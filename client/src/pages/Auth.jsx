import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { motion } from "motion/react";
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../utils/firebase';
import { serverUrl } from '../App';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUserdata } from '../redux/userSlice';

function Auth() {
    const dispatch = useDispatch();
    const handelGoogleAuth = async() => {
        try {
            const response = await signInWithPopup(auth, provider);
            const user = response.user;
            const name = user.displayName;
            const email = user.email;
            const result = await axios.post(serverUrl +"/api/auth/google", { name, email},{
                withCredentials: true
            })
            dispatch(setUserdata(result.data));
           
        } catch (error) {
            console.error("Google Sign-In Error:", error);
        }
    }
  return (
    <div className='min-h-screen overflow-hidden bg-white text-black px-4 py-8'>
        <motion.header 
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className='max-w-7xl mx-auto mt-8
        rounded-2xl
        bg-black/80 backdrop-blur-xl
        border border-white/10
        px-6 py-4
        shadow-[0_20px_45px_rgba(0,0,0,0.6)]'>
            <h1 className='text-2xl font-bold 
            bg-gradient-to-r from-white via-gray-300 to-white text-transparent bg-clip-text text-center'>
                Examnotes.AI - Your Ultimate Study Companion:
            </h1>
<p className='text-sm text-gray-300 mt-1'>
                Unlock your full potential with our AI-powered study tools.
            </p>
        </motion.header>
        <main className='max-w-7xl mx-auto py-10 grid grid-cols-1 md:grid-cols-2 gap-20 items-center'>
            {/* left content */}
            <motion.div
             initial={{ opacity: 0, x: -50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}>
                <h1 className='text-5xl lg:text-6xl font-extrabold leading-tight
                bg-gradient-to-br from-black/90 via-black/60 to-black/90
                bg-clip-text text-transparent'> Unlock Smart <br/> AI Notes </h1>
                <motion.button 
                onClick={handelGoogleAuth}
                whileHover={{
                    y: -5,
                    scale: 1.02,
                    boxShadow: "0 30px 60px rgba(0,0,0,0.8)"
                }}
                whileTap={{scale: 0.98}}
                transition={{type: "spring", stiffness: 300, damping: 20}}
                    className='mt-10 px-10 py-3 rounded-xl
                flex items-center gap-3 
                bg-gradient-to-r from-black/90 via-black/60 to-black/90
                border border-white/10
                text-white font-semibold text-lg
                shadow-[0_25px_60px_rgba(0,0,0,0.7)]'>
                    <FcGoogle size ={24} />
                    Continue with Google
                </motion.button>
                <p className='mt-6 max-w-xl text-lg
                bg-gradient-to-br from-gray-700 via-gray-500/80 to-gray-700
                bg-clip-text text-transparent'>
                    Join thousands of students who have already transformed their learning experience with our AI-powered study tools.
                </p>
                <p className='mt-4 text-medium text-gray-500'>
                    Register Now to get <span className='font-semibold'>100 Free Credits</span>
                </p>
            </motion.div>

            {/* right content */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
                <Feature icon="🎁" title="100 Free Credits" des ="Start your journey with 100 free credits to explore our AI-powered study tools." />
                <Feature icon="📜" title="AI Powered Notes" des ="Generate comprehensive notes using our AI-powered study tools." />
                <Feature icon="📊" title="Mind Maps & Graphs" des ="Visualize your study material with interactive mind maps and graphs." />
                <Feature icon="📩" title="With Download Feature" des ="Download your generated study materials for offline access." />                
            </motion.div>
        </main> 
    </div>
  )
}
function Feature({icon, title, des}) {
    return (
        <motion.div 
         whileHover={{
                    y: -5,
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.6)"
                }}
                transition={{type: "spring", stiffness: 300, damping: 20}}
        className='relative rounded-b-2xl p-6
        bg-gradient-to-br from-black/90 via-black/80 to-black/90
        backdrop-blur-2xl
        border border-white/10
        shadow-[0_30px_80px_rgba(0,0,0,0.7)]
        text-white'
        style={{ transformStyle: "preserve-3d" }}>
            <div className='absolute insert-0 rounded-2xl
            bg-gradient-to-br from-white/20 to-transparent
            opacity-0 hover:opacity-100 transition-opacity 
            pointer-events-none'/>
                <div className='relative z-10' style={{transform: "translateZ(30px)"}}>
                    <div className='text-4xl mb-4'>{icon}</div>
                    <h3 className='text-xl font-bold mb-2'>{title}</h3>
                    <p className='text-sm text-gray-300'>{des}</p>
                </div>
      

        </motion.div>
    )
}
export default Auth