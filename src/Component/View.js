import React, { useState } from 'react';
import CustomAPI from "./baseAPI";

const View = ({id,name,username,email}) => {
  const [upDetail, setUpDetail] = useState({
    Name:"",
    UserName:"",
    Mail:"",
  })  

  const handleChange = (e)=>{
    setUpDetail((prev)=>({...prev, [e.target.name]:e.target.value}))
  }

  const UpdateDetails = ()=>{
    const OBJ = {
      name:upDetail.Name,
      username:upDetail.UserName,
      email:upDetail.Mail,
    }

    CustomAPI.put(`/Profile/${id}`, OBJ)
    .then((res)=>console.log(res.data))
  }

    const DeleteUser = (()=>{
        CustomAPI.delete(`/Profile/${id}`)
   .then((res)=>console.log(res))
   .catch((err)=>console.log(err))
    })

  return (
    <div>
        <h2>{username}</h2>
        <h3>{name}</h3>
        <h3>{email}</h3>
        <form>
          <input type="text" placeholder="name..." name="Name" onChange={handleChange}/>
          <input type="text" placeholder="username..." name="UserName" onChange={handleChange}/>
          <input type="email" placeholder="mail..." name="Mail" onChange={handleChange}/>
          <button onClick={UpdateDetails}>Update</button>
        <button onClick={DeleteUser}>Delete</button>
        </form>
      
    </div>
  )
}

export default View;