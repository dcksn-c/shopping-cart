import React from 'react'
import homepageText from '../../assets/images/homepage-material.webp'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Home = () => {
    const navigate = useNavigate();
  return (
    <motion.div 
      className='home'
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:0.75, ease:'easeOut'}}>
        <img className='homepage-text' src={homepageText} />
        <button className='homepage-btn' onClick={() => navigate('/shop')}>Shop Now</button>
    </motion.div>
  )
}
