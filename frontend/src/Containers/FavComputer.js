import React, { Component } from 'react';
import ComputerCard from './ComputerCard'

export default class FavContainer extends Component {

    constructor(){
        super();
        this.state={
            comps: []
        }
    }

    // stateSetter = (arr) => {
    //     debugger
    //     this.setState({
    //         comps: arr
    //     })
    // }


    componentDidMount() {
        let favArr = []



        this.props.joiners.forEach(num => {
            this.props.computers.filter(comp => {
                if(comp.id === num){
                    favArr.push(comp)
                }
            })
        })

        // debugger
        this.setState({
            comps: favArr
        })

    }





    render(){
        return(
            <div>
                {this.state.comps.map(comp => <ComputerCard comp={comp}  /> )}
            </div>
        )
    }
}