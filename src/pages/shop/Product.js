import React, { useContext } from 'react'
import { ShopContext } from '../../context/shopContext';

export const Product = (props) => {
    const { id, name, price, src } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);
    // object bracket notation to get values from id properties in cartItems object
    // used bracket notation over dot notation because property names are dynamically determined
    const cartItemsAmount = cartItems[id]
  return (
    <div className='product'>
        <img src={src} />
        <div className='description'>
            <p>
                <strong>{name}</strong>
            </p>
            <p>Credit Required: {price.toLocaleString('en-US')}</p>
        </div>
        <button className='addToCartBtn' onClick={() => addToCart(id)}>Add to Cart {cartItemsAmount > 0 && <>({cartItemsAmount})</>}</button>
    </div>
  )
}
