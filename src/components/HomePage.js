import React from "react";
import LandingPage from './LandingPage'
import { Link } from 'react-router-dom'
import List from './List'
export default function Main() {
    return(
        <div>
            <LandingPage />
            <div className="cards">
                <p><Link to='/List'>List your clipper</Link></p>
                <p><Link to='/Book'>Book a Clipper</Link></p>
            </div>
            
        </div>
    )
}