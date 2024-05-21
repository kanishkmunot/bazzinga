import React from 'react'
import {FaSearch} from 'react-icons/fa';
import {Link} from 'react-router-dom';


function Header() {
  return (
    <header className='bg-slate-300 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <Link to='/'>
            <h1 className='font-bold text- sm:text-xl flex flex-wrap'>
                <span>Bazzinga Estate</span>
            </h1>
            </Link>

            <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
                <input type='text' placeholder='Search'
                className='bg-transparent focus:outline-none w-23 sm:w-64'/>
                <FaSearch className='text-slate-600' />
            </form>
            <ul className='flex gap-5'>
                <Link to='/'></Link>
                <li className='hidden sm:inline text-slate-700 hover:underline'>Home</li>
                <Link to='/about'>
                <li className=' sm:inline text-slate-700 hover:underline'>About</li>
                </Link>
                <Link to='/sign-in'>
                <li className=' sm:inline text-slate-700 hover:underline'>Sign In</li>
                </Link>
            </ul>
        </div>
    </header>
  )
}

export default Header