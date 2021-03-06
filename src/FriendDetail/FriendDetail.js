
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {

    const {id} = useParams();
    const [friend,setData] = useState({});
    
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/users/${id}`;
        fetch(url)
            .then(response => response.json())
            .then(data => setData(data))
    },[])
    return (
        <div className= "container mt-5"> 
            <div className="friend">
                <h3>This is friend detail {id}</h3>
                <h5>Name: {friend.name}</h5>
                <p>Phone: {friend.phone}</p>
                <p>Email: {friend.email}</p>
            </div>
        </div>
    );
};

export default FriendDetail;