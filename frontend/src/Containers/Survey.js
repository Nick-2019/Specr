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
        let arr = []
        let arr1 = []
        let arr2 = []
        let start = this.state.computers
        // First question- Primary Use
        let i = e.target.parentElement[0].value
        let firstObj = JSON.parse(i)
        // debugger


        //Second Question- Gaming
        let j = e.target.parentElement[1].value
        let secondObj = JSON.parse(j)
        debugger

        //Third Question- School
        let k = e.target.parentElement[2].value
        let thirdObj = JSON.parse(k)

        //Fourth Question- Streaming 
        let l = e.target.parentElement[3].value
        let fourthObj = JSON.parse(l)

        //Fith Question- Buisness
        let m = e.target.parentElement[4].value
        let fithObj = JSON.parse(m)
        //Time to start the filter nonsense
        //Filtering on the first question
        start.filter(computer => {
            //Part 1
            computer.cpuTier >= firstObj.cpu ? arr.push(computer) : console.log("no")
            // debugger
        })
        console.log(arr)
        arr.filter(computer => {
            // Part 2
            computer.gpuTier >= firstObj.gpu ? arr1.push(computer) : console.log("no")
        })
        console.log(arr1)

        //GPU filtering on Question 2
        secondObj === null ? arr1.map(computer => {arr2.push(computer)}) : arr1.filter(computer => {
            computer.gpuTier >= secondObj.gpu ? arr2.push(computer) : console.log("no")
        })

        //OS suggestion on Question 1
        // let osSuggest = firstObj.os 
        debugger
        // if(firstObj.os !== undefined){
        //     // debugger
        //     osSuggest = firstObj.os
        //     debugger
        // }


        console.log(arr2)
        // debugger









        // debugger
        this.setState({
            tookSurvey: true,
            display: arr2
        })
    }

    constructor(){
        super();
        this.state = {
            status: "gaming",
            computers: [],
            display: [],
            tookSurvey: false,
            recomendcpu: null,
            recomendos: null

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
                {!this.state.tookSurvey ? <SurveyTemplate click={this.surveyTake} /> : <Container comps={this.state.display} />}
            </div>
        )
    }
}