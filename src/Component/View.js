import React from 'react';
import CustomAPI from "./baseAPI";

const View = ({id,name,username,email}) => {
const Deleteuser = (()=>{
    CustomAPI.delete(`/Profile/${id}`)
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
    })

  return (
    <div>
        <h1>{username}</h1>
        <h2>{name}</h2>
        <h3>{email}</h3>
        <form>
            <button onClick={Deleteuser}>Delete</button>
        </form>
    </div>
  )
}

export default View;