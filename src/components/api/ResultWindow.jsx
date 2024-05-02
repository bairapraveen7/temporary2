import React, { useContext } from "react";
import { ApiDataContext } from "../../context/ApiData";

export const ResultWindow = () => {
    const {data,setData} = useContext(ApiDataContext);
    console.log(data); 
    return (
        <React.Fragment>
            {
            data &&  ( data.constructor == Array ? data.map((eachItem) => 
                 <>
                <p>{eachItem.id}</p>
                <p>{eachItem.title}</p>
                <p>{eachItem.price}</p>
                <p>{eachItem.description}</p>
                </>
            ) :  <>
            <p>{data.id}</p>
            <p>{data.title}</p>
            <p>{data.price}</p>
            </> ) 
            }
            
        </React.Fragment>
    )
}