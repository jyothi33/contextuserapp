import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const UsersList = () => {
  const { users, removeUser } = useContext(UserContext);
  console.log(users);
  return users.map((user) => (
    <div key={user.id}>
      <span>{user.name}</span>
      <Link to={`/edit/${user.id}`}>Edit</Link>
      <button onClick={() => removeUser(user.id)}>Delete</button>
      <br />
    </div>
  ));
};

export default UsersList;
