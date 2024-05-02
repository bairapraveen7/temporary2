import { ADD_LIST_ITEM,DELETE_LIST_ITEM,UPDATE_LIST_ITEM } from "./types";
export const initialState = [];

export const listReducer = (state,action) => {
    switch(action.type){
        case ADD_LIST_ITEM: {
            return [
                ...state,
                action.payload
            ]
        };
        case UPDATE_LIST_ITEM: {
            return [
                ...state,
                action.payload
            ]
        };
        case DELETE_LIST_ITEM: {

            return state.filter((eachItem) => eachItem.id!=action.id);
        }
    }
}