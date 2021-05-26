const UserReducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER":
      return { ...state, users: [...state.users, action.payload] };

    case "REMOVE_USER":
      return {
        ...state,
        users: [...state.users.filter((user) => user.id !== action.payload)],
      };

    case "EDIT_USER":
      const newUser = action.payload;

      const updatedUser = state.users.map((user) => {
        if (user.id === newUser.id) {
          return newUser;
        }
        return user;
      });
      return {
        users: updatedUser,
      };

    default:
      return state;
  }
};

export default UserReducer;
