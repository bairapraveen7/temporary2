import React from "react";
import { ListItem } from "./ListItem";

export const DisplayList = ({state, dispatch}) => {
    return (
        <React.Fragment>
            {state?.map((eachItem) => {
                return <ListItem item={eachItem} dispatch={dispatch} />
            })}
        </React.Fragment>
    )
}