import React, { Component } from 'react';
import ComputerCard from './ComputerCard'



export default class ComputerContainer extends Component {
render(){
    return(
        <div>
            <h1>
            Computer Container
            </h1>
            <ComputerCard />
        </div>
    )
}
}