import { ADD_ITEM_TO_LIST } from '../constants/ActionTypes'

export default function list(state = [], action) {
    switch (action.type) {
        case ADD_ITEM_TO_LIST:
            return state.concat({
                    id: 1,
                    completed: false,
                    text: action.text});
        default:
            return state
    }
}