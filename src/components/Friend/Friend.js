import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Friend.css';

const Friend = (props) => {
    const {name,email,id} = props.friend;
    const history = useHistory();
    const handleClick = (id) =>{
        const url = `/friend/${id}`;
        history.push(url);
    }
    return (
        <div className="col-md-6 col-lg-3 mt-3 text-center">
            <div className ="friend">
                <h4>Name: {name}</h4>
                <p>Email: {email}</p>
                {/* <p>ID : <Link to={`/friend/${id}`}> show details of {id}</Link></p> */}
                <button onClick = {()=> handleClick(id)}>Click Here</button>
                {/* <p>Phone: {phone} </p>
                <p>Username: {username} </p>
                <p>Website: {website} </p> */}
            </div>
        </div>
    );
};

export default Friend;