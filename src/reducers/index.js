import { combineReducers } from 'redux'
import list from './list'
import ui from './ui';

const rootReducer = combineReducers({
    list,
    ui
})

export default rootReducer