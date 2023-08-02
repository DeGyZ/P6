import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Banner from '../components/banner/Banner'
import Gallery from '../components/gallery/Gallery'
import photoBanner from "../assets/photoBanner.png"

export default function Home() {
  return (
    <>
    <Header />
    <Banner bannerTitle="Chez vous, partout et ailleurs" bannerImgSrc={photoBanner}/>
    <Gallery />
    <Footer />
    </>
  )
}
