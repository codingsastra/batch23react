import React from 'react'

class Greeting extends React.Component{
    constructor(){
        super();

        this.state={
            greeting:'',
            name:''
        }
    }

    onNameChange=(e)=>{
        var name=e.target.value;
        console.log(name);
        this.setState({
            name:name
        })
    }

    generateGreeting=()=>{
        var greeting=`Happy New Year, ${this.state.name}`;
        this.setState({
            greeting,
            name:''
        })
    }

    render(){
        return(
            <>
                <input type="text" value={this.state.name} onChange={this.onNameChange} name="name"/>
                <button onClick={this.generateGreeting}>Generate Greeting</button>
                <h1>{this.state.greeting}</h1>
            </>
        )
    }
}

export default Greeting;