import React from "react";
import Header from "../components/header/Header";
import Footer from '../components/footer/Footer';
import Banner from "../components/banner/Banner";
import bannerAbout from "../assets/bannerAbout.png"
import Collapse from "../components/collapse/Collapse";
import collapsesItems from "../collapses.json"

export default function About() {
    return (
        <>
        <Header />
        <div className="photoAbout"><img src={bannerAbout} alt="" /></div>
        <div >
        {collapsesItems.map((collapsesItem)=>(
        <Collapse titleCollapse={collapsesItem.title} descriptionCollaspe={collapsesItem.content} key={collapsesItem.id}/>
         ))}
         </div>
        <Footer />
        </>
    )
}