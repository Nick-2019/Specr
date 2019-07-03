import React, { Component } from 'react';
import CompCard from './SComputerCard'
import './survey.css'

export default class Container extends Component{
    render(){
        return(
            <div className="container">
                <div>
                    <select onChange={(e) => this.props.type(e)}>
                        <option selected="selected" >Filter by computer type</option>
                        <option value="Desktop">Desktop</option>
                        <option value="Laptop">Laptop</option>
                        <option value="Tablet">Tablet</option>
                        <option value="All">All</option>
                    </select>
                </div>
                {/* This is a container lol */}
                {this.props.comps.map(comp => <CompCard comp={comp} /> )}
            </div>
        )
    }
}