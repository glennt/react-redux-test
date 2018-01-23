import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import App from '../../App';

const mapStateToProps = state => {
    return { ui: state.ui };
};

const mapDispatchToProps = dispatch => {
    return {
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
