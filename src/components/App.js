import {connect} from 'react-redux';
import Main from './Main';
// import {bindActionCreators} from 'redux';
// import {removeEmployee} from './redux/action';

function mapStateToProps(state){
    return { 
        employees : state
    }
}

// function mapDispatchToProps(dispatch){
//     return bindActionCreators({removeEmployee},dispatch)
// }

const App= connect(mapStateToProps)(Main);

export default App;