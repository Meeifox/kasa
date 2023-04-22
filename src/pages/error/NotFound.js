import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.scss"

export default function NotFound() {
    return (
        <>
        <div className="NotFound">
            <p className="error404">404</p>
            <div className="errorText">
                <h2>Oups ! La page que vous demandez n'existe pas.</h2>
                <h3> <Link to="/kasa/">Retourner a la page d'Accueil</Link> </h3>
            </div>
        </div>
        </>
    );
}