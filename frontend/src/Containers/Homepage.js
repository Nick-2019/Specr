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
            {/* <h1 className="WebsiteTitle" >SPECR</h1> */}
            {this.props.login ? <h1 className="welcomename" >Welcome back, {localStorage.name}</h1> : console.log("Not Logged In")}
            <ComputerContainer computers={this.state.computers} />
        </div>
    )
}
}