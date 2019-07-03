import React, { Component } from 'react';
import Review from './ComputerReview'




export default class ComputerPage extends Component {


    constructor(){
        super();
        this.state={
            reviews: [],
            computer: ""

        }
    }
    

    componentDidMount(){
        const url = "http://localhost:8000/computers/"
        const urladdon = this.props.id.match.params.id
        const totalurlrecall = url + urladdon
        let arr = []
        // let computer = ""
        // debugger
        const reviewrl = totalurlrecall + "/reviews"
        // debugger
        fetch(reviewrl)
        .then(res => res.json())
        .then(rev => {
            arr = rev
            // debugger
            this.setState({
                reviews: arr
            })
        })
        // debugger
        



        fetch(totalurlrecall)
        .then(res => res.json())
        .then(comp => {
            // debugger
            // computer = comp
            this.setState({
                computer: comp
            })
        })
        // debugger

    }


render(){
    // debugger
    


    return(
        <div>
            Computer Page
            {this.state.reviews.map(review => <Review review={review}/>)}
        </div>
    )
}
}