import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

export const RootLayout = () => {

  return (
    <section className='mx-auto md:w-[80%] sm:w-[90%] '>
        <header className='z-50 flex items-center justify-between gap-5 rounded-b-xl bg-white shadow-md py-5 sm:px-5 md:px-10 fixed top-0 mx-auto md:w-[80%] sm:w-[90%] '>
            <NavLink to={`/`} className='text-3xl font-semibold w-full'>Cartimar  <span className='absolute'> 🛒</span></NavLink>
            
            <form className='w-full'>
                <input type="text" className='w-full py-1 px-3 rounded-md' placeholder='Search Items' />
            </form>

            <nav className='flex items-center justify-between gap-2'>
                <NavLink className={`text-md font-semibold bg-slate-900 rounded-md text-white px-3 py-1 flex items-center gap-2`} to={`/`}><i className="fa-solid fa-house-user"></i> Home</NavLink>
                <NavLink className={`text-md font-semibold bg-slate-900 rounded-md text-white px-3 py-1 flex items-center gap-2`} to= '/categories/allproducts'><i className="fa-brands fa-product-hunt"></i>Products</NavLink>
                <NavLink className={`text-md font-semibold bg-slate-900 rounded-md text-white px-3 py-1`}><i className="fa-solid fa-cart-shopping"></i></NavLink>

            </nav>
            
        </header>
        <main>
            <Outlet/>
        </main>
    </section>
  )
}
