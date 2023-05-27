import React from 'react'
import homepageText from '../../assets/images/homepage-material.webp'
import { useNavigate } from 'react-router-dom';

export const Home = () => {
    const navigate = useNavigate();
  return (
    <div className='home'>
        <img className='homepage-text' src={homepageText} />
        <button className='homepage-btn' onClick={() => navigate('/shop')}>Shop Now</button>
    </div>
  )
}
