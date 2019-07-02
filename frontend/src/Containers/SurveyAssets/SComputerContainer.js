import React, { Component } from 'react';
import CompCard from './SComputerCard'
import './survey.css'

export default class Container extends Component{
    render(){
        return(
            <div className="container">
                {/* This is a container lol */}
                {this.props.comps.map(comp => <CompCard comp={comp} /> )}
            </div>
        )
    }
}