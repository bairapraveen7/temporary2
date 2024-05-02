import React, { useContext, useState } from "react";
import axios from "axios";
import { ApiDataContext } from "../../context/ApiData";

export function GetSingleProduct(){
    const [id,setId] = useState();
    const {data,setData} = useContext(ApiDataContext);
    const getProduct = () => {
        axios.get('https://fakestoreapi.com/products/'+id)
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
    }
    return(
        <React.Fragment>
            <input type="text" onChange={(e) => setId(e.target.value)} placeholder="Enter id of the product"></input>
            <button onClick={getProduct}>Get Product</button>
        </React.Fragment>
    )
}