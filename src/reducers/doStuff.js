import { DO_STUFF } from '../constants/ActionTypes'

export default function stuffs(state = [], action) {
    switch (action.type) {
        case DO_STUFF:
            return state.concat({
                    id: 1,
                    completed: false,
                    text: action.text});
        default:
            return state
    }
}