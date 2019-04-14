export const handleHTTPError = response => {
  switch (response.status) {
    case 200:
      return response.json();

    case 404:
      return response.json().then(data => {
        return Promise.reject(data);
      });
  }
};

export const getUserDetails = function(user) {
  return function(dispatch) {
    fetch(`https://api.github.com/users/${user}`)
      .then(handleHTTPError)
      .then(response => {
        dispatch({ type: "GET_USER_SUCCESS", data: response });
      })
      .catch(error => dispatch({ type: "GET_USER_FAILURE", error }));
  };
};
