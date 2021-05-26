import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { v4 as uuidv4 } from "uuid";

const AddUser = () => {
  const [uname, setUName] = useState();
  const history = useHistory();

  const { addUser } = useContext(UserContext);

  const addUserHandler = (e) => {
    e.preventDefault();
    history.push("/");
    let newUser = {
      name: uname,
      id: uuidv4(),
    };
    addUser(newUser);
  };
  return (
    <form action="" onSubmit={addUserHandler}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={(e) => setUName(e.target.value)}
      />
      <button type="submit">Submit</button>
      <Link to="/">Cancel</Link>
    </form>
  );
};

export default AddUser;
