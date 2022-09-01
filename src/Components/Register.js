
// import './App.css';
import React, {Component} from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { TextField } from "./Textfield";



const SignUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Firstname is required"),

  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Lastname is required"),

  phoneNumber: Yup.string()
    .required("Phone number is required")
    .matches(
/^([0]{1}|\+?[234]{3})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7})$/g,
      "Invalid phone number"
    ),

  email: Yup.string().email().required("Email is required"),

  password: Yup.string()
    .required("Password is required")
    .min(6, "Password is too short - should be 6 chars minimum"),
});

class Register  extends Component {
  render() {
    return <div className="App">
      <Formik

      
        validationSchema={SignUpSchema}
        initialValues={{ email: "", password: "", firstName: "", lastName: "", phoneNumber: "" }}
        onSubmit={values => {

        }}
      >
      {formik => (<div>
            <div className="form">
              <form className="registerform">
                <span className="heading" >Register</span>
               
               <TextField lable="First Name" name="firstName" type="text" placeholder="First Name"/>
              
               <TextField lable="last Name" name="lastName" type="text" placeholder="Last Name"/>
               
               <TextField lable="phoneNumber" name="phoneNumber" type="number"  placeholder="PhoneNumber"/>
               
               <TextField lable="email" name="email" type="email"  placeholder="Email ID" />
              
               <TextField lable="password" name="password" type=" password"  placeholder="Password"/>
               <br/>
                <><button type="submit">Submit</button><br /><br /></> 

              </form>
            </div>
          </div>
          )}
          
        
      </Formik>
    </div>
   };
}

export default Register;
