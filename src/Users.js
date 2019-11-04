import React, {Component} from 'react'

class Users extends Component{
    constructor(){
        super();
        this.state={
            users:[],
            loading:true,
            error:false
        }
    }

    render(){
        if(this.state.loading==true){
            return(
                <div>
                    <h1>Users</h1>
                    <p>Loading..Please wait</p>
                </div>
            )
        }
        if(this.state.error==true){
            return(
                <div>
                    <h1>Users</h1>
                    <p>Sorry.. Our server is down. Try later</p>
                </div>
            )
        }
        return(
            <div>
                <h1>Users</h1>
                <ul>
                    {
                        this.state.users.map((user)=>{
                            return <li key={user.id}>{user.name}</li>
                        })
                    }
                </ul>
            </div>
        )
    }

    componentDidMount(){
        fetch('https://jsonplaceholderxxxxx.typicode.com/users')
        .then(response=>response.json())
        .then(users=>{
            this.setState({
                users,
                loading:false
            })
        })
        .catch((err)=>{
            this.setState({
                loading:false,
                error:true
            })
        })
    }
}

export default Users;