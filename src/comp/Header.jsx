import React, { useEffect, useState } from 'react'
import { GoHome } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { IoCreateOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { BsPerson } from "react-icons/bs";
import { FaThreads } from "react-icons/fa6";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import User from './User';
import { useSelector, useDispatch } from 'react-redux';
import { setstatus } from './redux/slice';

const Header = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const status = useSelector((state) => state.status)


    function logout() {
        localStorage.removeItem('usertoken')
        navigate('/login')
    }

    return (
        <nav className='bg-[#101010] flex justify-around py-1 px-6 items-center w-full'>
            <div>
                <FaThreads className='text-white text-4xl' />
            </div>
            <div className='pages'>
                <ul className='text-white flex gap-2 items-center justify-center'>
                    <Link to={'/'}><li><GoHome /></li></Link>
                    <li><FiSearch /></li>
                    <li><IoCreateOutline /></li>
                    <li><FaRegHeart /></li>
                    <Link to={'user'}><li><BsPerson /></li></Link>

                </ul>
            </div>
            <div className='flex gap-4'>

                {
                    status ? <button onClick={logout} className='bg-slate-50 rounded-md px-4 py-2 font-semibold'>Logout</button> : <Link to={'/login'}>
                        <button className='bg-slate-50 rounded-md px-4 py-2 font-semibold'>Log in</button>
                    </Link>
                }

            </div>
        </nav>
    )
}

export default Header
