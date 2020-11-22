import React from 'react'
import {connect} from 'react-redux'

class Signin extends React.Component{
    state={
        username:"",
        password:"",
        
      }
      handleSignin=()=>{
        const {username} = this.state
        const {password} = this.state
        if(username==="" & password===""){
         // this.setState({
         //   isSigned: true
       //   })
       const action = {
        type: "LOGIN",
        payload: username
      };
      this.props.dispatch(action);
        }
          else{
            console.log("enter username nd password");
        }
      }
      handleUsername=(e)=>{
        this.setState({
          username: e.target.value
        })
      }
      handlePassword=(e)=>{
        this.setState({
          password: e.target.value
        })
      }
    render(){
    return(
        <div>
            <h1>Signin</h1>
            <input type="text" placeholder="username" onChange = {this.handleUsername}/>
            <input type="password" placeholder="password" onChange = {this.handlePassword}/>
            <button onClick={this.handleSignin}>Enter</button>
        </div>
    )
}
}
function mapDispatchToProps(dispatch) {
    return {
      dispatch: dispatch
    };
  }
  export default connect(null, mapDispatchToProps)(Signin);

