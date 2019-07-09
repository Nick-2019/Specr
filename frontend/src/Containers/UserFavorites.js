import React, { Component } from 'react';
import FavContainer from './FavComputer'

const compURL = "http://localhost:8000/computers"
const userFavURL = "http://localhost:8000/users/" + localStorage.userId + "/favorites"

export default class UserFavs extends Component {

    constructor(){
        super();
        this.state={
            computers: [],
            joiner: [],
            faved: [],
            isLoading: true
        }

    }
    




    componentDidMount() {

        let comparr = []

        fetch(compURL)
        .then(res => res.json())
        .then(computerArr => {
            this.setState({
                computers: computerArr
            })
            // debugger
        })
        fetch(userFavURL)
        .then(res=> res.json())
        .then(faved => {
            // debugger
            this.setState({
                joiner: faved,
            })
        })
        // .then(this.test())


        // debugger
        this.setState({
            isLoading: false
        })
        
    }

    // filterFavComp = (state) => {
    //     debugger

    // }


    render(){
        // debugger

        return(
            <div>
                {this.props.login ? "Your Favorited Computers": "Users must be logged in to view favorites"}
                {this.props.isLoading ?  console.log("FUCK") : <FavContainer computers={this.state.computers} joiners={this.state.joiner} />}
            </div>
        )
    }
}