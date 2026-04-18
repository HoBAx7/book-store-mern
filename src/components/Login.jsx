import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SiGmail } from "react-icons/si";
import { GiBookmarklet } from "react-icons/gi";
import { useForm } from "react-hook-form"
import { useAuth } from '../context/AuthContext';



    const Login = () => {
        const [message, setmessage] = useState('')
        const navigate = useNavigate();
        const { loginUser, googleUser } = useAuth();
        
        const {
            register,
            handleSubmit,
            watch,
            formState: { errors },
        } = useForm()

        const onSubmit = async(data) => {
            try {
                await loginUser(data.email, data.password);
                alert('welcome back');
                navigate('/');
            } catch (error) {
                setmessage(error.code)
            }
        }

        const handleGoogleLogin = async() => {
            try {
                await googleUser();
                navigate('/');
                alert('welcome back');
            } catch (error) {
                alert(error.code);
            }
        }

    return (
        <div className='h-[calc(100vh-120px)] flex justify-center items-center'>
            <div className='w-full max-w-sm mx-auto bg-white shadow-sm rounded-tl-2xl rounded-br-2xl  '>

                <div className='flex justify-center py-3 bg-primary rounded-tl-2xl relative'>
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
                        <input type='email' name='email' id='email' placeholder='' 
                        className='peer w-full h-full rounded-sm border border-gray-200 px-2 pb-2 text-gray-500
                        pt-4 focus:outline-amber-100 '
                        {...register("email", { required: true })}
                        /> 
                        <label 
                        htmlFor='email' 
                        className='absolute left-8 bg-white px-1 text-gray-500
                        transition-all duration-200
                        peer-placeholder-shown:top-6 
                        peer-placeholder-shown:text-base
                        peer-focus:top-0 
                        peer-focus:text-sm 
                        peer-focus:text-amber-500' 
                        >
                            Email
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
                    
                    
                    

                    <div className='w-full px-6 py-6 flex sm:flex-row flex-col  justify-between text-sm text-gray-500'>
                        <div className=''>
                            Don't have Account ? <Link to="/register" className='hover:underline text-amber-600'>Register</Link>
                        </div>
                        <button className='bg-primary sm:w-1/2 w-full py-2 rounded-sm hover:bg-yellow-500 font-bold text-white'>Login</button>
                    </div>
                </form>
                <div className='w-full px-6 pb-4 flex'>
                    <button onClick={handleGoogleLogin} className='bg-primary w-full py-2 rounded-sm hover:bg-yellow-500 font-bold text-white flex justify-center'>
                        <SiGmail className='size-6'/> <span className='ml-3'>Sign in with GMAIL</span> 
                    </button>
                </div>
                <div className='w-full flex justify-center text-gray-400 text-xs pb-3'>
                    <span>@2026 Book Store all Right Reseved</span>
                </div>
                

            </div>
        </div>
    )
    }

    export default Login
