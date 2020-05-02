import React, {Component} from 'react';


class Login extends Component{
    constructor(props){
        super(props);
        const arr = [{user:"Divya",password:"divya123"},{user:"Arun",password:"arun123"},{user:"Arvinth",password:"arvinth123"}]
 
       this.state ={user:'',password:'',list:arr};
    }
nameChnge=(event)=>{
    // console.log(" user ",event," \n ",event.target.value)
    // const val = event.target.value;
this.setState({user:event.target.value.trim()});
}


 passChange=event=>{
    this.setState({password:event.target.value.trim()});
} 

checkUser=()=>{
console.log(this.state.list)
let login;
   this.state.list.forEach((val)=>{
       if(this.state.user === val.user)
       if(this.state.password === val.password){
            console.log(" Logged in successfully ")
        window.location.href="/employee";
        login = true;
        }
   })
   if(!login)
    alert(" Invalid user name or Password");
}

    render(){
        return (
            <div style={{padding:"10% 40% "}} >
                
         <h3>Login Credentials</h3>
         <form >
         <div className="form-group">
             <label>User Name</label>
        <input className="form-control" type="text" id="usr_name" placeholder="User name" onChange={this.nameChnge}/>        
        </div>
        <div className="form-group">
            <label>Password</label>
        <input type="password" className="form-control" id="password" placeholder="password" onChange={this.passChange}/>
       </div>
       <button className="button primary" type="button" onClick={this.checkUser}>Log in</button>
       {/* <button className="button primary" type="button" onClick={this.checkUser}>Log in</button> */}
       </form>
       {/* <Link to="/employee"></Link> */}
            </div>
        )
    }
}

export default Login;