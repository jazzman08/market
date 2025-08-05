import React from 'react'
import { Link } from 'react-router-dom'
import { products } from '../constants/data'
import { customerName } from '../constants/customer'
import Products from './Products'
import Greeting from '../components/Greeting'
import Counter from '../components/Counter'


const Home = () => {
  return (
    <>
      <div>
        {          customerName.map((customer) => (
          <div key={customer.id} className='text-center p-10'>
            <h1 className='text-3xl font-bold'>Welcome, {customer.name}</h1>
            <p className='text-lg mt-2'>Explore our latest products below:</p>
          </div>
        ))}
        <Greeting name="John Doe"/>
        <Greeting name="Jane Doe"/>

        <Counter/>
      </div>
      <div className='flex items-center justify-center gap-10 p-10  '>
      {/* {products.map((product, id) => (
        <div key={product.id} className='bg-yellow-400 rounded-lg'>
          <img src={product.image} alt={product.name} className="w-full h-60 object-cover rounded-lg" />
          <div className='p-4'>
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p className='text-red-600'>${product.price}</p>
            <button className='bg-emerald-900 flex justify-center p-2 rounded-4xl text-white mx-auto cursor-pointer'>Add to cart</button>
          </div>
          
        <div>
          
        </div>
      </div>

      )).slice(0, 2)} */}
      <Products/>
    </div>
    

    </>
  )
}

export default Home