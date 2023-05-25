import React, { useContext } from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/shopContext'
import { CartItem } from './CartItem';
import { useNavigate } from 'react-router-dom';
import uniqid from 'uniqid';

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount()
  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className='cartItems'>
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} key={uniqid()}/>
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className='checkout'>
          <p>Total Credit Required: {totalAmount.toLocaleString('en-US')}</p>
          <button onClick={() => navigate('/shop')}>Continue Shopping</button>
          <button>Checkout</button>
        </div>)
        : (
          <h1>Your Cart is Empty</h1>
        )
      }
    </div>
  )
}
