import React from 'react'
import images from '../../assets/images'
import styles from './Header.module.css'

const Header = () => {
  return (
      <div className={styles.container}>
        <div className={styles.contailner_title}>
          <p>Descubra nuevos destinos.</p>
        </div>

        <div className={styles.icon_logo}>
          <img src={images.logo} alt="logo"/>
        </div>

        <div className={styles.container_icons}>
            <img src={images.search} alt="search"/>
            <img src={images.user} alt="user"/>
        </div> 
      </div>
  )
}

export default Header