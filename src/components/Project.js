import React from 'react'
import Image from 'next/image'

const Project = ({picture, title, description}) => {
  return (
    <div className='p-[30px]'>
        <div className='flex w-[300px] h-[300px] flex-col shadow-lg shadow-[#ef4444] border-2 hover:scale-110 
        transition ease-in-out duration-100 rounded-2xl bg-[#1b1b32]'>
            <Image className='w-full rounded-2xl'
            src={picture}
            alt="project"
            />
            <div className='flex flex-col items-center'>
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
        </div>
    </div>
  )
}

export default Project