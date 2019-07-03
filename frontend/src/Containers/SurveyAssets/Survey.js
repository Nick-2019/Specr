import React, { Component } from 'react';
import './survey.css'
import '../container.css'

export default class SurveyTemplate extends Component{

    // constructor(props){
    //     super(props);
    //     // this.props.surveyTake
    // }
    render(){
        return(
            <div>

                <div className="surveybackground">
            <form className="survey">
                <h2>To ensure your computer best fits your needs, please answer every question that you can.</h2>
                <h3>This ensures your suggestions will be more likely to give you a great experience!</h3>
                What do you intend to primarily use this computer for?<select >
                <option disabled selected value>Select your use for this computer</option>
                    <option value='{"cpu":5,"gpu":2, "ram":8, "os": null}' >Engineering</option>
                    <option value='{"cpu":4,"gpu":2, "os": "Windows"}'>Gaming</option>
                    <option value='{"cpu":3, "gpu": 0, "os": null}'>Finance</option>
                    <option value='{"cpu":5,"os":"macos", "gpu": 0, "reason": "coding"}'>Programming</option>
                    <option value='{"cpu":1,"os":"chrome", "gpu": 0}'>Only Web Browsing</option>
                    <option value='{"cpu":5,"gpu":1, "os": "macos", "reason": "photo"}' >Photo editing</option>
                    <option value='{"cpu":5,"gpu":2, "os": "macos", "reason": "video"}'>Video editing</option>
                    <option value='{"cpu":6,"gpu":4, "os": "macos", "reason": "video"}'>Video editing (4k and beyond)</option>
                    <option value='{"cpu":7,"gpu":7, "suggest":"Puget" , "os": null}'>Science and research</option>
                </select><br></br>
                If you intend to use this computer for gaming, how intense do you want the graphics to be?<select >
                <option disabled selected value value="null" >Select Gaming preferences</option>
                    <option value='{"gpu":1}'>Low</option>
                    <option value='{"gpu":1}'>Medium</option>
                    <option value='{"gpu":2}'>High/High refresh rate</option>
                    <option value='{"gpu":3}'>Ultra/VR</option>
                    <option value='{"gpu":5}'>4k</option>
                    <option value="null">I don't intend to use this for games</option>
                </select>
                <br></br>
               Do you intend to use this computer for School?<select >
                <option disabled selected value value="null" >Education Use</option>
                    <option value="null">Yes</option>
                    <option value="null">No</option>
                </select>
                <br></br>
                Do you intend to use this computer for streaming to websites like Twitch?<select >
                <option disabled selected value value="null" >Streaming</option>
                    <option value='{"gpu":4}'>Yes</option>
                    <option value="null" >No</option>
                </select>
                <br></br>
                Do you intend to use this computer for a buisness/startup?<select >
                <option disabled selected value>Y/N</option>
                    <option value="Intel" >Yes</option>
                    <option value="null">No</option>
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
        </div>
        )
    }
}