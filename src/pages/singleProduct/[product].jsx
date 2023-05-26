import React from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import ProductStructure from './ProductStructure';
import Header from "../Header"
const product = () => {
    const [value, setValue] = useState([])
    const oneProduct = useRouter();
    const Product_id = oneProduct.query.product;
    console.log(Product_id);

    const fetch_product = () => {
        fetch(`https://dummyjson.com/products/${Product_id}`)
            .then(response => response.json())
            .then((data) => {
                console.log(data)
                setValue(data)

            })
    }

    useEffect(() => {
        fetch_product()
        console.log("Page Releaded")

    }, [])
    return (
        <>
            <Header />
            <ProductStructure
                image={value.thumbnail}
                detail={value.description}
                title={value.title}
                image1={value.images[0]}
                image2={value.images[1]}
                image3={value.images[2]}
                image4={value.images[3]}
            />
        </>
    )
}

export default product;