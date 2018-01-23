import React, {Component} from 'react';

class Nav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="nav">
                <input type="button" value="List" onClick={() => this.handleOnClick('LIST')}></input>
                <input type="button" value="LoadItem" onClick={() => this.handleOnClick('LOADED_ITEM')}></input>
            </div>
        )
    }

    handleOnClick(view) {
        this.props.changeView(view);
    }
}

export default Nav;