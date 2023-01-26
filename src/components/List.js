import React from "react";
import LandingPage from './LandingPage'
import { Link } from 'react-router-dom'
export default function List() {
    return(
        <div>
            <LandingPage />
            <div className="cards">
                <h1>List your clipper</h1>
            </div>
            
        </div>
    )
}