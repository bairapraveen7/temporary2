import React, { useContext } from "react";
import { ApiDataContext } from "../../context/ApiData";
import axios from "axios";

export function LimitResultsButton(){
    const {data,setData} = useContext(ApiDataContext);
    const getProducts = () => {
        axios.get('https://fakestoreapi.com/products?limit=5')
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
    }

    return (
        <React.Fragment>
            <input type="text" placeholder="Enter a number to limit results"></input>
            <button onClick={getProducts}>Get Products</button>
        </React.Fragment>
    )
}