import React from "react";
import { Link } from 'react-router-dom'
import Nav from './LandingPage'

export default function Book() {

    const[data, setData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        fromDate:"",
        fromTime: "",
        toDate: "",
        toTime: "",

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
                <h1>Book a clipper</h1>
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
                    placeholder="Email id"
                    name="email"
                    onChange={changeData}
                    value = {data.email}
                    />
                <br />
                <br />
                <input 
                    type="date" 
                    placeholder="From"
                    name="fromDate"
                    onChange={changeData}
                    value = {data.fromDate}
                    />
                <br />
                <br />
                <input 
                    type="time" 
                    placeholder="From"
                    name="fromTime"
                    onChange={changeData}
                    value = {data.fromTime}
                    />
                <br />
                <br />
                <input 
                    type="date" 
                    placeholder="To"
                    name="toDate"
                    onChange={changeData}
                    value= {data.toDate}
                    />
                <br />
                <br />
                <input 
                    type="time" 
                    placeholder="To"
                    name="toTime"
                    onChange={changeData}
                    value = {data.toTime}
                    />
                <br />
                <br />
            </div>
            <button>Request Booking</button>
        </form>        
        </div>
    )
} 