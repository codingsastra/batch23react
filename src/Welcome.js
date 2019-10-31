import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Welcome extends Component{
    constructor(){
        super();

        this.state={
            clicks:0
        }
    }

    updateClicks=()=>{
        this.setState({
            clicks:this.state.clicks+1
        })
    }

    render(){
        return(
            <h1 onClick={this.updateClicks}>Welcome to {this.props.name} - {this.props.year} - ({this.state.clicks})</h1>
        )
    }
}

Welcome.propTypes={
    name:PropTypes.string,
    year:PropTypes.number.isRequired,
    password(props, propName, component){
        if(!(propName in props)){
          return new Error(`missing ${propName}`)
        }
        if(props[propName].length < 6){
          return new Error(`${propName} was too short`)
        }
      }
}

Welcome.defaultProps={
    name:"Varma"
}

export default Welcome;