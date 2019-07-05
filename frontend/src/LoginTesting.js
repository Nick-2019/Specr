import React, { Component } from 'react';
const url = "http://localhost:8000/login"


const name = "John Cena"

const password = "abcdef"

export default class Test extends Component {

    // componentDidMount() {
    // fetch(url, {
    //     method:"POST", headers:{"Content-Type":"application/json"},
    //     body:JSON.stringify({"username":name, "password":password})})
    //     // .then(res=> {debugger})
    //     .then(res => res.json())
    //     .then(data => {
    //         debugger
    //     })    
    // }

    render(){
        return(
            <div>
                <h1>TEST</h1>
            </div>
        )
    }
}