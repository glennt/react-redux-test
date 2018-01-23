import Immutable from 'seamless-immutable';
import { ADD_ITEM_TO_LIST } from '../constants/ActionTypes'


const defaultState = Immutable({
    list: [],
    loadedItem: {}
});

export default function items(state = defaultState, action) {
    switch (action.type) {
        case ADD_ITEM_TO_LIST:
            var item = {
                id: 1,
                completed: false,
                text: action.text
            };

            state = Immutable.update(state, 'list', (arr) => {
               return arr.concat(item)
            });
            return state;
        default:
            return state
    }
}