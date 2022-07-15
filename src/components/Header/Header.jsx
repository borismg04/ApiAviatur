import React from 'react'
// import images from '../../assets/images'
import styles from './Header.module.css'

const Header = () => {
  return (
      <div className={styles.container}>
        <div className={styles.contailner_title}>
          <h2>Descubra nuevos </h2>
          <h2>destinos.</h2>
        </div>
      </div>
  )
}

export default Header