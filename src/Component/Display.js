import React from 'react';
import { useEffect,useState } from 'react';
import CustomAPI from "../Component/baseAPI";
import View from "./View";

const Display = () => {
    const[user,setUser] = useState([])
    const [username,setUsername] = useState("")
    const [name,setName] = useState("")
    const[email,setEmail] = useState("")

    useEffect(()=>{
     CustomAPI.get("/Profile")
     .then((res)=>setUser(res.data))
     .catch((err)=>console.log(err))
    },[])

    const Adduser =(()=>{
        const OBJ = {
            id:user[user.length-1].id+1,
            username:username,
            name:name,
            email:email,
        }
        CustomAPI.post("/Profile",OBJ)
        .then((res)=>console.log(res.data))
        .catch((err)=>console.log(err))
    })
const renderIteration = (()=>{
    return user.map((item)=><View key={item.id} {...item} />)
})
  return (
    <div>
        <form>
        <input id="username" name="username" 
        type="text" placeholder="username..." 
        onChange={(e)=>setUsername(e.target.value)}/>

         <input id="name" name="name" 
        type="text" placeholder="name..." 
        onChange={(e)=>setName(e.target.value)}/>

         <input id="email" name="email" 
        type="email" placeholder="email..." 
        onChange={(e)=>setEmail(e.target.value)}/>
        
        <button onClick={Adduser}>Add</button>
        </form>

        {renderIteration()}
    </div>
  )
}

export default Display;