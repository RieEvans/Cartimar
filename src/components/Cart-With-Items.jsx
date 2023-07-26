import React, { useContext, useState, useEffect } from 'react'
import { CartContext } from '../Pages/ProductPage'
import { ItemCarts } from './Item-Carts'

export const CartWithItems = () => {
    const {cartItem, setCartItem} = useContext(CartContext)

    const [totalPrice, setTotalPrice] = useState()
    useEffect(() => {
        const newTotalPrice = cartItem.reduce((acc, item) => acc + item.price, 0);
        setTotalPrice(newTotalPrice);
      }, [cartItem]);
    

  return (
    <section>
        <main>
            {cartItem.map((item, index) => cartItem.length !== 0 ? (
                <ItemCarts key={index} item = {item} setCartItem = {setCartItem} />
            ):(
               "" 
            ))}
            <div>
                <h1 className='font-bold'>Subtotal:</h1>
                <p className='font-semibold'>{totalPrice + ".00"}</p>
            </div>
        </main>
    </section>
  )
}
