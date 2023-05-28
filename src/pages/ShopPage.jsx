import React from 'react'
import Shop from './Shop'
import { useEffect, useState } from 'react'
import Image from 'next/image';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const ShopPage = () => {
    const [apidata, setApiData] = useState([]);
    const [cart, setcart] = useState(false);
    const addKart = () => {
        setcart(!cart);
    }
    const api = () => {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((data) => {
                setApiData(data.products)
            }
            )
    }
    useEffect(() => {
        api();
    }, [])
    return (
        <div>
            <div className="w-auto flex flex-wrap gap-10 justify-around">

                {
                    apidata.map((value) => {
                        return (
                            <Shop
                                key={value.id}
                                id={value.id}
                                name={value.title}
                                price={value.price}
                                img={value.thumbnail}
                                description={value.description}
                                rating={value.rating}
                                onClick={addKart}

                            />
                        )
                    })
                }

            </div>
        </div >
    )
}

export default ShopPage