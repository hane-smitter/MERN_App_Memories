import { CREATE, READ, UPDATE, DELETE, LIKE } from "../actionTypes";

//reducer is a function that accepts state(posts) and action
const reducer = (posts = [], action) => {
  switch (action.type) {
    case CREATE:
      return [...posts, action.payload];

    case READ:
      return action.payload;

    case UPDATE:
    case LIKE:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );

    case DELETE:
      return posts.filter((post) => post._id !== action.payload.id);

    default:
      return posts;
  }
};

export default reducer;
