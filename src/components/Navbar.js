import React, { useState } from 'react'
import {FaBars} from 'react-icons/fa6'
import {FaRegWindowClose} from 'react-icons/fa'
import Link from 'next/link'

const Navbar = () => {
  const [activeToggle, setActiveToggle] = useState(true)
  return (
    <div>
        <nav className="w-full flex bg-gr justify-around lg:justify-between items-center text-yellow-300
        p-[15px] bg-[#10101e] shadow-lg shadow-[#ef4444] text-lg font-bold fixed z-10">
            <h3>Naufal Afrizal</h3>
            <ul className='lg:flex justify-between mx-8 w-[25%] hidden'>
                <li className='hover:text-yellow-500' ><Link href="/">Home</Link></li>
                <li className='hover:text-yellow-500' ><Link href="/about">About Me</Link></li>
                <li className='hover:text-yellow-500' ><Link href="/my-projects">My Projects</Link></li>
            </ul>
            <div className='h-[100%] lg:hidden'>
            <button
                  className="mt-[10px]"
                  onClick={() => setActiveToggle(!activeToggle)}
                >
                  {activeToggle ? (
                      <p><FaBars/></p>
                  ) : (
                    <div>
                      <p><FaRegWindowClose/></p>
                      <div class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md">
                        <ul className='bg-[#10101e] mx-3 rounded-lg shadow-lg shadow-[#ef4444] p-[10px] border-2'>
                          <li className='hover:text-yellow-500' ><Link href="/">Home</Link></li>
                          <li className='hover:text-yellow-500' ><Link href="/about">About Me</Link></li>
                          <li className='hover:text-yellow-500' ><Link href="/my-projects">My Projects</Link></li>
                        </ul>
                      </div>
                  </div>
                  )}
                </button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar