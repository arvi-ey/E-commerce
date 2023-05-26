import React from 'react'
import Image from 'next/image'
import Slider from "../../Components/Slider"
const ProductStructure = (props) => {
    return (
        <>
            <div className={`w-full h-full flex`}>
                <div className={`w-[30%] h-[40%] mt-10 ml-10 overflow-hidden`} >
                    <img src={props.image} alt="" className={`overflow-hidden`} />
                    <Slider
                        image1={props.image1}
                        image2={props.image2}
                        image3={props.image3}
                        image4={props.image4}
                    />
                </div>
                <div className={`w-[30%] h-[40%] mt-10`} >{props.detail} </div>
            </div>

        </>
    )
}

export default ProductStructure