import React, { useEffect, useRef, useState } from 'react'

import { Welcomepage } from './Welcomepage.js';

const Register = () => {
    const name = useRef();
    const last = useRef();
    const email = useRef();
    const mob = useRef();
    const pass = useRef();
    const [show, setShow] = useState(false);
    const [showlogin, setShowlogin] = useState(false);

    const localsignup=localStorage.getItem("signup :")
    const localEmail=localStorage.getItem("Email :")
    const localname=localStorage.getItem("First :")
    const localPass=localStorage.getItem("Password :")




    useEffect(() => {
        if (localsignup) {
            setShow(true)
        }
        if(localEmail){
            setShowlogin(true)
        }
    })

    const submithandle = () => {
        if (name.current.value && last.current.value && email.current.value && mob.current.value && pass.current.value)
            //   console.log(name.current.value, last.current.value, email.current.value, mob.current.value, pass.current.value)
            localStorage.setItem("First :", name.current.value)
        localStorage.setItem("LastName :", last.current.value)
        localStorage.setItem("Email :", email.current.value)
        localStorage.setItem("Mobile :", mob.current.value)
        localStorage.setItem("Password :", pass.current.value)
        localStorage.setItem("signup :", email.current.value)

        alert("Account Created succesfully!!")
        window.location.reload();
    }

    const loginhandle=()=>{
        if ( email.current.value===localEmail && pass.current.value===localPass){
              localStorage.setItem("signup :",email.current.value)
              window.location.reload(); 
        }else{
            alert("Plaese Enter Valid Credential")
        }

    }

    return (
        <>
            {show?<Welcomepage/>:
            (showlogin?
                <div className="form">
                    <h1 className="heading">Hello {localname}</h1>
                <input lable="email" name="email" type="email" ref={email} placeholder="Email ID" />

                 <input lable="password" name="password" type="Password" ref={pass} placeholder="Password" />
                 <br/>
                 <button type="submit" onClick={loginhandle}>LogIN</button>
                 </div>

:   
               <div className="form">

                    <span className="heading" >Register</span>

                    <input lable="First Name" name="firstName" type="text" ref={name} placeholder="First Name" />

                    <input lable="last Name" name="lastName" type="text" ref={last} placeholder="Last Name" />

                    <input lable="phoneNumber" name="phoneNumber" type="number" ref={mob} placeholder="PhoneNumber" />

                    <input lable="email" name="email" type="email" ref={email} placeholder="Email ID" />

                    <input lable="password" name="password" type="Password" ref={pass} placeholder="Password" />
                    <br />
                    <><button type="submit" onClick={submithandle}>Submit</button><br /><br /></>

                </div>)
            }
        </>
    )
}

export default Register