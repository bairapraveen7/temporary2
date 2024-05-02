import React from "react";
import { DELETE_LIST_ITEM, UPDATE_LIST_ITEM } from "../../reducer/listItem/types";

export const ListItem = ({item, dispatch}) => {
    return (
         <React.Fragment>
            <p className={item.isCompleted?"strike-through":"normal"}>{item.message}</p>
            <input type='checkbox' onChange={(e) => dispatch({
                type:UPDATE_LIST_ITEM,
                payload:{
                    ...item,
                    isCompleted:e.target.checked
                }
            })}></input>Completed
            <button onClick={() => dispatch({
                type:DELETE_LIST_ITEM,
                payload:{
                    ...item
                }
            })}>Delete</button>
         </React.Fragment>
    )
}