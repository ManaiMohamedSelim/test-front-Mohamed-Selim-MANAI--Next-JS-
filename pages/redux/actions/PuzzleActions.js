import * as actions from '../actions'
import {initialData} from "../../data/images";

export const refresh = (size) => async dispatch =>{
    dispatch({
        type: actions.REFRESH,
        payload: await initialData.slice(0,size)
    })
}

export const addCard = (selectedCards, card) => async dispatch =>{
    dispatch({
        type: actions.ADD_CARD,
        payload: await selectedCards.concat(card)
    })
}

export const clearSelected = (selectedCards) =>  dispatch =>{
    dispatch({
        type: actions.CLEAR_SELECTED,
        payload: selectedCards.splice(0,2)
    })
}
