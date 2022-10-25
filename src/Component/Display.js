import React from 'react';
import {useState, useEffect} from "react";
import CustomAPI from "./baseAPI";
import View from "./View";

const Display = () => {
const [details, setDetails] = useState([])
const [name,setName] = useState("")
const [username, setUsername] = useState("")
const [email,setEmail] = useState("")

useEffect(()=>{
CustomAPI.get("/Profile")
.then((res)=>setDetails(res.data))
.catch((err)=>console.log(err))
},[])

const renderIteration = (()=>{
    return details.map((item)=><View key={item.id} {...item}  /> )
})

const AddUser = (()=>{
    const OBJ = {
        id:Math.random,
        name:name,
        username:username,
        email:email,
    }

    CustomAPI.post("/Profile", OBJ)
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
})
  return (
    <div>
        
        <form>
            <input type="text" name="name" id="name"
            placeholder='name..' onChange={(e)=>setName(e.target.value)}/>
            <input type="text" name="username" id="username"
            placeholder='username..' onChange={(e)=>setUsername(e.target.value)}/>
            <input type="email" name="email" id="email"
            placeholder='email..' onChange={(e)=>setEmail(e.target.value)}/>
        
        <button onClick={AddUser}>Add</button>
        </form>
        {renderIteration()}
    </div>
  )
}

export default Display