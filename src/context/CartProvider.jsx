import React, { useState } from 'react'
import CartContext from './CartContext'

function CartProvider({children}) {
    const[cart,setCart]=useState([]);
    const allInCart=(product)=>{
        setCart([...cart,product])
    };
    const removeCart=(updatedCart)=>{
setCart(updatedCart);
    }
  return (
   <CartContext.Provider value={{cart,allInCart}}>{children}</CartContext.Provider>
  );
}

export default CartProvider