import { User } from '@/types/user.types'
import Image from 'next/image'
import React, { FC } from 'react'
import styles from './UserCard.module.css'

interface UserProps{
    user: User
}

const UserCard : FC<UserProps> = ( {user} ) => {
  return (
    <div className={styles.card}>
        <Image src={user.picture.medium} alt="picture" width={100} height={100} className={styles.img}/>
        <h4>{`${user.name.first} ${user.name.first}`}</h4>
        <p>{user.login.username}</p>
        <p>{user.email}</p>
    </div>
  )
}

export default UserCard