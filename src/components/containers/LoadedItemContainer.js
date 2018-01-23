import { connect } from 'react-redux';
import LoadedItem from '../LoadedItem.js';

const mapStateToProps = state => {
    return { loadedItem: state.items.loadedItem };
};

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadedItem);
