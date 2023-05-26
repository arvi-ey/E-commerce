import React from 'react'
import Image from 'next/image'
import Rating from "../Components/Rating"
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Button from "../Components/Button"
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Snackbar from "../Components/Snackbar"
const Shop = (props) => {
    return (
        <>
            <div className="flex flex-wrap justify-around transform transition-all hover:scale-100 ">
                <div className="h-62  w-56 bg-white rounded-lg mt-10 shadow-md object-cover">
                    <Link href={`./singleProduct/${props.id}`} >
                        <div className="object-cover">
                            <img src={props.img} height="500" width="500" alt="#" className="object-cover" />
                        </div>
                    </Link>
                    <div className={`flex flex-wrap text-xs font-bold`} >{props.description}</div>
                    <div>
                        <Rating
                            rating={props.rating}
                        />
                    </div>
                    <div className="flex mt-1">
                        <CurrencyRupeeIcon sx={{ "height": "15px" }} />
                        <div className={`font-bold text-xl  `} >{props.price}</div>
                    </div>

                    <div className="ml-1"  >
                        {/* <button className="bg-yellow-400 p-1 rounded-md cursor-pointer w-[50%] hover:bg-yellow-500 " onClick={props.onClick}>Add to Cart</button> */}
                        <Snackbar
                            varient="contained"
                            name="Add to cart"
                            className={`bg-yellow-400 text-black font-bold hover:bg-yellow-300`}
                            description={"Item Added to Cart"}
                        // onClick={props.onClick}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Shop 