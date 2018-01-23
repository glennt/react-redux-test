import React, {Component} from 'react';

class LoadedItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return(
            <div>
                {JSON.stringify(this.props.loadedItem)}
            </div>
        )
    }
}

export default LoadedItem;