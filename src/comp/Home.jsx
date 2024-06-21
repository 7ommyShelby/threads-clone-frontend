import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'


const Home = () => {

  return (
    <>
      <main className='con bg-[#101010] p-4 h-screen items-center'>
        <Header />
        <section className='w-[40%] homescreen'>
          <Outlet />
        </section>
      </main>
    </>
  )
}

export default Home
