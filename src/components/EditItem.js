import React, { Component } from 'react';

class EditItem extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        var color = '#FFFFFF';

        if(this.props.selected) {
            color ='red';
        }
        return (
            <div onClick={this.props.onClick} style={{backgroundColor: color}}>
                {this.props.text}
            </div>
        );
    }
}


export default EditItem;
