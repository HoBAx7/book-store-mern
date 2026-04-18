import React, { useState } from 'react'
import { HiMiniBars3CenterLeft, HiOutlineUser } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineHeart, HiOutlineShoppingCart } from "react-icons/hi";

import avatarImg from "../assets/avatar.png";

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAuth } from '../context/AuthContext';
import { GiDwarfKing } from 'react-icons/gi';


const Navbar = () => {
    const cartItem = useSelector(state => state.cart.cartItems);
    const [ IsDropdowenOpen, setIsDropdowenOpen ] = useState(false);

    const navigation = [
        {name: "Dashboard", href:"/dashboard"},
        {name: "Orders", href:"/orders"},
        {name: "Cart Page", href:"/cart"},
        {name: "Check Out", href:"/checkout"}
    ];
    
    const { logout, currentUser } = useAuth();

    const handlelogout = () => {
        logout();
    }
    
  return (
    <header className="max-w-6xl mx-auto px-4 py-6">

        <nav className="flex justify-between ">

            {/* left side */}
            <div className='flex items-center md:gap-16 gap-4'>

                <Link to="/">
                    <HiMiniBars3CenterLeft className="size-6"/>
                </Link>

                <div className='relative sm:w-72 w-40 space-x-2'>
                    <IoSearchOutline className="absolute inset-2"/>
                    <input type='text' placeholder='Search here' 
                    className='bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none'
                    />
                </div>
                
            </div>

            {/* right side */}
            <div className='relative flex items-center md:space-x-3 space-x-2'>
                <div>
                    {
                        currentUser? <>
                        <button onClick={()=> setIsDropdowenOpen(!IsDropdowenOpen)}>
                            <img src={avatarImg} alt="" className={`size-7 rounded-full 
                            ${currentUser? 'ring-2 ring-blue-500': ''}`}/>
                        </button>
                        {/* show drop dowen */}
                        {
                            IsDropdowenOpen && (
                                <div className='absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40'>
                                    <ul className="py-2">
                                        {
                                            navigation.map((item) => (
                                                <li key={item.name} onClick={()=> setIsDropdowenOpen(false)}>
                                                    <Link to={item.href} className='block px-4 py-2 text-sm hover:bg-gray-100'>
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                    <li>
                                        <button onClick={handlelogout} className='block px-4 py-2 text-sm hover:bg-gray-100 w-full text-left cursor-pointer'>
                                            Logout
                                        </button>
                                    </li>
                                </div>
                            )
                        }
                        </> : <Link to="/login"><HiOutlineUser className='size-6'/></Link>
                    }
                </div>
                <button className='hidden sm:block'>
                    <HiOutlineHeart />
                </button>   
                <Link to="/cart" className='flex items-center bg-primary p-1 sm:px-6 py-1'>
                    <HiOutlineShoppingCart/>
                    <span className='text-sm font-semibold sm:ml-1'>{cartItem.length}</span>
                </Link>
            </div>

        </nav>

    </header>
  )
}

export default Navbar
