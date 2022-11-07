import React from 'react'
import { useEffect, useState } from 'react';
import axios from "axios"


export const Welcomepage = () => {

  
  const [data, setData] = useState([])
  useEffect(() => {
    getData()
  }, )

  const getData = () => {
    axios.get(`https://reqres.in/api/users?page`).then((res) => {
      setData(res.data.data)
      console.log(data)
    })
  }



  const outClick = ()=> {
    // alert('Click happened');
    localStorage.removeItem("signup :")
    window.location.reload();


  }

  const del=()=>{
      localStorage.clear();
    window.location.reload();

  }
  
  return (
    <div>
     
    
     
     <h1 class="Heading">Welcome You Are Loged In</h1>
     <br/>
      {
        data.map((e) => {
          return <div class='form-inline mb-4 justify-content-center'>
           
            <img class="rounded"  src={e.avatar} alt="" />
            <p>{e.first_name} {e.last_name}</p>
            <p>{e.email}</p>
          </div>
          
        })
      }

<button class="btn btn-danger float-right card-footer "  onClick={() =>outClick()}>LogOut</button>
<button class="btn btn-danger float-right card-footer "  onClick={() =>del()}>Delete</button>

    </div>

  )
}
