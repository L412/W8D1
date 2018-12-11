// YOURE HERE AFTER LUNCH
import React from "react";
import { Link } from 'react-router-dom';

const Greeting = (props) => {
  
  if (props.currentUser) {
    return (
    <div>
      <h3>Welcome, {props.currentUser.username}!</h3>
      <button onClick={props.logout}>Log Out</button>
    </div>
    )
  } else {
    return (
      <div>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Log in</Link>
      </div>
    )
  }

}

export default Greeting;