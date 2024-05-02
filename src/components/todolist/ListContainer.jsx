import React, { useReducer } from "react";
import { initialState, listReducer } from "../../reducer/listItem/actions";
import { InputItem } from "./InputItem";
import { DisplayList } from "./DisplayList";
import './todolist.scss';

export const ListContainer = () => {
    const [state,dispatch] = useReducer(listReducer,initialState);
    
    return(
        <React.Fragment>
        <h1>Add Any Products You Want To Buy</h1>
            <InputItem  dispatch={dispatch} />
            <DisplayList state={state} dispatch={dispatch} />
        </React.Fragment>
    )
}