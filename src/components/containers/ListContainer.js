import { connect } from 'react-redux';
import { addItemToList } from '../../actions/items';
import List from '../List.js';

const mapStateToProps = state => {
    return { items: state.items };
};

const mapDispatchToProps = dispatch => {
    return {
        addItemToList: text => {
            dispatch(addItemToList(text))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
