import React from 'react'
import { AllProducts } from '../../components/Products'
import { Link } from 'react-router-dom'

export const All = () => {
  return (
    <div className=' mt-5 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>
        {AllProducts.map((items) => {
            return (
                <Link to = {`/categories/product/${items.id}`} className='bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] pb-2 rounded-xl' key={items.id}>
                    <div className='h-[300px]'>
                        <img className='w-full h-full object-cover rounded-t-md' src={items.img} alt="" />
                    </div>
                   
                    <div className='p-2 flex flex-col'>
                        <h1 className='font-semibold'>{items.name}</h1>
                        <p>{items.description}</p>
                        <span>{items.price}</span>
                        <button className='bg-slate-900 text-white mt-2 rounded-md'>Add to Cart</button>
                    </div>
                </Link>
            )
        })}
    </div>
  )
}
