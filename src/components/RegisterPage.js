import React from "react";
import { Link } from 'react-router-dom'
import axios from 'axios'

import Nav from './LandingPage'

export default function Signup() {

    const[data, setData] = React.useState({
        firstName: "",
        lastName:"",
        email: "",
        clipper: "",
        ContactNumber:"",
        pass:"",
        confirmpass: "",
        isChecked: false,

    })

    function changeData(event) {
        const {name, value, type, checked} = event.target
        setData(prevData =>{
            return{
                ...prevData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    console.log(data)

    function handleSubmit(event) {
        if(data.pass === data.confirmpass && data.isChecked === true){
            // console.log("Successfully singed up");
            axios.post('http://localhost:3000/submitform', data)
                .then(response => {
                console.log(response);
                    })
                .catch(error => {
                    console.log(error);
                });
        }else{
            console.log("Passwords do not match");
            event.preventDefault();
            return
        }
    }

    return(
        <div>
            <Nav />
        <form onSubmit={handleSubmit} className="LoginSign">
            <div>
                <h1>Sign Up Page</h1>
                <input 
                    type="text" 
                    placeholder="First Name"
                    name="firstName"
                    onChange={changeData}
                    value = {data.firstName}
                    />
                <br />
                <br />
                <input 
                    type="text" 
                    placeholder="Last Name"
                    name="lastName"
                    onChange={changeData}
                    value = {data.lastName}
                    />
                <br />
                <br />
                <input 
                    type="text" 
                    placeholder="Phone Number"
                    name="ContactNumber"
                    onChange={changeData}
                    value = {data.ContactNumber}
                    />
                <br />
                <br />
                <input 
                    type="text" 
                    placeholder="Email id"
                    name="email"
                    onChange={changeData}
                    value = {data.email}
                    />
                <br />
                <br />
                <input 
                    type="text" 
                    placeholder="Clipper ID"
                    name="clipper"
                    onChange={changeData}
                    value = {data.clipper}
                    />
                <br />
                <br />
                <input 
                    type="password" 
                    placeholder="Password"
                    name="pass"
                    onChange={changeData}
                    value = {data.pass}
                    />
                <br />
                <br />
                <input 
                    type="password" 
                    placeholder="Confirm Password"
                    name="confirmpass"
                    onChange={changeData}
                    value= {data.confirmpass}
                    />
                <br />
                <br />
                <input 
                    id="Newsletter" 
                    type="checkbox"
                    name="isChecked"
                    onChange={changeData}
                    checked={data.isChecked} 
                    />
                <label htmlFor="Newsletter">I Agree with the terms and Conditions</label>
            </div>
            <br />
            <button>Sign up</button>
        </form>        
        </div>
    )
} 