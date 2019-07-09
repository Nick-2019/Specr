import React, { Component } from 'react';
import Review from './ComputerReview'
import MakeReview from './ReviewForm'

const reviewURL = "http://localhost:8000/reviews"
const favoriteURL = "http://localhost:8000/favorites"



export default class ComputerPage extends Component {


    constructor(){
        super();
        this.state={
            reviews: [],
            computer: "",
            loggedin: false,
            fav: 0
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
        const favurl = totalurlrecall + "/favorites"
        // debugger
        fetch(reviewrl)
        .then(res => res.json())
        .then(rev => {
            arr = rev.reverse()
            // debugger
            this.setState({
                reviews: arr,
                revreviews: rev
            })
        })
        // debugger
        



        fetch(totalurlrecall)
        .then(res => res.json())
        .then(comp => {
            // debugger
            // computer = comp
            this.setState({
                computer: comp,
                loggedin: this.props.loginCheck
            })
        })

        fetch(favurl)
        .then(res => res.json())
        .then(favs => {
            let newarr = []
            newarr = favs
            // debugger
            this.setState({
                fav: newarr.length
            })
        })
        // debugger


    }
    // loadReviews = () => {
    //     // debugger
    //     let arr = []
    //     const url = "http://localhost:8000/computers/"
    //     const urladdon = this.props.id.match.params.id
    //     const totalurlrecall = url + urladdon
    //     const reviewrl = totalurlrecall + "/reviews"
    //     fetch(reviewrl)
    //     .then(res => res.json())
    //     .then(rev => {

    //         arr = rev
    //         // debugger
    //         this.setState({
    //             reviews: arr.reverse()
    //         })
    //     })
    //     // this.forceUpdate()
    // }

    composedReview = (e) => {
        e.preventDefault()
        console.log("HELLO")
        const content = document.getElementById("bean").value
        if(content !== ""){
            console.log("hit")
        
        fetch(reviewURL, {
            method: 'POST',
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                userId: localStorage.userId,
                computerId: this.props.id.match.params.id,
                content: content
            })
        })

        const review = {
            userId: localStorage.userId,
            computerId: this.props.id.match.params.id,
            content: content
        }

        let arr = this.state.reviews

        arr.unshift(review)
        this.setState({
            reviews: arr
        })

        // debugger
        // .then(this.loadReviews())
    }
        // debugger
    }

    favoriteComputer = (e) => {
        e.preventDefault()
        if(this.state.loggedin === true){
        fetch(favoriteURL, {
            method: 'POST',
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                userId: localStorage.userId,
                computerId: this.props.id.match.params.id,
            })
        })
    }
        // debugger

    }


render(){
    // debugger
    


    return(
        <div>
            <h1>{this.state.computer.make} {this.state.computer.name}</h1>
            <div>
                <img className="indvcomp" src={this.state.computer.img} />
            </div>


            <div>
                <p>
                    {this.state.fav} people have favorited this computer
                </p>
                <button type="submit" onClick={(e) => this.favoriteComputer(e)}>Favorite this computer</button>
            </div>




            <div>
            <p>
                    CPU:{this.state.computer.cpuName}
            </p><br></br>
            <p>
                    GPU:{this.state.computer.gpuName}
            </p><br></br>
            <p>
                    {this.state.computer.ramAmount}{this.state.computer.ramUnit} of {this.state.computer.ramType} RAM
            </p><br></br>
            <h2>
                    MSRP: ${this.state.computer.msrp}
            </h2>
            <li>
            <a href={this.state.computer.newegg}>Newegg Link</a>
            </li>
            <li>
            <a href={this.state.computer.OEMURL}>OEM website</a>
            </li>


            </div>
            {this.state.reviews.map(review => <Review review={review}/>)}

            {this.props.loginCheck ? <MakeReview compose={this.composedReview} /> : console.log("no")}


        </div>
    )
}
}