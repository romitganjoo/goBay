import React from "react";
import LandingPage from './LandingPage'
import { Link } from 'react-router-dom'
export default function Book() {
    return(
        <div>
            <LandingPage />
            <div className="cards">
                <h1>Book a Clipper</h1>
            </div>
            
        </div>
    )
}