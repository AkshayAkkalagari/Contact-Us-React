import React from 'react'
import styles from "./navigation.module.css"

function Navigation() {
  return (
    <nav className={`${styles.navigation} container`}>
        <div className='logo'>
            <img src='/images/logo.png' alt='logo'></img>
        </div>
        
        <ul>
            <li href="#">Home</li>
            <li href="#">About</li>
            <li href="#">Contact</li>
        </ul>
    </nav>
  )
}

export default Navigation
