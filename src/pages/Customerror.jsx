import React from 'react'
import { ErrorMessage } from "formik";

const Customerror = ({ name }) => {
    return (
        <div className="text-red-800" >
            <ErrorMessage name={name} />
            <br></br>
        </div>
    )
}
export default Customerror
