import React from 'react'
import Navbar from '../components/Navbar'
import { motion } from 'motion/react';
import Footer from '../components/footer';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { serverUrl } from '../App';
import Topicform from '../components/Topicform';

function Notes() {
  const navigate = useNavigate();
  const {userData} = useSelector((state) => state.user);
  const credits = userData ? userData.credits : 0;
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [result, setResult] = React.useState(null);

  return (

    <div className='min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 px-6 py-8'>
      <motion.header 
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className='mb-12
        rounded-2xl
        bg-black/80 backdrop-blur-xl
        border border-white/10
        px-8 py-6
        shadow-[0_20px_45px_rgba(0,0,0,0.6)] items-start
        flex md:items-center justify-between flex-col md:flex-row '>
          <div  onClick={() => navigate('/')} className='cursor-pointer'>
            <h1 className='text-2xl font-bold 
            bg-gradient-to-r from-white via-gray-300 to-white text-transparent bg-clip-text text-center'>
              Create AI Powered Notes Effortlessly
            </h1>
<p className='text-sm text-gray-300 mt-1'>
                Unlock your full potential with our AI-powered study tools.
            </p>
          </div>
          <div className='flex items-center gap-4 flex-wrap '>
            <button className='flex items-center gap-2
            px-4 py-2 rounded-full  bg-white/10 
            border border-white/20
            hover:bg-white/20
            transition-colors duration-300'
            onClick={() => navigate('/pricing')}>
            <span className='text-base'> 🔷</span>
                    <span className='text-white '>{credits}</span>
                    <motion.span whileHover={{scale: 1.15}} whileTap={{scale: 0.97}} className='ml-2 h-5 w-5 rounded-full justify-center items-center flex
                     bg-white text-white text-xs font-bold '>
                      ➕
                      
                    </motion.span>
            </button>
            <button className='px-4 py-3 rounded-full
            text-sm font-medium
            text-white 
            bg-white/10 border border-white/20
            hover:bg-white/20
            transition
            flex items-center gap-2'
            onClick={() => navigate('/history')}
            > Your Notes 📘</button>
          </div>            
        </motion.header>

        <motion.div
        className='mb-12 '>
          <Topicform loading= {loading} setResult={setResult} setLoading={setLoading} setError={setError}  />
        </motion.div>
        {(!result) && (
          <motion.div whileHover={{scale: 1.02}}
          className='
          h-64
          rounded-2xl
          flex flex-col items-center justify-center
          bg-white/60 backdrop-blur-lg
          border border-dashed border-gray-300
          text-gray-500
          shadow-inner '>
            <span className='text-4xl mb-3'></span>
            <p className='text-sm'>
              Generated Notes will be appearing here ! </p>
          </motion.div>
        )}
    </div>
  )
}

export default Notes