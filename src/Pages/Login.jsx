import React from 'react'
import {Link} from 'react-router-dom'


function Login() {
  return (
    <div className='flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 to-black-500 min-h-screen'>
      <h1 className='text-4xl font-bold mb-8 text-black'>LOGIN</h1>
    <form  className='bg-[#9083F2] rounded-lg p-8 shadow-md'>
      <label className="block text-gray-700 font-bold mb-2">
        Email:
        <input type="text"  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-4"  placeholder="Enter Email"  />
      </label>
      <label className='block text-gray-700 font-bold mb-2'>
        Password:
        <input type="password" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-4' placeholder="Enter your password" />
      </label>
      <button type="submit" className='bg-[#2B7DD4] hover:bg-blue-700 text-white font-bold py-2 px-4 mt-2 rounded focus:outline-none focus:shadow-outline '>Login</button>
      <h1 className='text-gray-700 py-2 '>Dont have an account?</h1>
      <Link to="/Signup">
      <button className='hover:text-blue-700 text-gray-700 underline'>Sign Up</button>
      </Link>
    </form>
    </div>
  )
}

export default Login