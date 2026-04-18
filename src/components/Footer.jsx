import React from 'react'
import footerlogo from '../assets/footer-logo.png';
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className='bg-gray-100 py-10 px-4'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-center gap-8'>
            {/* left side - logo and nav */}
            <div className='md:w-1/2 w-full'>
                <img src={footerlogo} alt='logo' className='mb-5 w-36' />
                <ul className='flex flex-col md:flex-row gap-4 text-gray-500'>
                    <li><a href='#home' className='hover:underline'>Home</a></li>
                    <li><a href='#service' className='hover:underline'>Services</a></li>
                    <li><a href='#about' className='hover:underline'>About Us</a></li>
                    <li><a href='#contact' className='hover:underline'>Contact</a></li>
                </ul>
            </div>

            {/* Right Side - NewsLetter */}
            <div className='md:w-1/2 w-full'>
                <p className='mb-4 text-gray-500'>
                    Subscribe to stay tuned for new product and latest updates. Let’s do it!
                </p>
                <div className='flex'>
                    <input type='email' placeholder='Enter your email' className='w-full outline-primary border border-primary px-4 py-2 rounded-l-md text-black'/>
                    <button className='bg-primary  px-6 py-2 rounded-r-md hover:bg-yellow-500 cursor-pointer'>
                        Subscribe
                    </button>
                </div>
            </div>
        </div>

        {/* bottom side */}
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-center mt-10 border-t border-gray-300 pt-6 text-gray-600'>
            <ul className='flex gap-6'>
                <li><a href='#privacy' className='hover:underline'>Privacy Policy</a></li>
                <li><a href='#terms' className='hover:underline'>Terms of Services</a></li>
            </ul>

            {/* Right Side - Social Icons */}
            <div className='flex gap-6'>
                <a href='http://facebook.com' target='_blank' rel='noopener noreferrer' className='hover:text-blue-600'>
                    <FaFacebookSquare size={24}/>
                </a>
            </div>
            <div className='flex gap-6'>
                <a href='http://facebook.com' target='_blank' rel='noopener noreferrer' className='hover:text-blue-400'>
                    <FaTwitterSquare size={24}/>
                </a>
            </div>
            <div className='flex gap-6'>
                <a href='http://facebook.com' target='_blank' rel='noopener noreferrer' className='hover:text-rose-500'>
                    <FaInstagram size={24}/>
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer
