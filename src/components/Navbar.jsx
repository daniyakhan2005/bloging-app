import React from 'react'
import {Link} from 'react-router-dom'


// import react icons

import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  return (
    <>
    <nav className='bg-sky-400 border-b-4   ' style={{height:'5rem', zIndex:100 ,display:'grid' , placeItems:'center', position:'fixed', width:'100%'}}> 
      <div className='container  justify-between ' style={{display:'flex' , alignItems:'center', height:'100%' }}>
      <Link className='nav-logo' to={'/'}>
      <h3 className=' text-white'>FIRE <span className='text-amber-500'>stacK</span></h3>


      </Link>
      <ul className="text-center gap-7 text-white  " style={{display:'flex'}}>
        <li><Link to={'/profile'}>joker</Link></li>
        <li><Link to={'/creatpost'}>Creat posts</Link></li>
        <li><Link to={'/author'}>Authors</Link></li>
        <li><Link to={'/logout'}>Logout</Link></li>

      </ul>
      <button className='bg-transparent text-white btn btn-primary  btn-category btn-sm btn-danger' style={{display:'none'}}>
      <FaBars />
      <RxCross1 className='ml-4'  style={{marginTop:-13}}/>
      </button>

      </div>
    </nav>
    
    
    
    
    
    </>
  )
}

export default Navbar