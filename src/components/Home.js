import React from "react";
import { Link } from "react-router-dom";

import UsersList from "./UsersList";

const Home = () => {
  return (
    <div>
      <Link to="/add">Add User</Link>
      <br />
      <br />
      <br />
      <br />
      <UsersList />
    </div>
  );
};

export default Home;
