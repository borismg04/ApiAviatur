import React from 'react'
import images from '../../assets/images'

const Header = () => {
  return (
    <>
      <div>
        <img src={images.logo} alt="logo" />
      </div>
      <div className="container">
        <img src={images.header} alt="Header" />
      </div>  
      
    </>
  )
}

export default Header