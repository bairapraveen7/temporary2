import React, { useEffect } from "react";
import { GetSingleProduct } from "./GetSingleProduct";
import { LimitResultsButton } from "./LimitResultsButton";
import { SelectCategory } from "./SelectCategory";
import { SortResults } from "./SortResults";
import { ResultWindow } from "./ResultWindow";
import axios from "axios";

export const ApiContainer = () => {
    return (
         <div className="api-container">
            <GetSingleProduct />
            <LimitResultsButton />
            <SelectCategory />
            <SortResults />
            <ResultWindow />
         </div>
    )
}