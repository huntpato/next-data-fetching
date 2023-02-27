import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { GetServerSideProps, NextPage } from 'next'
import { User } from '@/types/user.types'
import UserCard from '@/components/UserCard/UserCard'

const inter = Inter({ subsets: ['latin'] })

interface Props { 
  users: { results: User[]} 
}

const Home: NextPage<Props> = ( { users: { results }} ) => {
  return (
    <>
      <Head>
        <title>Mega Random App</title>
        <meta name="description" content="Random app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <div className={styles.grid}>
          {results.map((user)=>(
            <UserCard key={user.login.username} user={user}/>
          ))}
        </div>
      </main>
    </>
  )
}

export const getServerSideProps : GetServerSideProps = async() =>{
  const res = await fetch("https://randomuser.me/api/?results=10")
  const data: User[] = await res.json()
  
  return {
      props: {
          users: data
      }
  }
}

export default Home
