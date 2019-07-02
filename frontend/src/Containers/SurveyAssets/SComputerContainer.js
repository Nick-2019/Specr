import React, { Component } from 'react';
import CompCard from './SComputerCard'

export default class Container extends Component{
    render(){
        return(
            <div>
                This is a container lol
                {this.props.comps.map(comp => <CompCard comp={comp} /> )}
            </div>
        )
    }
}