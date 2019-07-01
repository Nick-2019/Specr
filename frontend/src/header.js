import React, { Component } from 'react';
import './App.css'


export default class Header extends Component {
    render(){
        return(
            <div class="headerBar">
            <div className="navBar">
                <div className="NavBarBox">
                    Find your next Computer
                </div>
                <div className="NavBarBox">
                    About
                </div>
                <div className="NavBarBox">
                    Reviews
                </div>
                <div className="NavBarBox">
                    Login
                </div>
            </div>
        </div>
        )
    }
}