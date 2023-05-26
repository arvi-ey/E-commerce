import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import back from './Images/left-arrow.gif'
import signup from "./Images/sign_up.svg"
import { Formik, Form, Field } from 'formik'
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import Button from "../Components/Button"
import * as yup from "yup"
import Customerror from './Customerror'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
const validationSchema = yup.object({
    name: yup.string().required("* Enter Name"),
    mail: yup.string().required("* Enter Email").email(),
    phone: yup.number().min(1000000000, "* Invalid Number").max(9999999999, "* Invalid Number").required("* Enter Phone number"),
    password: yup.string().required("* Enter a password"),
    confirmPassword: yup.string().oneOf([yup.ref("password")], "password Must Match").required("* Confirm your password")

})
const Signup = () => {
    return (
        <>
            <div className="h-screen w-full  flex items-center justify-start flex-col flex-wrap" >
                <Link href="./" >
                    <Image src={back} height="100" width="100" alt="#" className="cursor-pointer" />
                </Link>
                <Formik
                    validationSchema={validationSchema}
                    initialValues={{
                        name: "",
                        mail: "",
                        phone: "",
                        password: "",
                        confirmPassword: ""
                    }}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    <Form>
                        <div className=" w-screen flex justify-around " >
                            <div className="w-96 h-full bg-sky-300 rounded-lg shadow-2xl flex flex-col items-center justify-center gap-2 flex-wrap">
                                <p className="text-white text-3xl font-bold">Signup</p>
                                <Field className=" p-3 rounded-md text-black w-4/5 outline-blue-700" name="name" type="text" placeholder="Name" />
                                <Customerror name="name" />
                                <Field className=" p-3 rounded-md text-black w-4/5  outline-blue-700" name="mail" type="email" placeholder="email" />
                                <Customerror name="mail" />
                                <Field className=" p-3 rounded-md text-black w-4/5  outline-blue-700" name="phone" type="text" placeholder="Phone" />
                                <Customerror name="phone" />
                                <Field className=" p-3 rounded-md text-black w-4/5  outline-blue-700" name="password" type="password" placeholder="Password" />
                                <Customerror name="password" />
                                <Field className=" p-3 rounded-md text-black w-4/5  outline-blue-700" name="confirmPassword" type="password" placeholder="Confirm Password" />
                                <Customerror name="confirmPassword" />
                                {/* <button className="bg-sky-800 text-white p-2 rounded-md font-bold w-72 hover:bg-sky-600 flex justify-center " type="submit" ><LockOutlinedIcon />  Create Account</button> */}
                                <Button
                                    varient="contained"
                                    name="Create Account"
                                    endIcon={<VpnKeyIcon />}
                                    className={`bg-sky-900 text-white font-bold w-72 hover:bg-sky-700 `}

                                />
                                <div className="flex items-center text-black p-5 " >
                                    <p>Already have an account?</p>
                                    <Link href="./Login" >
                                        <p className=" text-red-600  cursor-pointer hover:text-red-700" >Click to login</p>
                                    </Link>
                                </div>
                            </div>
                            <Image src={signup} alt="#" />
                        </div>
                    </Form>
                </Formik>
            </div>
        </>
    )
}
export default Signup