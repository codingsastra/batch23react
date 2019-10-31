import React, {Component} from 'react'

class Like extends Component{
    constructor(){
        super();
        this.state={
            title:"Like"
        }
    }
    
    updateStatus=()=>{
        if(this.state.title=="Like"){
            this.setState({
                title:"Unlike"
            })
        }
        else
        {
            this.setState({
                title:"Like"
            })
        }
    }

    render(){
        return(
            <button onClick={this.updateStatus}>{this.state.title}</button>
        )
    }
}

export default Like;