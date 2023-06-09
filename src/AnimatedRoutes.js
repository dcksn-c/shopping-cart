import React from 'react';
import { Shop } from './pages/shop/Shop';
import { Cart } from './pages/cart/Cart';
import { Home } from './pages/home/Home';
import { AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';

function AnimatedRoutes() {
    const location = useLocation();

  return (
    <AnimatePresence initial={false} mode={'wait'}>
        <Routes location={location} key={location.pathname}>
            <Route path='/shopping-cart' element={<Home />}/>
            <Route path='/shop' element={<Shop />}/>
            <Route path='/cart' element={<Cart />}/>
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes