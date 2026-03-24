import React from 'react'
import Navbar from '../components/Navbar'
import { transform } from 'motion/react'
import { motion, AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';
import img from '../assets/img1 (1).png';
import Footer from '../components/footer';
import { useNavigate } from 'react-router-dom';
function Home() {
  const navigate = useNavigate();
  return (
    <div className='relative min-h-screen overflow-x-hidden bg-white text-black'>
    <Navbar/>
    {/*top section*/}
      <section className='max-w-7xl mx-auto px-8 pt-32 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center'>

<div className="flex flex-col items-start text-left z-10 relative">
  <motion.div
  initial={{ opacity: 0, y: -60 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.9}}
  whileHover={{rotateX: 7, rotateY: -7}}
  className = "transform-gpu"
  style ={{transformStyle: "preserve-3d"}}>
    <motion.h1 className='text-5xl lg:text-6xl font-extrabold leading-tight
    bg-gradient-to-br from-black/90 via-black/60 to-black/90
    bg-clip-text text-transparent'
    whileHover={{y: -4}}
    style={{
      transform: "translateZ(40px)",
      textShadow: "0 18px 40px rgba(0,0,0,0.25)",
    }}
    > Unlock Smart <br/> AI Notes </motion.h1>
    <motion.p whileHover={{y: -2}}
      className='text-lg mt-6 text-gray-600 max-w-md
      bg-gradient-to-br from-gray-700 via-gray-600/80 to-gray-700
      bg-clip-text text-transparent'
      style={{
        transform: "translateZ(40px)",
        textShadow: "0 18px 40px rgba(0,0,0,0.25)",
      }}
    >
      Transform your learning experience with our cutting-edge AI-powered note-taking app.
    </motion.p>
    <motion.button 
    onClick={() => navigate('/notes')}
                    whileHover={{
                        y : -10,
                        rotateX : 10,
                        rotateY : -10,
                        scale : 1.05
                    }}
                    whileTap={{scale: 0.95}}
                    transition={{type: "spring", stiffness: 200, damping: 18}}
                        className='mt-10 px-10 py-3 rounded-xl
                    flex items-center gap-3 
                    bg-gradient-to-r from-black/90 via-black/60 to-black/90
                    border border-white/10
                    text-white font-semibold text-lg
                    shadow-[0_25px_60px_rgba(0,0,0,0.7)]'>
                       
                        Get Started
                    </motion.button>
  </motion.div>
</div>

<motion.div
   initial={{ opacity: 0, x: -60 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.9}}
  whileHover={{
    y: -12,
    rotateX: 7, 
    rotateY: -7,
  scale: 1.05,}}
  className = "transform-gpu"
  style ={{transformStyle: "preserve-3d"}}>
<div className='overflow-hidden'>
{/*<img src ={img} alt= "img"
style ={{transform: "translateZ(35px)"}} />*/}
</div>
</motion.div>
      </section>
      { /*bottom section*/}
      <section className = 'max-w-6xl mx-auto py-32 px-8 grid grid-cols-1 md:grid-cols-3 gap-10'>
        <Feature icon ="📘" title= "Exam Notes" des="Create and manage your exam notes with our intuitive interface." />
        <Feature icon="📊" title="Mind Maps & Graphs" des ="Visualize your study material with interactive mind maps and graphs." />
        <Feature icon="📩" title="With Download Feature" des ="Download your generated study materials for offline access." />              
       
      </section>
       <Footer />
    </div>
  )

}
function Feature({icon, title, des}) {
    return (
        <motion.div 
         whileHover={{
                    y : -12,
                    rotateX : 10,
                    rotateY : -10,
                    scale : 1.05
                }}
                transition={{type: "spring", stiffness: 200, damping: 18}}
        className='relative rounded-2xl p-6
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
export default Home