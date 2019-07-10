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
                        Username:<input id="pants" type="text"></input>
                        Password:<input id="shirt" type="password"></input>
                        Confirm Password:<input id="corgi" type="password"></input>
                        Name:<input id="bigbeans" type="text"></input>
                        <Link to="/login"><div> <button type="submit" onClick={(e) => this.handleRegister(e)} >Create Account!</button> </div></Link>
                    </form>
                </div>
            </div>
        )
    }
}