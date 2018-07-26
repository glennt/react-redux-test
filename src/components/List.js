import React, { Component } from 'react';
import EditItem from './EditItem';
import * as actions from '../actions/items';

class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
        this.handleSelect = this.handleSelect.bind(this);
    }
    render() {

        var list = this.props.list.map((item) => {
            return <EditItem text={item.text} id={item.id} onClick={ (e) => this.handleSelect(e, item.id) } selected={item.id === this.props.selectedItemId}/>
        });

        return (
            <div className="App">
                <div>
                    <input type="text" value={this.state.text} onChange={this.handleChange.bind(this)}/>
                    <input type="button" value="Add" onClick={this.handleAdd.bind(this)}/>
                </div>
                <div>
                    List of stuff
                    <div>
                        {list}
                    </div>
                </div>
            </div>
        );
    }


    handleChange(e) {
        this.setState({ text: e.target.value });
    }

    handleAdd(e) {
        this.props.addItemToList(this.state.text);
        this.setState({ text: ''});
    }

    handleSelect(e, id) {
        console.log('Select item ' + id);
        this.props.selectItem(id);
    }
}


export default List;
