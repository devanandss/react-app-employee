import React,{Component} from 'react';
import employeeService from '../services/employeeService'
import {connect} from 'react-redux';
import {removeEmployee} from './redux/action';


class ViewEmployee extends Component{
    constructor(props){
        super(props);
        this.service = new employeeService();
        this.state={employees:this.props.employees,search:"",tableList:"",
              name:'',
              salary :'',
              address:''}
        this.handleChange = this.handleChange.bind(this);
        this.edit = this.edit.bind(this);
        this.update = this.update.bind(this);
    }
    // componentDidMount(){
    //     this.props.dispatch(removeEmployee(1));
    // }
    //     this.service.employeeList().then(list=>{
    //         this.setState({employees:list})
    //     })
    //     // this.getTableList()
    // }

    handleChange=()=>{
        const searchTerm = document.getElementById('searchTerm').value.trim().toLowerCase();
        console.log(" doc ",document.getElementById('searchTerm'),"\n val ",searchTerm)
            this.setState({search:searchTerm})
            // const search= this.state.search;
            let tbody="";
            // console.log(" search ",search)
            if(searchTerm){
                tbody='';
            this.state.employees.forEach((val,i)=>{
                console.log(" lopps ",i)
                if(val.name.toLowerCase().includes(searchTerm) || String(val.salary).toLowerCase().includes(searchTerm) || val.address.toLowerCase().includes(searchTerm) || val.permanentAddress.toLowerCase().includes(searchTerm))
                        {
                            tbody+=`<tr key={i} id={i}>
                            <th scope="row">${i + 1}</th>
                            <td>${val.name}</td>
                            <td>${val.salary}</td>
                            <td>${val.address}</td>
                            <td><button type="button" onClick={this.edit(${i})}>edit</button></td>
                            <td><button type="button" onClick="this.delete(${i})">delete</button></td>
                        </tr>`
                        }
                    
                        
            });
            document.getElementById('tableBody').innerHTML = tbody;
            console.log(" document ", document.getElementById('tableBody'),"\n",tbody)
        }
            else {
                tbody=''
                this.state.employees.forEach((val,i)=>{
                    tbody+=`<tr key={i} id={i}>
                    <th scope="row">${i + 1}</th>
                    <td>${val.name}</td>
                    <td>${val.salary}</td>
                    <td>${val.address}</td>
                    <td><button type="button" onClick={this.edit(${i})}>edit</button></td>
                    <td><button type="button" onClick="this.delete(${i})">delete</button></td>
                </tr>`
                })
            document.getElementById("tableBody").innerHTML = tbody;
            
                    console.log(" empty ",this.tbody)
          }
    }

    delete(i){
        console.log(" index i",i)
        this.props.dispatch(removeEmployee(i));
    }

    // getTableList(){
    //     let tabList ="";
    //    this.state.employees.forEach((rowData, index) => {
    //     tabList += `<tr key=${index}>
    //                 <th scope="row">${index + 1}</th>
    //                 <td>${rowData.name}</td>
    //                 <td>${rowData.salary}</td>
    //                 <td>$S{rowData.address}</td>
    //               </tr>`
    //         }
    // )
    //         this.setState({tableList:tabList})
            
    //     console.log(" intialise tab list ",tabList)
    // }
       componentDidUpdate(){
        
        console.log(" in view updae ",this.props.employees)

        if(this.props.employees.length !== this.state.employees.length){
        this.setState({employees:this.props.employees})
        // this.render();
        console.log("inside render")
    }
    //    let tbody=''
    //     this.state.employees.forEach((val,i)=>{
    //         tbody+=`<tr key={i}>
    //         <th scope="row">${i + 1}</th>
    //         <td>${val.name}</td>
    //         <td>${val.salary}</td>
    //         <td>${val.address}</td>
    //         <td><button type="button">edit</button></td>
    //         <td><button type="button" onClick="this.delete(${i})">delete</button></td>
    //     </tr>`
    //     })
    // document.getElementById("tableBody").innerHTML = tbody;
    
        // document.getElementById("tableBody").innerHTML=this.bulitTable();
    }
    render(){
      
        // console.log(" in view emp ",this.props.employees)
        // if(this.props.employees)
        // {
        //     this.setState({employees:this.props.employees})
        //     console.log(" print ")
        // }
        return ( <div>
            <div className="form-group col-md-4" >
       <label>Serach</label>
       <input className="form-control" type="text" id="searchTerm" name="search" onChange={this.handleChange} placeholder="Type to search" />
       </div>
        <table className="table">
             <thead>
             <tr>
                <th>S.No</th>
                 <th>Employee Name</th>
                 <th>Salary</th>
                 <th>Address</th>
                 <th>Edit</th>
                 <th>Delete</th>
            </tr>
             </thead>
             <tbody id="tableBody">
        {this.state.employees.map((rowData, index) => (
        <tr key={index} id={index}>
            <th scope="row">{index + 1}</th>
            <td>{rowData.name}</td>
            <td>{rowData.salary}</td>
            <td>{rowData.address}</td>
            <td><button type="button" onClick={()=>this.edit({index})}>edit</button></td>
            {/* <td><button type="button" onClick={this.delete({index})}>delete</button></td> */}
            <td><button type="button" onClick={()=>this.props.dispatch(removeEmployee(index))}>delete</button></td>
        </tr>
        ))}
    
            </tbody>
         </table>
    
        </div>)
    }

    edit(i){
        // console.log(" edit ", i)
        const index= i.index;
        let tr ='';
        const row = this.state.employees[index];
        this.setState({name:row.name})
        this.setState({salary:row.salay})
        this.setState({address: row.address})
        // console.log(" state ",this.state,
        // "\n",this.state.employees[index],"\n",row.name)
        tr=`<tr key=${index} id=${index}>
        <th scope="row">${index + 1}</th>
        <td> 
        <input type="text" value="10">
        //  <input className="form-control" type="text" value=${this.state.name}  maxLength="20" required onChange=${this.handleInputChange} placeholder="name" />
        </td>
        <td> 
         <input className="form-control" type="number" value=${this.state.salary} name="salary" required onChange=${this.handleInputChange} placeholder="salary" />
        </td>
        <td> 
         <input className="form-control" type="text" value=${this.state.address} name="address" required onChange=${this.handleInputChange} placeholder="address" />
        </td>
        <td><button type="button" onClick={()=>this.update(${index})}>edit</button></td>
        <td><button type="button" onClick="this.delete(${index})">delete</button></td>
    </tr>`
    document.getElementById(`${index}`).innerHTML = tr;

    }
    
    handleInputChange=(event)=>{
        const key = event.target.name; 
        const val = event.target.value;
        console.log("inp change ",key," ",val)
        this.setState({[key]:val});
    }

    update=()=>{
            console.log(" update ")
            this.props.dispatch({type:"UPDATE_EMP",data:{name:this.state.name,salary:this.state.salary,address:this.state.address}})
    }
    
}

function mapStateToProps(state){
    return { 
        employees : state
    }
}
export default connect(mapStateToProps)(ViewEmployee);