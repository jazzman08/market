import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop'
import Products from './pages/Products'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Test from './pages/Test'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen '>

      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/products" element={<Products />} />
        <Route path="/test" element={<Test />} />

      </Routes>
      <Footer />
      </BrowserRouter>
      

    </div>
  )
}

export default App
