import React, { Component } from 'react';

export default class Review extends Component{

    componentDidMount() {
        

    }


    render(){
        return(
            <div>
                <h1>Review</h1>
                <p>
                {this.props.review.content}
                </p>
            </div>
        )
    }
}