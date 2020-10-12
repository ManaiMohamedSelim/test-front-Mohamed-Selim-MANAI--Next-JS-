import * as actions from '../actions'
import {initialData} from "../../data/images";
import {mixData} from "../../functions/functions";

const initialState = {
    images: mixData(initialData),
    selectedCards: []
};


export const puzzleReducer = (state=initialState, action) =>{
    switch (action.type) {
        case actions.REFRESH:
            return{
                ...state,
                images: action.payload,
                selectedCards: []
            }
            break;

            case actions.ADD_CARD:
        return{
            ...state,
            selectedCards: action.payload
            }
        break;

        case actions.CLEAR_SELECTED:
        return{
            ...state,
            selectedCards: action.payload
            }
        break;
        default: return state;

    }
}