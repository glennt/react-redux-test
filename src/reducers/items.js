import Immutable from 'seamless-immutable';
import uuid from 'uuid';
import { ADD_ITEM_TO_LIST, LOAD_ITEM_SUCCESS, SELECT_ITEM } from '../constants/ActionTypes'
import _ from 'lodash';


const defaultState = Immutable({
    list: [],
    loadedItem: {},
    selectedItemId: ''
});

export default function items(state = defaultState, action) {
    switch (action.type) {
        case ADD_ITEM_TO_LIST:
            var item = {
                id: uuid.v4(),
                completed: false,
                text: action.text,
                selected: false
            };

            state = Immutable.update(state, 'list', (arr) => {
               return arr.concat(item)
            });
            return state;
                break;
        case LOAD_ITEM_SUCCESS:
            return Immutable.set(state, 'loadedItem', action.item);
            break;
        case SELECT_ITEM:
            return Immutable.setIn(state, ['selectedItemId'], action.id);
            break;
        default:
            return state
    }
}