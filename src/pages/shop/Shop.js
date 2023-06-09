import React from 'react'
import { PRODUCTS } from '../../products'
import { Product } from './Product'
import { motion } from 'framer-motion';

export const Shop = () => {
  return (
    <motion.div
      className='shop'
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:0.75, ease:'easeOut'}}>
        <div className='shopTitle'>
          <h1>Light Cones</h1>
        </div>
        <div className='products-container'>
          <div className='products'>
              {PRODUCTS.map((product) => (
                  <Product data={product} key={product.id}/>
              ))}
          </div>
        </div>
    </motion.div>
  )
}
