import React, { createContext, useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AllProducts } from '../components/Products'

 
export const ProductPage = () => {

    const {id} = useParams()
    const item = AllProducts.filter((item) => item.id === parseInt(id))

    const [image, setImage] = useState(item[0].img)

  return (  
    <section className='my-40'>
        <div className='border-2'>
            <div className='w-[450px]'>   
                <img className='w-full h-full object-cover ' src={image} alt="" />
                <h1 className='text-3xl font-bold'>{item[0].name}</h1>
                <p>{item[0].description}</p>
            </div>
            
        </div>
    </section>
  )
}
