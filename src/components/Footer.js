import React from 'react'
import {FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa6'

const Footer = () => {
  return (
    <div>
        <footer className='w-full bg-[#10101e] text-yellow-300 py-[15px]'>
            <div>
              <ul className='flex justify-evenly text-[30px] w-[40%] md:w-[18%] mx-auto text-white'>
                <li className='hover:text-yellow-300'><a href="https://github.com/NaufalAfrizal55" target="_blank"><FaGithub/></a></li>
                <li className='hover:text-yellow-300'><a href="https://www.linkedin.com/in/naufal-afrizal" target="_blank"><FaLinkedin/></a></li>
                <li className='hover:text-yellow-300'><a href="https://www.instagram.com/n.afrizal.55" target="_blank"><FaInstagram/></a></li>
              </ul>
            </div>
            <div className='text-center mt-[10px] text-xl'>
              <h3><span className='hover:text-yellow-600 cursor-pointer'>Naufal Afrizal</span> 2023</h3>
            </div>
        </footer>
    </div>
  )
}

export default Footer