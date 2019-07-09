import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'


export default class Login extends Component {


    loginHandler = (e) => {
        e.preventDefault()
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
                    Username:<input id='1' type="text" label="username"></input><br></br>

                    Password:<input id='2' type="password" label="passwprd" ></input><br></br>

                    <Link to='/home' ><button type="submit" onClick={(e) => this.loginHandler(e) } >Login</button></Link>
                </form>
                <button type="submit">Create Account</button>

            </div>
        )
    }
    }