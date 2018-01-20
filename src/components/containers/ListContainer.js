import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addItemToList } from '../../actions/list'


const mapStateToProps = state => {
    return { list: state.list };
};

const mapDispatchToProps = dispatch => {
    return {
        doStuff: text => {
            dispatch(addItemToList(text))
        }
    }
}

class ListContainer extends Component {
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
        this.props.doStuff(this.state.text);
        this.setState({ text: ''});
    }

}


export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
