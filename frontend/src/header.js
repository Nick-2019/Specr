import React, { Component } from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export default class Header extends Component {

    handleClick = () => {
        this.props.history.push('/survey')

    }
    render(){
        return(
            <div class="headerBar">
            <h1 className="WebsiteTitle" >SPECR</h1>
            <div className="navBar">
                <Link to='/home'>
            <div className="NavBarBox">
                    <a className="navtext" >Home</a>
                </div>
                </Link>

                <Link to='/survey'>
                <div className="NavBarBox">
                    <a className="navtext" >Find your next computer</a>
                </div>
                </Link>
                <Link to="/about">
                <div className="NavBarBox">
                    <a className="navtext">About</a>
                </div>
                </Link>
                {this.props.loggedIn ? <Link to="/favorites"> <div className="NavBarBox"> <a className="navtext" > Favorited Computers </a> </div> </Link> : <Link to="/">
                <div className="NavBarBox">
                    <a className="navtext" >Login</a>
                </div>
                </Link>  }

                {this.props.loggedIn ? <Link to="/home"> <div className="NavBarBox" onClick={this.props.logout} ><a className="navtext"> Logout </a> </div> </Link> : console.log("No") }
                {/* <Link to="/">
                <div className="NavBarBox">
                    Login
                </div>
                </Link> */}
            </div>
        </div>
        )
    }
}