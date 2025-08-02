import React from 'react'
import { products } from '../constants/data'

const Products = () => {
  return (
    <div className='flex items-center justify-center gap-10 p-10  '>
      {products.map((product, id) => (
        <div key={product.id} className='bg-yellow-400 rounded-lg'>
          <img src={product.image} alt={product.name} className="w-full h-60 object-cover rounded-lg" />
          <div className='p-4'>
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p className='text-red-600'>${product.price}</p>
            <button className='bg-emerald-900 flex justify-center p-2 rounded-4xl text-white mx-auto'>Add to cart</button>
          </div>
          
        <div>
          
        </div>
      </div>

      ))}
      
    </div>
  )
}


export default Products