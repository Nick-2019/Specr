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
                    Home
                </div>
                </Link>

                <Link to='/survey'>
                <div className="NavBarBox">
                    <a>Find your next computer</a>
                </div>
                </Link>
                <Link to="/about">
                <div className="NavBarBox">
                    About
                </div>
                </Link>
                {this.props.loggedIn ? <Link to="/favorites"> <div className="NavBarBox">Favorited Computers</div> </Link> : <Link to="/">
                <div className="NavBarBox">
                    Login
                </div>
                </Link>  }

                {this.props.loggedIn ? <Link to="/home"> <div className="NavBarBox" onClick={this.props.logout} >Logout</div> </Link> : console.log("No") }
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