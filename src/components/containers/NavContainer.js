import { connect } from 'react-redux';
import Nav from '../Nav.js';
import { changeView } from '../../actions/ui'

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        changeView: view => {
            dispatch(changeView(view))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
