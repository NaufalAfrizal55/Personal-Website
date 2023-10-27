import React from 'react'
import Image from 'next/image'
import profileImage from './../img/profile.jpg'
const Header = () => {
  return (
    <div className="flex flex-col items-center md:flex-row md:justify-center py-[110px] "> 
        <div className='flex items-center'>
            <Image className='rounded-[50%]' alt="profile"
            src={profileImage} width={200} />
        </div>
        <div className='mx-4 p-[20px] md:w-[45%] text-[25px] font-bold flex flex-col'>
          <h2 className='text-[35px] md:text-[40px] '>Hi. My Name is Naufal Afrizal.</h2>
          <h4>Undergraduate Electrical Engineering</h4>
          <p>I have an interest in electrical engineering and IT, especially Web Development.</p>
        </div>
    </div>
  )
}

export default Header