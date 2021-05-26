import React, { useState } from "react";
import { useContext } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const EditUser = () => {
  const { id } = useParams();
  const history = useHistory();

  const { users, editUser } = useContext(UserContext);
  let user = users.find((user) => user.id === id);

  const [editedUser, setEditedUser] = useState({
    name: user.name,
    id: id,
  });

  const submitHandler = (e) => {
    e.preventDefault();
    editUser(editedUser, user);
    history.push("/");
  };

  const onChangeHandler = (e) => {
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
  };

  return (
    <form action="" onSubmit={submitHandler}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        value={editedUser.name}
        placeholder="Name"
        onChange={onChangeHandler}
      />
      <button type="submit">Edit</button>
      <Link to="/">Cancel</Link>
    </form>
  );
};

export default EditUser;
