import React, { FC } from 'react';
import NavBar from '../NavBar';
import styles from './Layout.module.css'

type LayoutProps = {
    children: React.ReactNode
}

const Layout : FC<LayoutProps> = ({ children }) => {
  return (
    <>
        <header className={styles.header}>
            <NavBar/>
        </header> 
        {children}
    </>
  )
}

export default Layout