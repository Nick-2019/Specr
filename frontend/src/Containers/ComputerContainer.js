import React, { Component } from 'react';
import ComputerCard from './ComputerCard'



export default class ComputerContainer extends Component {


    componentDidMount() {
        // debugger
    }
render(){
    return(
        <div>
            <h1 className="welcomename" >
            Computers:
            </h1>
            {this.props.computers.map(computer => <ComputerCard comp={computer} />)}
        </div>
    )
}
}

