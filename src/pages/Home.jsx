import React from 'react'
import Image from 'next/image'
import landing from './Images/woman.gif'
import Link from 'next/link'
import Nav from './Nav'
import Button from "../Components/Button"
const Home = () => {
    return (
        <>
            <Nav />
            <div className="flex flex-col h-full" >
                <div className=" flex items-center justify-around flex-wrap h-3/5" >
                    <div className=" flex flex-col gap-9 " >
                        <div className="flex flex-col">
                            <p className="text-teal-500 font-bold text-2xl" >Lorem Ipsum</p>
                            <p className="text-black-900 font-black text-7xl flex flex-col flex-wrap " >Landing Page <br /> Design</p>
                        </div>
                        <div className="flex gap-10 " >
                            <Link href="/Signup">
                                <Button
                                    name="Sign Up"
                                    className="bg-sky-900 text-white font-bold  hover:bg-sky-600 "

                                />
                            </Link>
                            <Button
                                className="text-sky-700 font-bold hover:text-red-400 "
                                varient="contained"
                                name="Show more"
                            />
                        </div>
                    </div>
                    <Image src={landing} height="100" width="600" alt="landing_Image" />
                </div>
            </div>
        </>
    )
}
export default Home






















