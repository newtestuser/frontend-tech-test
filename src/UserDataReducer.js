const UserReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_USER_SUCCESS":
      return {
        ...state,
        data: action.data,
        error: null
      };
    case "GET_USER_FAILURE":
      return {
        ...state,
        error: action.error,
        data: null
      };
    default:
      return state;
  }
};

export default UserReducer;
