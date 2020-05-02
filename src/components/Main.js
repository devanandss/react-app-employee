import React, {Component} from 'react';
import Login from './LogIn';
import {Route} from 'react-router-dom';
import AddEmployee from './AddEmployee'
import ViewEmployee from './ViewEmployee';

class Main extends Component{
    
    render(){
        console.log(" in main ",this.props)
        return(
            <div>
                <Route exact path="/" component={Login}/>
                <Route path="/employee" render={()=>(
                    <div>
                        <h3>Add Employee:</h3>
                        <AddEmployee/>
                        <br/>
                        <br/>
                        <br/>
                       <h3> Employee View:</h3>
                        <ViewEmployee/>
                    </div>
                )}/>
            </div>
        )
    }
}

export default Main;