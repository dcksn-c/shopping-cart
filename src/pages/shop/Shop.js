import React from 'react'
import { PRODUCTS } from '../../products'
import { Product } from './Product'

export const Shop = () => {
  return (
    <div className='shop'>
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
    </div>
  )
}
