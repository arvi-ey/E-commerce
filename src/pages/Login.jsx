import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import back from './Images/left-arrow.gif'
import login from './Images/login.svg'
import LoginIcon from '@mui/icons-material/Login';
import Button from "../Components/Button"
const Login = () => {
    return (
        <>
            <div className="h-screen w-full bg-white flex items-center justify-start sticky flex-col " >
                <Link href="./" >
                    <Image src={back} height="100" width="100" alt="#" />
                </Link>
                <div className="w-screen h-4/5 flex justify-evenly flex-wrap " >
                    <div className="w-96 h-4/5 bg-sky-300 rounded-lg shadow-2xl flex flex-col items-center justify-center gap-6">
                        <p className="text-white text-3xl font-bold">Login</p>
                        <input className=" p-3 rounded-md text-black w-4/5  outline-blue-500" type="email" placeholder="email" />
                        <input className=" p-3 rounded-md text-black w-4/5  outline-blue-500" type="text" placeholder="Phone" />
                        <input className=" p-3 rounded-md text-black w-4/5  outline-blue-500" type="text" placeholder="Password" />
                        {/* <button className="bg-sky-800 text-white p-2 rounded-md font-bold w-52 hover:bg-sky-600 flex justify-center "><LockOpenIcon /> Login</button> */}
                        <Button
                            varient="contained"
                            name="Login"
                            endIcon={<LoginIcon />}
                            className={`bg-sky-900 text-white font-bold w-52 hover:bg-sky-700 `}

                        />
                        <div className="flex  items-center text-black" >
                            <p>New User?</p>
                            <Link href="./Signup" >
                                <p className="text-red-600  cursor-pointer hover:text-red-700  ">Create an account</p>
                            </Link>
                        </div>
                    </div>
                    <Image src={login} height="600" width="600" alt="#" />
                </div>
            </div>
        </>
    )
}

export default Login