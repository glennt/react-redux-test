import { combineReducers } from 'redux';
import items from './items';
import ui from './ui';

const rootReducer = combineReducers({
    items,
    ui
})

export default rootReducer