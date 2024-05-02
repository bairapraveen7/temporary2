import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const ApiDataContext = createContext();

export const ApiData = ({children}) => {
    const [data,setData] = useState([]);
    const getProductsData = () => {
      axios.get('https://fakestoreapi.com/products')
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => console.log(err))
    }
    useEffect(() => getProductsData(),[]);
    return (
          <ApiDataContext.Provider value={
            {data: data,setData: setData}
          }>
            {children}
          </ApiDataContext.Provider>
    )
}
