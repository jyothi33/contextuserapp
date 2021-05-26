import { createContext, useReducer } from "react";
import UserReducer from "./UserReducer";

const initialState = {
  users: [],
};

export const UserContext = createContext(initialState);

export const UserProvider = (props) => {
  const addUser = (user) => {
    dispatch({
      type: "ADD_USER",
      payload: user,
    });
  };

  const removeUser = (id) => {
    dispatch({
      type: "REMOVE_USER",
      payload: id,
    });
  };

  const editUser = (user) => {
    dispatch({
      type: "EDIT_USER",
      payload: user,
    });
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  let providerValue = {
    users: state.users,
    addUser,
    removeUser,
    editUser,
  };

  return (
    <UserContext.Provider value={providerValue}>
      {props.children}
    </UserContext.Provider>
  );
};
