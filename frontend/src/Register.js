import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'



export default class Register extends Component {

    handleRegister = (e) => {
        // e.preventDefault()
        const username = document.getElementById("pants").value
        const pass = document.getElementById("shirt").value
        const confirm = document.getElementById("corgi").value
        const name = document.getElementById("bigbeans").value
        // debugger
        if(pass === confirm){
            this.props.register(username, pass, name, confirm)
        }else{
            alert("Passwords do not match")
        }

    }
    render(){
        return(
            <div>
                Create an Account!
                <div>
                    <form>
                        Username: <div class="ui input focus"><input id="pants" type="text"></input></div>
                        Password: <div class="ui input focus"><input id="shirt" type="password"></input></div>
                        Confirm Password:<div class="ui input focus"><input id="corgi" type="password"></input></div>
                        Name:<div class="ui input focus"><input id="bigbeans" type="text"></input></div>
                        <Link to="/login"  ><div> <button class="ui inverted green button" type="submit" onClick={(e) => this.handleRegister(e)} >Create Account!</button> </div></Link>
                    </form>
                </div>
            </div>
        )
    }
}