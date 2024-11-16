import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import End from './components/End'


const Layout = () => {

  return (

    <>
      <Navbar />
      <Outlet />
      <End />
    </>
  )
}

export default Layout