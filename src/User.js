import React from 'react';

//stateless functional component
const User = (props) => {
    return (
        <div key={props.user.id}>
            <h1>{props.user.name}</h1>
            <p>Email:{props.user.email}</p>
            <p>{props.children}</p>
        </div>
    )
}

export default User;