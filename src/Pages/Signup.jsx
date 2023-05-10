import React from 'react'
import {Link} from 'react-router-dom'


function Signup() {
  return (
    <div className='flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 to-black-500 min-h-screen'>
    <h1 className='text-4xl font-bold mb-2 text-black'>SIGN UP</h1>
    <form  className='bg-[#9083F2] rounded-lg p-8 shadow-md'>
    <label className="block text-gray-700 font-bold mb-2">
      Username
      <input type="text"  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-4"  placeholder="Enter username"  />
    </label>
    <label className='block text-gray-700 font-bold mb-2'>
      Email
      <input type="password" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-4' placeholder="Enter your email" />
    </label>
    <label className='block text-gray-700 font-bold mb-2'>
    Password
    <input type="password" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-4' placeholder="Enter your password" />
    </label>
    <label className='block text-gray-700 font-bold mb-2'>
      Confirm Password
    <input type="password" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-4' placeholder="Confirm your password" />
    
    </label>
    <button type="submit" className='bg-[#2B7DD4] hover:bg-blue-700 text-white font-bold py-2 px-4 mt-2 rounded focus:outline-none focus:shadow-outline '>Sign up</button>
    <h1 className='py-3 text-gray-700 cursor-pointer'>Already have account ?</h1>
    <Link to="/Login">
    <button type="submit" className='hover:text-blue-700 text-gray-700  cursor-pointer underline'>Sign in</button>
    </Link>
    
    </form>
    </div>
  )
}

export default Signup