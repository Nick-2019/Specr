import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'


export default class Login extends Component {


    loginHandler = (e) => {
        // e.preventDefault()
        const username = document.getElementById(1).value
        const password = document.getElementById(2).value
        
        this.props.login(username, password)
    }

    render(){
        return(
            <div>
                <h2>
                Login
                </h2>
                <form>
                    <div class="ui input">
                    <h1> Username: </h1> <input id='1' type="text" label="username"></input></div><br></br><br></br>
                    <div class="ui input">
                    <h1> Password: </h1><input id='2' type="password" label="passwprd" ></input><br></br>
                    </div>
                    <br></br>
                    <Link to='/home' > <div> <button class="ui inverted primary button" type="submit" onClick={(e) => this.loginHandler(e) } >Login</button></div></Link>
                </form>
                <br></br><br></br>
                <Link to='/register'> <button class="ui inverted green button" type="submit">Create a new Account!</button></Link>

            </div>
        )
    }
    }