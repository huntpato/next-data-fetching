import Link from 'next/link'
import React from 'react'
import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <nav className={styles.nav_container}>
        <ul>
            <li>
                <Link href='/'>Home</Link>
            </li>
            <li>
                <Link href='/faqs'>faqs</Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar