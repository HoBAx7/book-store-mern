import React, { useState } from 'react'
import { GiBookmarklet } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from "axios";
import baseUrl from '../utils/baseUrl';
import Swal from 'sweetalert2';

const AdminLogin = () => {
    const navigate = useNavigate();
    const [message, setmessage] = useState('')  
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = async(data) => {
        try {
            const response = await axios.post(`${baseUrl()}/api/auth`, data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const auth = response.data;

            if(auth.token){

                const expireTime = Date.now() + (60 * 60 * 1000);
                localStorage.setItem('expireTime', expireTime);
                localStorage.setItem('token', auth.token);
                    
                Swal.fire({
                    title: "Welcome back",
                    timer: 3000,
                    showConfirmButton: false,
                }).then(() => navigate('/dashboard'));
                
            }   
            
        } catch (error) {
            setmessage('credintals doesnt match!')
            console.error(error)
        }
    }

    return (
        <div className='h-screen flex justify-center items-center'>

            <div className='w-full max-w-sm mx-auto bg-white shadow-sm rounded-tl-2xl rounded-br-2xl  '>

                <div className='flex justify-center py-3 bg-yellow-500 rounded-tl-2xl relative'>
                    <GiBookmarklet  className='size-10 text-gray-50'/> 
                    <span className='text-xs text-white absolute left-0  top-2 animate-slide-mediam whitespace-nowrap'>learn</span>
                    <span className='text-xs text-white absolute left-10 top-5  animate-slide-fast whitespace-nowrap'>Log In</span>
                    <span className='text-xs text-white absolute left-10 top-10 animate-slide-slow whitespace-nowrap'>Book Store</span>
                    <span className='text-xs text-white absolute left-30 top-12 animate-slide-fast whitespace-nowrap'>Have Fun</span>
                    <span className='text-xs text-white absolute left-50 top-10 animate-slide-mediam whitespace-nowrap'>Knowledge</span>
                    <span className='text-xs text-white absolute left-80 top-5 animate-slide-slow whitespace-nowrap'>Book Store</span>
                    <span className='text-xs text-white absolute left-100 top-2 animate-slide-mediam whitespace-nowrap'>Study</span>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className='relative px-6 py-4 h-18 mt-4'>
                        <input type='username' name='username' id='username' placeholder='' 
                        className='peer w-full h-full rounded-sm border border-gray-200 px-2 pb-2 text-gray-500
                        pt-4 focus:outline-amber-100 '
                        {...register("username", { required: true })}
                        /> 
                        <label 
                        htmlFor='username' 
                        className='absolute left-8 bg-white px-1 text-gray-500
                        transition-all duration-200
                        peer-placeholder-shown:top-6 
                        peer-placeholder-shown:text-base
                        peer-focus:top-0 
                        peer-focus:text-sm  
                        peer-focus:text-amber-500' 
                        >
                            username
                        </label> 
                    </div>

                    <div className='relative px-6 py-4 h-18 mt-4'>
                        <input type='password' name='password' id='password' placeholder='' 
                        className='peer w-full h-full rounded-sm border border-gray-200 px-2 pb-2 text-gray-500
                        pt-4 focus:outline-amber-100 '
                        {...register("password", { required: true })}
                        /> 
                        <label 
                        htmlFor='password' 
                        className='absolute left-8 bg-white px-1 text-gray-500
                        transition-all duration-200
                        peer-placeholder-shown:top-6 
                        peer-placeholder-shown:text-base
                        peer-focus:top-0 
                        peer-focus:text-sm 
                        peer-focus:text-amber-500' 
                        >
                            Password
                        </label>
                        {
                            message && <p className='text-red-500 text-xs italic p-1'>{ message }</p> 
                        }
                    </div>
                    
                    <div className='w-full px-6 py-4 flex sm:flex-row flex-col  justify-center text-sm text-gray-500'>
                    
                    <button className='bg-yellow-500 w-full py-2 rounded-sm hover:bg-yellow-700 font-bold text-white'>
                        Login
                    </button>

                    </div>

                </form>
                
                <div className='w-full flex justify-center text-gray-400 text-xs pb-3'>
                    <span>@2026 Book Store all Right Reseved</span>
                </div>  

            </div>

        </div>
    )

}

export default AdminLogin
