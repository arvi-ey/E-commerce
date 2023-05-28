import React from 'react'
import Image from 'next/image'
import Button from "../../Components/Button"
import Slider from "../../Components/Slider"
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Rating from "../../Components/Rating"
import Snackbar from "../../Components/Snackbar"
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import facebook from "../Images/facebook.svg"
import whatsapp from "../Images/whatsapp.svg"
import instagram from "../Images/instagram.svg"
import { Instagram } from '@mui/icons-material';



const ProductStructure = (props) => {
    return (
        <>
            <div className={`w-full h-full flex justify-center gap-8`}>
                <div className={`w-[30%] h-[40%] mt-10 ml-10 overflow-hidden`} >
                    <img src={props.image} alt="Image" className={`overflow-hidden`} />
                    <Slider
                        image1={props.image}
                        image2={props.image}
                        image3={props.image}
                        image4={props.image}
                    />
                </div>
                <div className={`flex flex-col w-[30%] h-fit gap-6   mt-10`}>
                    <div className={`font-extrabold text-3xl`} >{props.title}</div>
                    <div className="flex mt-1 gap-4">
                        <div className='flex'>
                            <CurrencyRupeeIcon sx={{
                                "height": "20px", marginTop: "5px", color: "rgb(100 116 139)"
                            }} />
                            <strike aria-hidden="true" className={`text-slate-500 text-xl`} >{(props.price + Math.trunc(props.discount))}</strike>
                        </div>
                        <div className='flex'>
                            <CurrencyRupeeIcon sx={{ "height": "20px", marginTop: "5px" }} />
                            <div className={`font-bold text-xl  `} >{props.price}</div>
                        </div>
                    </div>
                    <div className={`text-red-600 font-semibold`}> Discount  {Math.trunc(props.discount)}%</div>
                    <div className={`font-semibold`} >{props.detail} </div>
                    <Rating
                        rating={props.rating}
                    />
                    <div className={`flex gap-5`}>

                        <Snackbar
                            varient="contained"
                            name="Add to cart"
                            className={`bg-yellow-400 text-black font-bold hover:bg-yellow-300`}
                            description={"Item Added to Cart"}
                        />
                        <Button
                            varient="contained"
                            name="Order now"
                            className={`bg-yellow-400 text-black font-bold  hover:bg-yellow-300 `}

                        />
                    </div>
                    <div className="flex" >
                        <span className={`font-semibold text-lg`} >Share: </span>
                        <Image src={facebook} height={100} width={100} className={`h-8 cursor-pointer`} alt="facebook" />
                        <Image src={whatsapp} height={100} width={100} className={`h-8 cursor-pointer`} alt="facebook" />
                        <Image src={instagram} height={100} width={100} className={`h-8 cursor-pointer`} alt="facebook" />

                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductStructure