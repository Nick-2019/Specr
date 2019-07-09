// import React from 'react';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './Containers/Homepage'
import ComputerContainer from './Containers/ComputerContainer'
import ComputerPage from './Containers/ComputerPage'
import About from './AboutUs'
import Login from './Login'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './header'
import Survey from './Containers/Survey'
import Test from './LoginTesting'
import UserFavs from './Containers/UserFavorites'

const loginUrl = "http://localhost:8000/login"






class App extends Component {

  constructor(){
    super();
    this.state = {
      user: '',
      token: '',
      userid: '',
      username: '',
      isloggedin: false
    }
  }

  badLogin = () => {
    alert("Incorrect credentials")
  }


  login = (username, password) => {
    // e.preventDefault()
    // debugger


        fetch(loginUrl, {
        method:"POST", headers:{"Content-Type":"application/json"},
        body:JSON.stringify({"username":username, "password":password})})
        // .then(res=> {debugger})
        .then(res => res.json())
        .then(data => {
            // debugger
          if( data.success === "Approved") {
            localStorage.setItem("token", data.token)
            // debugger
            localStorage.setItem("userId", data.userId)
            localStorage.setItem("userName", data.username)
            this.setState({
              isloggedin: true
            })
          }else{
            this.badLogin()
          }
        })
        // this.props.history.push('/home')
        
        // debugger
        

  }
  componentDidMount() {
    if(localStorage.token !== undefined){
      this.setState({
        isloggedin: true
      })
    }
  }

  logout = () => {
    localStorage.clear()
    this.setState({
      isloggedin: false
    })
  }


  render(){
  return (
    <BrowserRouter>
    <div className="App">
      {/* <header className="App-header">
      </header> */}
        <Header loggedIn={this.state.isloggedin} logout={this.logout} />


        <Switch>
        <Route path='/favorites' render={() => <UserFavs login={this.state.isloggedin}/>} />
        <Route path='/home' render={() => <Homepage />} />
        <Route path='/computers/:id' render={(e) => <ComputerPage id={e} loginCheck={this.state.isloggedin} /> } />
        {/* <Route path='/computer' render={() => <ComputerContainer/> } /> */}
        {/* <ComputerContainer /> */}
        <Route path='/about' render={() => <About/> } />
        {/* <About /> */}
        <Route path='/survey' render={() => <Survey /> }  />
        {/* <Route path='/test/login' render={() => <Test />} /> */}
        <Login login={this.login} />
        <p>
          Hello world!
        </p>
        <h1
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Bird up! The WORST show on television! */}
        </h1>
        </Switch>
    </div>
    </BrowserRouter>
  );
}
}
export default App;
