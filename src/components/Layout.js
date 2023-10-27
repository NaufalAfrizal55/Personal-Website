import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div className="bg-[url('../img/space-background.jpg')] bg-cover text-yellow-300 font-coralColour">
        <Navbar />
        {children}
        <Footer />
    </div>
  )
}

export default Layout