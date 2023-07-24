import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NavLink } from 'react-router-dom';

export default function Error() {
    return (
        <>
        <Header />
        <div className="errorPage">
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <NavLink to="/">Retournez sur la page d'acceuil</NavLink>
        </div>
        <Footer />
        </>
    )
}