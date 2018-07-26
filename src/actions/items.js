import * as types from '../constants/ActionTypes';
import {getItem} from '../api/ItemService';

export const addItemToList = text => ({ type: types.ADD_ITEM_TO_LIST, text });
export const loadItem = () => (dispatch, getState) => {
    getItem('blah').then((res) => {
        dispatch(loadItemSuccess(res));
    });
}

export function loadItemSuccess(item) {
    return {
        type: types.LOAD_ITEM_SUCCESS,
        item: item
    };
}

export function selectItem(id) {
    return {
        type: types.SELECT_ITEM,
        id: id
    };
}