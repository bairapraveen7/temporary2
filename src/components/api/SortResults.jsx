import React, { useContext, useState } from "react";
import { ApiDataContext } from "../../context/ApiData";

export const SortResults = () => {
    const {data,setData} = useContext(ApiDataContext);

    return (
        <React.Fragment>
            <input type='checkbox' onChange={(e) => data.sort()}></input>Sort Products In
        </React.Fragment>
    )
}