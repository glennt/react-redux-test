import React, { Component } from 'react';

class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }
    render() {

        var list = this.props.list.map((item) => {
            return <div>{item.text}</div>
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
}


export default List;
