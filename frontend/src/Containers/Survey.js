import React, { Component } from 'react';
// import { thisExpression } from '@babel/types';
import './container.css'
import SurveyTemplate from './SurveyAssets/Survey'
import Container from './SurveyAssets/SComputerContainer'
// const engineer = <div> Wow, this works? </div>

const CompUrl = "http://localhost:8000/computers"



export default class Survey extends Component{



    filterByType = (e) => {
        let arr = this.state.reccomp
        let newDisplay=[]
        e.target.value === "Filter by computer type" ? console.log("No") : arr.filter(computer => {
            computer.type.toLowerCase() === e.target.value.toLowerCase() ? newDisplay.push(computer) : console.log("no")
        })
        e.target.value === "All" ? this.setState({display: arr}) : this.setState({display: newDisplay})
        
    }

    filterByCpu = (e) => {
        let arr = this.state.reccomp
        let newDisplay=[]
        e.target.value === "Filter by computer CPU brand" ? console.log("No") : arr.filter(computer => {
            computer.cpuBrand.toLowerCase() === e.target.value.toLowerCase() ? newDisplay.push(computer) : console.log("no")
        })
        e.target.value === "All" ? this.setState({display: arr}) : this.setState({display: newDisplay})
        
    }

    filterByOs = (e) => {
        let arr = this.state.reccomp
        let newDisplay=[]
        e.target.value === "Filter by OS" ? console.log("No") : arr.filter(computer => {
            computer.os.toLowerCase() === e.target.value.toLowerCase() ? newDisplay.push(computer) : console.log("no")
        })
        e.target.value === "All" ? this.setState({display: arr}) : this.setState({display: newDisplay})
        
    }


    surveyTake = (e) => {
        e.preventDefault()
        let arr = []
        let arr1 = []
        let arr2 = []
        let arr3 = []
        let finalarr = []
        let start = this.state.computers
        // First question- Primary Use
        let i = e.target.parentElement[0].value
        let firstObj = JSON.parse(i)
        // debugger


        //Second Question- Gaming
        let j = e.target.parentElement[1].value
        let secondObj = JSON.parse(j)
        // debugger

        //Third Question- School
        // let k = e.target.parentElement[2].value
        // let thirdObj = JSON.parse(k)

        //Fourth Question- Streaming 
        let l = e.target.parentElement[3].value
        let fourthObj = JSON.parse(l)
        // debugger

        //Fith Question- Buisness
        let fithObj = e.target.parentElement[4].value
        // let fithObj = JSON.parse(m)
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
        console.log(arr2)
        // debugger

        //Streaming Filtering
        fourthObj === null ? arr2.map(computer => arr3.push(computer)) : arr2.filter(computer => {
            computer.gpuTier >= 4 ? arr3.push(computer) : console.log("no")
        })
        console.log(arr3)
        finalarr = arr3.sort((a, b) => {
            if(a.msrp < b.msrp){return -1}
            if(a.msrp > b.msrp){return 1}
        }
        )
        //  debugger



        
        // debugger

        // debugger


        // console.log(arr2)
        // debugger









        // debugger
        this.setState({
            tookSurvey: true,
            display: finalarr,
            recomendcpu: fithObj,
            recomendos: firstObj.os,
            reccomp: finalarr
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
            recomendos: null,
            reccomp: []

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
            <div className="surveybackground">
                {!this.state.tookSurvey ? <SurveyTemplate click={this.surveyTake} /> : <Container cpu={this.filterByCpu} type={this.filterByType} os={this.filterByOs} comps={this.state.display} />}
            </div>
        )
    }
}