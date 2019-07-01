import React, { Component } from 'react';

import './container.css'



export default class ComputerCard extends Component {

render(){
    return(
        <div className='card'>
            <div className='cardCont'>
                <img className='cardImg' src={this.props.comp.img} />
            </div>
            <div className='specs'>
                <p>
                    Specs:
                </p>
                <div className='specList'>
                <p>
                    CPU: {this.props.comp.cpuName}
                </p>
                <p>
                    GPU: {this.props.comp.gpuName}
                </p>
                <p>
                    {this.props.comp.ramAmount}{this.props.comp.ramUnit} of {this.props.comp.ramType} RAM

                </p>


                </div>
            </div>
            <div>
            <h1  className='name'>
                {this.props.comp.make} {this.props.comp.name}
            </h1>
            <div>
                <h2>
                    MSRP: ${this.props.comp.msrp}
                </h2>
            </div>
            <li>
            <a href={this.props.comp.newegg}>Newegg Link</a>
            </li>
            <li>
            <a href={this.props.comp.OEMURL}>OEM website</a>
            </li>
            </div>
        </div>
    )
}
}