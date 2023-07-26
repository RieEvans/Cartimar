import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../Pages/ProductPage'

export const RootLayout = () => {
    


  const {cartItem} = useContext(CartContext)
  
  return (
    <section className='  '>
        <header className='z-50 flex items-center justify-between gap-5 rounded-b-xl bg-white shadow-md py-5 sm:px-5 md:px-40 fixed top-0 mx-auto md:w-[100%] sm:w-[100%] '>
            <NavLink to={`/`} className='text-3xl  font-semibold  sm:hidden md:block'>Cartimar  <span className='absolute'> 🛒</span></NavLink>
        
            <nav className='flex items-center justify-center sm:w-full md:w-[300px]  gap-2 '>
                <NavLink className={`text-md font-semibold bg-slate-900 rounded-md text-white px-3 py-1 flex items-center gap-2`} to={`/`} onClick={() => window.top(0, 0)}><i className="fa-solid fa-house-user"></i> Home</NavLink>
                <NavLink className={`text-md font-semibold bg-slate-900 rounded-md text-white px-3 py-1 flex items-center gap-2`} to= '/categories/allproducts' onClick={() => window.top(0, 0)} ><i className="fa-brands fa-product-hunt"></i>Products</NavLink>
                <NavLink className={`text-md font-semibold bg-slate-900 rounded-md text-white px-3 py-1 relative`} to={`/Cart-Item`} onClick={() => window.top(0, 0)} >
                  <i data-array-length={cartItem.length} className={`fa-solid fa-cart-shopping ${cartItem.length < 1 ? "cart-icon" : "cart-icon with-items"}`}></i>
                </NavLink>
            </nav>

        </header>
        <main>
            <Outlet/>
        </main>
    </section>
  )
}
