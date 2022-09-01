import React from 'react'
import { useEffect, useState } from 'react';
import axios from "axios"
import { useNavigate } from "react-router-dom";


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

  const navigate = useNavigate();

  const outClick = ()=> {
    // alert('Click happened');
    navigate('/Login')


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
    </div>

  )
}
