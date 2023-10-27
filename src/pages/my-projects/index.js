import React from 'react'
import Project from '@/components/Project'

import placeholder3 from "../../img/gambar3.jpg"

export default function index() {
  return (
    <div className='w-[90%] mx-auto py-[110px]'>
      <h1 className='text-[30px] font-bold text-center'>MY PROJECTS</h1>
      <div className="sm:grid sm:grid-cols-3 flex flex-col items-center">
        <Project picture={placeholder3} title="not yet" description="-" />
        <Project picture={placeholder3} title="not yet" description="-" />
        <Project picture={placeholder3} title="not yet" description="-" />
        <Project picture={placeholder3} title="not yet" description="-" />
        <Project picture={placeholder3} title="not yet" description="-" />
        <Project picture={placeholder3} title="not yet" description="-" /> 
      </div>
  </div>
  )
}
