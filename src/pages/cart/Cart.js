import React, { useContext } from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/shopContext'
import { CartItem } from './CartItem';
import { useNavigate } from 'react-router-dom';
import uniqid from 'uniqid';

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  const checkoutMsg = () => {
    alert('Thanks for your purchase!')
  }

  return (
    <div className='cart'>
      <div className='cartTitle'>
        <h1>Cart Items</h1>
      </div>
      <div className='cart-container'>
        <div className='cartItems'>
          {PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem data={product} key={uniqid()}/>
            }
          })}
        </div>
      </div>
      {totalAmount > 0 ? (
        <div className='checkout'>
          <h2>Total Credit Required: {totalAmount.toLocaleString('en-US')}</h2>
          <button onClick={() => navigate('/shop')}>Continue Shopping</button>
          <button onClick={() => checkoutMsg()}>Checkout</button>
        </div>)
        : (
          <div className='empty-cart'>
            <h1>Your Cart is Empty</h1>
          </div>
        )
      }
    </div>
  )
}
