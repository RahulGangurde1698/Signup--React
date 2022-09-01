
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";




const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters")
});




function Login() {

  const navigate = useNavigate();

  const handleClick = () => {
    // alert('Click happened');
    navigate('/Welcomepage')


  }



  return (<div className="App">
    <Formik
      validationSchema={schema}
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => {

      }}

      validateOnMount
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit
      }) => (
        <div className="login">
          <div className="form">

            <form noValidate onSubmit={handleSubmit}>
              <span>Login</span>

              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Enter email id / username"
                className="form-control inp_text"
                id="email"
              />

              <p className="error">
                {errors.email && touched.email && errors.email}
              </p>

              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="Enter password"
                className="form-control"
              />
              
              <p className="error">
                {errors.password && touched.password && errors.password}
              </p>
             
              <button type="submit"
                onClick={() => handleClick()}>Login</button>
              <br /><br />
            </form>
          </div>
        </div>
      )}
    </Formik>
  </div>
  );
}

export default Login;


