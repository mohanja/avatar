import { useState } from "react";
import { Add } from "./Add";

export function Create({users,key}) {

  return (
    <div className='tamil'>
      <img className='ima' src={users.image} />
      <div className='nam'>{users.name}</div>
      <div className='cour'>{users.couser}</div>
      <div className='cour'>{users.email}</div>
      <div className='cour'>{users.number}</div>
      <div>
        <button className='but'> detials</button>
      </div>
    </div>
  );
}


export function Lister(){  
  const [users,setUsers]=useState([{
    image: "https://th.bing.com/th/id/OIP.PZsMLTIgXaEsdCA0VjTo7gHaLH?pid=ImgDet&rs=1",
    name: "ram",
    couser: "full stack devolaper",
    email:"moha@gmail.com",
    number:"1234567890"
  },
  {
    image: "https://th.bing.com/th/id/OIP.PZsMLTIgXaEsdCA0VjTo7gHaLH?pid=ImgDet&rs=1",
    name: "ram",
    couser: "full stack devolaper",
    email:"ram@gmail.com",
    number:"0987654321"
  },
  {
    image: "https://th.bing.com/th/id/OIP.PZsMLTIgXaEsdCA0VjTo7gHaLH?pid=ImgDet&rs=1",
    name: "ram",
    couser: "full stack devolaper",
    email:"kl@gmail.com",
    number:"6785493021"
  }
]);
  return(
 <div> 
     <Add users={users} setUsers={setUsers}/>



<div className="tamil">
 <div className="our"> dp</div>
      <div className='nam1'>name</div>
      <div className='cour1'>couser</div>
      <div className='ema'>email</div>
      <div className='num'>number</div>
      <div></div>
      </div>
 <div>
  {users.map((us,index)=><Create users={us} key={index}/>)}
  

</div>

</div>
  )
}


