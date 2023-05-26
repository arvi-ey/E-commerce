import React from 'react'
import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import InfoIcon from '@mui/icons-material/Info';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import CloseIcon from '@mui/icons-material/Close';
const index = () => {
    return (
        <>
            <div className={`absolute right-4 cursor-pointer text-lg hover:bg-slate-300 duration-500 rounded-full `}  ><CloseIcon /></div>
            <ul className={`flex flex-col w-full gap-11 mt-24 font-bold text-lg  `} >
                <Link href="/">
                    <li className={`flex pl-10 w-full   gap-5 hover:text-blue-700 duration-500 cursor-pointer`} >
                        <HomeIcon />
                        Home</li>
                </Link>
                <li className={`flex pl-10 w-full  gap-5 hover:text-blue-700 duration-500 cursor-pointer`}>
                    <ShoppingBagIcon />
                    Order</li>
                <li className={`flex pl-10 w-full  gap-5 hover:text-blue-700 duration-500 cursor-pointer`}>
                    <InfoIcon />
                    About</li>
                <li className={`flex pl-10 w-full  gap-5 hover:text-blue-700 duration-500 cursor-pointer`}>
                    <AssuredWorkloadIcon />
                    Services</li>
                <li className={`flex pl-10 w-full  gap-5 hover:text-blue-700 duration-500 cursor-pointer`}>
                    <PermContactCalendarIcon />
                    Contact
                </li>
            </ul>
        </>
    )
}

export default index