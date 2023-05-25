import React, { useContext } from 'react'
import { ShopContext } from '../../context/shopContext';

export const CartItem = (props) => {
    const { id, name, price, src } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartAmount } = useContext(ShopContext);

  return (
    <div className='cartItem'>
        <img src={src} />
        <div className='description'>
            <p>
                <strong>{name}</strong>
            </p>
            <p>Credit Required: {(price*cartItems[id]).toLocaleString('en-US')}</p>
            <div className='countHandler'>
                <button onClick={() => removeFromCart(id)}>-</button>
                <input value={cartItems[id]} onChange={(e) => updateCartAmount(Number(e.target.value), id)}/>
                <button onClick={() => addToCart(id)}> +</button>
            </div>
        </div>
    </div>
  )
}
