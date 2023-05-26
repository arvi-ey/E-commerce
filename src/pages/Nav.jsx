import React from 'react'
import Image from 'next/image'
import logo from "./Images/web_logo.svg"
import Link from 'next/link'
import style from './style.module.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
// import Hambergerpage from './hambergerpage'
import { useState } from 'react'
import Signup from './Signup'
import { OpenWithSharp } from '@mui/icons-material'
const Nav = (props) => {
    // const value = props.open_ham;
    const [openPage, setopenPage] = useState(false);
    const hambergerpageopen = () => {
        setopenPage(!openPage)
        props.hamShow(openPage);
    }
    // console.log(openPage)
    return (
        <>
            {!openPage && <nav className="flex justify-around items-center mt-4 flex-wrap box-border">
                <div className="items-center flex justify-center">
                    <Image src={logo} height="50" width="100" alt="Logo" />
                </div>
                <ul className={`text-grey-800 flex  font-bold  gap-20 flex-wrap justify-around md:flex-row`} >
                    <Link href="/"  >
                        <li className={`hover:text-sky-500 cursor-pointer duration-500 ${style.navbar}`}>Home</li>
                    </Link>
                    <Link href="/products" >
                        <li className={`hover:text-sky-500 cursor-pointer duration-500 ${style.navbar}`}>Shop</li>
                    </Link>
                    <li className={`hover:text-sky-500 cursor-pointer duration-500 ${style.navbar}`}>About</li>
                    <li className={`hover:text-sky-500 cursor-pointer duration-500 ${style.navbar}`}>Contacts</li>
                    <li className={`hover:text-sky-500 cursor-pointer duration-500 ${style.navbar}`}>Services</li>
                    <div className={` bg-sky-700 text-white py-1 px-2 hover:bg-sky-600 ${style.navbar}`}>
                        <Link href="./Login" >
                            <li className='cursor-pointer'>Login</li>
                        </Link>
                    </div>
                    <div className={`hidden cursor-pointer ${style.hiddenbar} `} >
                        <MenuIcon

                            onClick={hambergerpageopen}

                        />
                    </div>
                </ul>
            </nav>}
            {/* {openPage && <Hambergerpage

                oncancel={hambergerpageopen}
            />
            } */}
        </>
    )



}
export default Nav