import { connect } from 'react-redux';
import { addItemToList, selectItem } from '../../actions/items';
import List from '../List.js';

const mapStateToProps = state => {
    return { list: state.items.list, selectedItemId: state.items.selectedItemId };
};

const mapDispatchToProps = dispatch => {
    return {
        addItemToList: text => {
            dispatch(addItemToList(text))
        },
        selectItem: id => {
            dispatch(selectItem(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
