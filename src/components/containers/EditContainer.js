import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'



const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {

    }
}


class EditContainer extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                <div>
                    Edit Container
                </div>
            </div>
        );
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(EditContainer);
