import React from "react";
import { Link } from 'react-router-dom'
import Nav from './LandingPage'

export default function Signup() {

    const[data, setData] = React.useState({
        email: "",
        pass:"",
        confirmpass: "",

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
            console.log("Successfully singed up");
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
                <h1>Login Page</h1>
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
            </div>
            <button>Login</button>
        </form>        
        </div>
    )
} 