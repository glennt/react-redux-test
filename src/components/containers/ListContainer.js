import { connect } from 'react-redux';
import { addItemToList } from '../../actions/items';
import List from '../List.js';

const mapStateToProps = state => {
    return { list: state.items.list };
};

const mapDispatchToProps = dispatch => {
    return {
        addItemToList: text => {
            dispatch(addItemToList(text))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
