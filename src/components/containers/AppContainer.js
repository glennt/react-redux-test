import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { changeView } from '../../actions/ui'
import App from '../../App';

const mapStateToProps = state => {
    return { ui: state.ui };
};

const mapDispatchToProps = dispatch => {
    return {
        changeView: view => {
            dispatch(changeView(view))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
