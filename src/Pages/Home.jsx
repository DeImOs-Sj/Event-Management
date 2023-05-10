import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div className='flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 to-black-500 min-h-screen'>
    <h1 className='text-4xl font-bold mb-8 text-black'>HOME</h1>
    <form  className='bg-[#9083F2] grid justify-center rounded-lg p-8 shadow-md w-[400px] h-[200px]'>
    <Link to="/Login">
    <button type="submit" className='bg-[#2B7DD4] hover:bg-blue-700 text-white font-bold py-2 px-4 mt-2 rounded focus:outline-none focus:shadow-outline w-[100px] h-[50px] '>Login
    </button>
    </Link>
    <Link to="/Signup">
    <button type="submit" className='bg-[#2B7DD4] hover:bg-blue-700 text-white font-bold py-2 px-4 mt-2 rounded focus:outline-none focus:shadow-outline w-[100px] h-[50px]  '>Signup</button>
    </Link>
      </form>

  </div>
  )
}

export default Home