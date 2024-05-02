import React, { useState } from "react";
import { ADD_LIST_ITEM } from "../../reducer/listItem/types";

export const InputItem = ({dispatch}) => {
    const [message,setMessage] = useState('');
    return (
        <React.Fragment>
            <input type="text" onChange={(e) => setMessage(e.target.value)} placeholder="Enter your todo task" value={message}></input>
            <button onClick={() => { 
                dispatch({
                type: ADD_LIST_ITEM,
                payload:{
                    id: Date.now(),
                    message: message,
                    isCompleted: false
                }
            });
            setMessage('');
        }}>Add Item</button>
        </React.Fragment>
    )
}