import React, {Component} from 'react';
import { connect } from 'react-redux';
import LoadedItem from '../LoadedItem.js';
import {loadItem} from '../../actions/items';

const mapStateToProps = state => {
    return { loadedItem: state.items.loadedItem };
};

const mapDispatchToProps = dispatch => {
    return {
        loadItem: () => dispatch(loadItem())
    };
};


class LoadedItemContainerDataFetch extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.loadItem();
    }

    render() {
        return(<LoadedItem loadedItem={this.props.loadedItem} />);
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(LoadedItemContainerDataFetch);
