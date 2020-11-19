import React from 'react';
import {BrowserRouter, Route, Redirect} from 'react-router-dom'
import Signin from './components/Signin'
import Navbar from './components/Navbar'
import Home from './home/Home'
import Movies from './movies/Movies'
import Singlemovie from './movies/Singlemovie'
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'

function PrivateRoute({isSigned,Component, ...rest}){
  return(
  <Route 
  {...rest}
  render={(props)=>{
    if(isSigned){
      return <Component {...props}/>
    }
    else{
      return <Redirect to="/signin" />
    }
  }}
  />
  )
}
class App extends React.Component{
 

  render(){
    const {username}= this.props
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
     <Route exact path="/" render={(props)=>{
       return <Home {...props}/>
     }}/>
     
    <PrivateRoute 
    path="/movies"
    isSigned = {username}
    Component = {Movies}
    />

<PrivateRoute 
    path="/singlemovie"
    isSigned = {username}
    Component = {Singlemovie}
    />

    <Route path="/Signin" 
    render={(props)=>{
      if(username){
        return <Redirect to="/"/>
      }
      else{
        return(
          <Signin
          {...props}
          isSigned = {false}
         
          />
        )
      }
    }}/>
    </BrowserRouter>
    </div>
  );
}
}

function mapStateToProps(state) {
  return {
    username: state.user
  };
}

export default connect(mapStateToProps)(App);

