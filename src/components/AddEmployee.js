import React,{Component} from 'react';
import employeeService from '../services/employeeService';
import { connect } from 'react-redux';
// import {addEmployee} from './redux/reducer'

class AddEmployee extends Component{
    constructor(props){
        super(props);
        this.service = new employeeService();
        this.state={
            name:'',
            salary :'',
            address:'',
            sameAdrs:true,
            permanentAddress:''
        }
    }

    handleInputChange=(event)=>{
        const key = event.target.name; 
        const val = event.target.value;
        console.log("inp change ",key," ",val)
        this.setState({[key]:val});
    }
    radio=event=>{
        this.setState({sameAdrs:true});
        
        // console.log(" radio ",this.state.sameAdrs)
        // this.same = true;
        // console.log(" ad ",this.same)
    }

    addEmp=()=>{
        console.log(" val ",this.state);
        let isMandatoryFilled=true;
        for(let key in this.state){
            console.log(key,"  ",!this.state[key])
            if(!this.state[key] && !(key ==='permanentAddress' && this.state.sameAdrs===true))
              isMandatoryFilled=false;
            console.log(" in loop ",isMandatoryFilled)
        }
        if(isMandatoryFilled){
        // this.service.addEmp(this.state).then((val)=>console.log(" Add ",val))
        this.props.dispatch({
            type:"ADD_EMP",
            data:this.state
        });
            this.setState({
                name:'',
                salary :'',
                address:'',
                sameAdrs:true,
                permanentAddress:''
            })
    //   window.location.href = '/employee';    
    }
    }
    render(){
        return (
            <div>
                <form id="emp-form">                                                                          
                    <div className="form-group">
                        <label>Employee Name</label>
                        <input className="form-control" type="text" value={this.state.name} name="name" maxLength="20" required onChange={this.handleInputChange} placeholder="name" />
                     </div>                                                                          
                    <div className="form-group">
                        <label>Salary</label>
                        <input type="number" className="form-control" value={this.state.salary} name="salary"  required onChange={this.handleInputChange} placeholder="salary" />
                     </div>                                                                         
                    <div className="form-group">
                        <label>Address</label>
                        <textarea className="form-control" rows="2" cols="50" value={this.state.address} name="address" required onChange={this.handleInputChange} placeholder="address" />
                     </div>        
                     <div>
                       <input type="radio" value={this.state.sameAdrs} name="sameAdrs" onChange={this.radio}/>
                       <label>Is perrmanent address.</label>
                     </div> 

                     {this.state.sameAdrs ? (""): (<div className="form-group">
                        <label>Permanent Address</label>
                        <textarea className="form-control" rows="2" cols="50" value={this.state.permanentAddress} name="permanentAddress" required onChange={this.handleInputChange} placeholder="permanent address" />
                     </div>)}      

                     <button type="button" onClick={this.addEmp}>Add Employee</button>                                                       
                                                       
                </form>
            </div>
            
        )
    }
}

function mapStateToProps(state){
    return { 
        employees : state
    }
}
// export default connect(mapStateToProps)(ViewEmployee);
export default connect(mapStateToProps)(AddEmployee);