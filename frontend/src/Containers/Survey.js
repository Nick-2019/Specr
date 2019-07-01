import React, { Component } from 'react';
// import { thisExpression } from '@babel/types';
import './container.css'

import Container from './SurveyAssets/SComputerContainer'
const engineer = <div> Wow, this works? </div>

const CompUrl = "http://localhost:8000/computers"



export default class Survey extends Component{

    

    constructor(){
        super();
        this.state = {
            status: "gaming",
            computers: [],
            display: []
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
            <div>
                <form className="survey">
                    What do you intend to primarily use this computer for?<select >
                    <option disabled selected value>Select your use for this computer</option>
                        <option>Engineering</option>
                        <option>Gaming</option>
                        <option>Finance</option>
                        <option>Programming</option>
                        <option>Web Browsing</option>
                        <option>Photo editing</option>
                        <option>Video editing</option>
                    </select><br></br>
                    If you intend to use this computer for gaming, how intense do you want the graphics to be?<select >
                    <option disabled selected value>Select Gaming preferences</option>
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High/High refresh rate</option>
                        <option>Ultra/VR</option>
                        <option>4k</option>
                        <option>I don't intend to use this for games</option>
                    </select>
                    <br></br>
                   Do you intend to use this computer for School?<select >
                    <option disabled selected value>Education Use</option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                    <br></br>
                    Do you intend to use this computer for Streaming?<select >
                    <option disabled selected value>Streaming</option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                    <br></br>
                    Do you intend to use this computer for a buisness/startup?<select >
                    <option disabled selected value>Tabs</option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                    <br></br>
                    How many web browser tabs do you keep open?<select >
                    <option disabled selected value>Tabs</option>
                        <option>1-3</option>
                        <option>4-6</option>
                        <option>7-10</option>
                        <option>11+</option>
                    </select>
                    <br></br>




                    <input type="submit" text="Submit"></input>

                </form>
            </div>
            <div>
                <Container/>
            </div>
            </div>
        )
    }
}