import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react'
import Banner from '../components/Banner'

export default function Home() {
  const [annonces, setAnnonces] = useState ([])

  useEffect(()=>{
    fetch("./annonces.json")
    .then((response)=>{
      return response.json()
    })
    .then((data)=>{
      console.log(data)
      setAnnonces(data)
    })
    .catch((error)=>console.log(error))
  },[])

  return (
    <>
    <Header />
    <Banner />
    {annonces.map((annonce)=>(
      <h1 key={annonce.id}>{annonce.title}</h1>
    ))}
    <Footer />
    </>
  )
}
