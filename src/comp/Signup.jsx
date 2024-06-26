import React from 'react'
import { Link } from 'react-router-dom'
import { useRef, useEffect } from 'react'


const Signup = () => {

  const nameref = useRef(null);
  const usernameref = useRef(null);
  const emailref = useRef(null);
  const passwordref = useRef(null);


  const senddata = async () => {


    try {

      const info = await fetch('https://threads-clone-backend-2770.onrender.com/api/users/signup', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "name": nameref.current.value,
          "username": usernameref.current.value,
          "email": emailref.current.value,
          "password": passwordref.current.value
        }),
      })
      const res = await info.json()

      console.log(res);

    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <main className='signuppage bg-[#101010] h-screen flex items-center justify-center text-white'>

        <div className="w-full max-w-lg  p-4 pt-6 pb-8 bg-gray-900 rounded shadow-md flex flex-col items-center gap-4">
          <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
          <form onSubmit={(e) => {
            e.preventDefault();
            senddata()
            nameref.current.value = ""
            usernameref.current.value = ""
            emailref.current.value = ""
            passwordref.current.value = ""
          }}>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="full_name">
                  Full Name
                </label>
                <input ref={nameref} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="full_name" type="text" placeholder="Full Name" />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="username">
                  Username
                </label>
                <input ref={usernameref} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="username" type="text" placeholder="Username" />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input ref={passwordref} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="password" type="password" placeholder="Password" />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input ref={emailref} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="email" type="email" placeholder="Email" />
              </div>
            </div>
            <button className="bg-black hover:bg-slate-700 text-white font-semibold py-4 px-4 rounded-2xl w-full" type="submit">
              Sign Up
            </button>
          </form>
          <p>Already have an account?  <Link to={'/login'}>Login</Link></p>
        </div>
      </main>
    </>
  )
}

export default Signup
