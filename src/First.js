import React from 'react'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
// import './first.css'

const First = () => {
  return (
    <>
      <Navbar/>
        <h1 style={{textAlign: "center"}}>This is a first component.</h1>
        
        <Footer/>
    </>
    
  )
}

export default First