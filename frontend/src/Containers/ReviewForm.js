import React, { Component } from 'react';

export default class MakeReview extends Component{

    render(){
        return(
            <div className="write">
                <h1>
                    Write a review:
                </h1>
                <form className="ReviewFormBox">
                    <textarea id="bean" rows="6" cols="120" ></textarea>
                    <button type="submit" onClick={(e) => this.props.compose(e)}>Submit Review</button>
                </form>
            </div>
        )
    }
}