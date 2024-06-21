import React, { useEffect, useRef } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setuser, setstatus } from './redux/slice'

const Login = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const emailref = useRef()
    const passwordref = useRef()

    const userstatus = useSelector((state) => state.status)

    const senddata = async () => {

        try {
            const info = await fetch("https://threads-clone-backend-2770.onrender.com/api/users/login", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: emailref.current.value,
                    password: passwordref.current.value
                })
            })

            const res = await info.json();
            console.log(res);

            if (res.token) {
                localStorage.setItem("usertoken", res.token)
                dispatch(setstatus(true))
                navigate('/')
            }
            
            console.log("user", res);

        } catch (error) {
            console.log(error);
            alert("Something went wrong", error)
        }
    }
    
    useEffect(() => {
        senddata();
    }, [])


    console.log(userstatus);

    return (
        <>
            <main className='bg-[#101010] h-screen loginpage flex items-center flex-col justify-center gap-6'>
                <div className="tab flex flex-col w-1/3 gap-4 text-center">
                    <h2 className='text-white font-bold'>Log into your account</h2>
                    <div className="form flex flex-col gap-2">
                        <input ref={emailref} type="text" placeholder='Email' />
                        <input ref={passwordref} type="text" placeholder='Password' />
                        <button onClick={() => {
                            senddata();
                            emailref.current.value = ""
                            passwordref.current.value = ""
                        }} >Log in</button>
                    </div>
                    <p className='text-white'>Forgotten password?</p>

                </div>
                <Link to={'/signup'}>
                    <div className='signupdiv flex px-6 py-8 text-white'>
                        Don't have an ID yet? Create one
                    </div>
                </Link>
            </main>
        </>
    )
}

export default Login
