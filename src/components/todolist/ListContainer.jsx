import React, { useReducer } from "react";
import { initialState, listReducer } from "../../reducer/actions";
import { InputItem } from "./InputItem";
import { DisplayList } from "./DisplayList";

export const ListContainer = () => {
    const [state,dispatch] = useReducer(listReducer,initialState);
    
    return(
        <React.Fragment>
            <InputItem />
            <DisplayList />
        </React.Fragment>
    )
}