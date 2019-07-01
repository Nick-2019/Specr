import React, { Component } from 'react';
// import { thisExpression } from '@babel/types';
import './container.css'
import SurveyTemplate from './SurveyAssets/Survey'
import Container from './SurveyAssets/SComputerContainer'
// const engineer = <div> Wow, this works? </div>

const CompUrl = "http://localhost:8000/computers"



export default class Survey extends Component{


    surveyTake = (e) => {
        e.preventDefault()
        console.log("HAIL SANTA")
        this.setState({
            tookSurvey: true
        })
    }

    constructor(){
        super();
        this.state = {
            status: "gaming",
            computers: [],
            display: [],
            tookSurvey: false
            // isLoading: true
        }
    }


    componentDidMount() {
        fetch(CompUrl)
        .then(res => res.json())
        .then(data => {
            this.setState({
                computers: data
            })
        })
    }

    render(){
        return(
            <div>
                {!this.state.tookSurvey ? <SurveyTemplate click={this.surveyTake} /> : <Container />}
            </div>
        )
    }
}