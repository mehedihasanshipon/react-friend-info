import React from 'react';
import { useEffect, useState } from 'react';
import Friend from "../Friend/Friend";

const Home = () => {
    const [friends,setFriends] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setFriends(data))
  },[])
  console.log(friends)
    return (
        <div className="row container ">
        <h1 className = "text-center">Friends: {friends.length}</h1>
        {
          friends.map(friend => <Friend friend={friend} key = {friend.id} />)
        }
        
      </div>
    );
};

export default Home;