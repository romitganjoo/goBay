import React from 'react'
import { Link } from 'react-router-dom'
import LandingImage from './LandingImage'

import Login from './LoginPage'

export default function Navbar(){
    return(
        <header>
            <div className='nav'>
                <Link to="/"><h2>GoBay</h2></Link>
                    <div className='LS'>
                        <Link to="/login"><button>Login</button></Link>
                        <Link to="/register"><button>Sign Up</button></Link>
                        <Link to="/cart"><button>Cart</button></Link>

                        <button>Log Out</button>
                    </div>
            </div>
        </header>
    )
}