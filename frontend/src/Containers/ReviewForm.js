import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'
export default class MakeReview extends Component{

    render(){
        return(
            <div className="write">
                <h1>
                    Write a review:
                </h1>
                
                <form className="ReviewFormBox">
                    <textarea id="bean" rows="6" cols="100" ></textarea>
                    <button type="submit" class="ui blue button" onClick={(e) => this.props.compose(e)}>Submit Review</button>
                </form>
            </div>
        )
    }
}