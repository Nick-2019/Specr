import React, { Component } from 'react';

export default class Review extends Component{

    componentDidMount() {
        

    }


    render(){
        return(
            <div className="review">
                <h2>
                {this.props.review.content}
                </h2>
            </div>
        )
    }
}