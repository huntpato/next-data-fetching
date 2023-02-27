import { Faq } from '@/types/faqs.types'
import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import styles from '../styles/Faqs.module.css'

interface FaqsProps{
    faqs: Faq[]
}

const faqs : NextPage<FaqsProps> = ( {faqs} ) => {
    
  return (
    <div className={styles.container}>
        <Head>
            <title>Random - faqs</title>
            <meta name="description" content="Preguntas frecuentes del uso de la app Random"/>
        </Head>
        <h2>Preguntas Frecuentes</h2>
        {faqs.map(({id,title,description})=>(
            <div key={id}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        ))}
    </div>
  )
}

export const getStaticProps = async() =>{

    const response = await fetch("https://my-json-server.typicode.com/DH-Esp-Frontend/ctd-fe3-s2-c6-integracion-terminado/db")
    const data = await response.json()
        
     return {
         props: {
             faqs: data.faqs
            }, 
     };
}

export default faqs;