import React from 'react'
import { Link } from 'react-router-dom'
import { SiMarketo } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='h-20 bg-emerald-950 text-white  flex justify-between items-center px-10'>
      <div>
        <p className='text-2xl font-bold flex gap-1 items-center'><SiMarketo />MARKET</p>
      </div>
      <div className='flex gap-10 list-none '>
        <Link to={"/"}><li>HOME</li></Link>
        <Link to={"/products"}><li>PRODUCTS</li></Link>
        <Link to={"/about"}><li>ABOUT</li></Link>
        <Link to={"/shop"}><li>SHOP</li></Link>
        <Link to={"/test"}><li>TEST</li></Link>
      </div>
      <div className='flex gap-5 items-center text-2xl'>
        <Link to={"https://twitter.com/"} target="_blank" rel="noopener noreferrer"><RiTwitterXFill /></Link>
        <Link to={"https://facebook.com/"} target="_blank" rel="noopener noreferrer"><FaFacebook /></Link>
        <Link to={"https://instagram.com/"} target="_blank" rel="noopener noreferrer"><FaInstagram /></Link>
        <Link to={"https://whatsapp.com/"} target="_blank" rel="noopener noreferrer"><FaWhatsapp /></Link>
      
      </div>
    </div>
  )
}

export default Navbar