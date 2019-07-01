import React, { Component } from 'react';
import ComputerContainer from './ComputerContainer'

// import React, { Component } from 'react';



const URL = "http://localhost:8000/computers"
export default class Homepage extends Component{

    constructor(){
        super();
        this.state = {
            computers: [],
            isLoading: true
        }
    }

    

    componentDidMount() {
        fetch(URL)
        .then(res => res.json())
        .then(data => {
            // debugger
            this.setState({
                computers: data,
                isLoading: false
            })
        })
    }

render(){
    return(
        <div>
            <h1>SPECR</h1>
            <ComputerContainer computers={this.state.computers} />
        </div>
    )
}
}