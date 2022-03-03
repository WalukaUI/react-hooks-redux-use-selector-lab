import React from "react";
import { useSelector } from "react-redux";
// add any needed imports here

function Users() {
  const states = useSelector((state) => state);
  return (
    <div>
      <ul>
        Users!
        {states.users.map((name) => {
          return <li>{name.username}</li>;
        })}
        <p>there are {states.users.length} users in the list</p>
      </ul>
    </div>
  );
}

export default Users;
