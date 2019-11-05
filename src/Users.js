import React, { Component } from 'react'
import User from './User'

class Users extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
            loading: true,
            error: false
        }
    }

    render() {
        if (this.state.loading == true) {
            return (
                <div>
                    <h1>Users</h1>
                    <p>Loading..Please wait</p>
                </div>
            )
        }
        if (this.state.error == true) {
            return (
                <div>
                    <h1>Users</h1>
                    <p>Sorry.. Our server is down. Try later</p>
                </div>
            )
        }
        return (
            <div>
                <h1>Users</h1>
                <ul>
                    {
                        this.state.users.map((user) => {
                            return <User user={user}>Test</User>
                        })
                    }
                </ul>
            </div>
        )
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                this.setState({
                    users,
                    loading: false
                })
            })
            .catch((err) => {
                this.setState({
                    loading: false,
                    error: true
                })
            })
    }
}

export default Users;