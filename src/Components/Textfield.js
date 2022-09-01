import React from "react";
import { ErrorMessage, useField } from "formik";

export const TextField = ({input, ...props })=>{
    const [field,meta]= useField(props);
    
    return(
        <div className="mb-2">
            <label htmlFor={field.name}>{input}</label>
            <input
            className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
            {...field}{...props} autoComplete="off"/>
            <ErrorMessage component="div" name={field.name} className="error1"></ErrorMessage>
        </div>
    )
}