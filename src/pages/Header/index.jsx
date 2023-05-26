import React from 'react'
import Searchbar from "../../Components/Searchbar"
import Image from 'next/image';
import search from "../Images/search.svg"
import Drawer from "../Drawer"
import cart from "../Images/cart.svg"
import SearchIcon from '@mui/icons-material/Search';
import Button from "../../Components/Button"
const index = () => {
    return (
        <div className={`w-full h-20 bg-white shadow-lg flex items-center gap-14 `} >
            <div>
                <Drawer />
            </div>
            <div className={`font-bold text-lg`}>
                MYSHOP.COM
            </div>
            <div className={`relative flex`}  >
                <Searchbar
                    label="search...."
                />
                <Button
                    varient="contained"
                    className={`bg-blue-900  border-none hover:bg-blue-800`}
                    // endIcon={<SearchIcon className={`text-black h-10`} />}
                    name={<SearchIcon className={`text-white font-bold text-3xl`} />}
                />
            </div>
            <div>
                <Image src={cart} alt="#" className={`h-[15%] w-[15%]`} />
            </div>

        </div>
    )
}

export default index