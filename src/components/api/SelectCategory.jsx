import React, { useEffect, useState } from "react";
import axios from 'axios';

export const SelectCategory = () => {
    const [categories,setCategories] = useState([]);
    const getCategories = () => {
        axios.get('https://fakestoreapi.com/products/categories')
        .then((res) => setCategories(res.data))
        .catch((err) => console.log(err))
    }
    useEffect(() => {
       getCategories();
    },[]);
    return (
        <React.Fragment>
            <p>The categories are</p>
            {
                categories?.map((eachCategory,index) => <p key={index}>{eachCategory}</p>)
            }
        </React.Fragment>
    )
}