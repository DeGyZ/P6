import React from "react";
import Header from "../components/Header";
import Footer from '../components/Footer';
import Banner from "../components/Banner";
import bannerAbout from "../components/bannerAbout.png"
import Collapse from "../components/Collapse";
import collapsesItems from "../collapses.json"

export default function About() {
    return (
        <>
        <Header />
        <Banner bannerTitle="" bannerImgSrc={bannerAbout}/>
        {collapsesItems.map((collapsesItem)=>(
        <Collapse titleCollapse={collapsesItem.title} descriptionCollaspe={collapsesItem.content} key={collapsesItem.id}/>
         ))}
        <Footer />
        </>
    )
}