import React, { Component } from 'react';
import FavContainer from './FavComputer'

const compURL = "http://localhost:8000/computers"


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
        const userFavURL = "http://localhost:8000/users/" + localStorage.userId + "/favorites"

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
            let arr = []
            faved.map(fav => {
                let num = fav.computerId
                arr.push(num)
            })
            // debugger
            this.setState({
                joiner: arr,
                isLoading: false
            })
        })
        // .then(this.test())


        // debugger
        // this.setState({
        //     isLoading: false
        // })
        
    }

    // filterFavComp = (state) => {
    //     debugger

    // }


    render(){
        // debugger

        return(
            <div>
                {this.props.login ? console.log("Display") : "Users must be logged in to view favorites"}
                {this.state.isLoading ?  console.log("FUCK") : <FavContainer computers={this.state.computers} joiners={this.state.joiner} />}
            </div>
        )
    }
}