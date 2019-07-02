import React, { Component } from 'react';

export default class SurveyTemplate extends Component{

    constructor(props){
        super(props);
        // this.props.surveyTake
    }
    render(){
        return(
            <div>
            <form className="survey">
                What do you intend to primarily use this computer for?<select >
                <option disabled selected value>Select your use for this computer</option>
                    <option value='{"cpu":5,"gpu":2, "ram":8}' >Engineering</option>
                    <option value='{"cpu":4,"gpu":2}'>Gaming</option>
                    <option value='{"cpu":3}'>Finance</option>
                    <option value='{"cpu":5,"os":"macos"}'>Programming</option>
                    <option value='{"cpu":1,"os":"chrome"}'>Web Browsing</option>
                    <option value='{"cpu":5,"gpu":1}' >Photo editing</option>
                    <option value='{"cpu":5,"gpu":2}'>Video editing</option>
                    <option value='{"cpu":6,"gpu":4}'>Video editing (4k and beyond)</option>
                    <option value='{"cpu":7,"gpu":7, "suggest":"Puget"}'>Science and research</option>
                </select><br></br>
                If you intend to use this computer for gaming, how intense do you want the graphics to be?<select >
                <option disabled selected value>Select Gaming preferences</option>
                    <option value='{"gpu":1}'>Low</option>
                    <option value='{"gpu":1}'>Medium</option>
                    <option value='{"gpu":2}'>High/High refresh rate</option>
                    <option value='{"gpu":3}'>Ultra/VR</option>
                    <option value='{"gpu":5}'>4k</option>
                    <option>I don't intend to use this for games</option>
                </select>
                <br></br>
               Do you intend to use this computer for School?<select >
                <option disabled selected value>Education Use</option>
                    <option value='{"os":"macos}'>Yes</option>
                    <option>No</option>
                </select>
                <br></br>
                Do you intend to use this computer for Streaming?<select >
                <option disabled selected value>Streaming</option>
                    <option value='{"gpu":4}'>Yes</option>
                    <option>No</option>
                </select>
                <br></br>
                Do you intend to use this computer for a buisness/startup?<select >
                <option disabled selected value>Y/N</option>
                    <option cpubrandvalue="intel" >Yes</option>
                    <option>No</option>
                </select>
                <br></br>
                How many web browser tabs do you tend to keep open?<select >
                <option disabled selected value>Tabs</option>
                    <option>1-3</option>
                    <option>4-6</option>
                    <option>7-10</option>
                    <option>11+</option>
                </select>
                <br></br>




                <input type="submit" text="Submit" onClick={(e) => this.props.click(e) } ></input>

            </form>
        </div>
        )
    }
}