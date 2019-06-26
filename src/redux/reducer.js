const initialState = {
  username: "",
  password: "",
  profile: "",
  post: ""
};

const UPDATE_USER = "UPDATE_USER";
const CLEAR_USER = "CLEAR_USER";

const ADD_POST = "ADD_POST"

export function updateUser(user) {
  return {
    type: UPDATE_USER,
    payload: user
  };
}

export function clearUser() {
  return {
    type: CLEAR_USER
  };
}

export function addPost(post){
  return {
    type: ADD_POST,
    payload: post
  }
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER:
      const { username, password, profile } = action.payload;
      return { ...state, username, password: password, profile };
    case CLEAR_USER:
      return { ...initialState };
    case ADD_POST:
      const { post } = action.payload;
      return { ...state, post}
    default:
      return state;
  }
}

export default reducer;
