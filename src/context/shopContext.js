import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../products';

export const ShopContext = createContext()

const getDefaultCart = () => {
    let result = PRODUCTS.map((productId) => {
        return productId.id
    }
)
    let cart = {}
    result.forEach((element) => {
        cart[element] = 0;
    })
    return cart
}

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1 }));
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1 }));
    }

    const updateCartAmount = ( newAmount, itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: newAmount}));
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const itemCount in cartItems) {
            if (cartItems[itemCount] > 0) {
                let itemPrice = PRODUCTS.find((product) => product.id === itemCount);
                totalAmount += cartItems[itemCount] * itemPrice.price
            }
        }
        return totalAmount;
    }

    const contextValue = { cartItems, addToCart, removeFromCart, updateCartAmount, getTotalCartAmount }

  return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
}
