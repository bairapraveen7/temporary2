import React from "react";

export const DisplayList = ({state}) => {
    return (
        <React.Fragment>
            {state?.map((eachItem) => {
                return <p>{eachItem.message}</p>
            })}
        </React.Fragment>
    )
}