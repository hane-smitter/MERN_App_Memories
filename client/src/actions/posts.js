import * as api from '../api';
import { CREATE, READ, UPDATE, DELETE, LIKE } from "../actionTypes";

//Action creators - functions that return actions
export const getPosts = () => async(dispatch) => {

    try {
        const { data, status, statusText } = await api.fetchPosts();

        if(!(status >= 200 && status < 300)) {
            throw new Error(statusText);
        }

        dispatch({type: READ, payload: data});
    } catch (err) {
        console.log(err.message);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);

        dispatch({ type: CREATE, payload: data});
    } catch (err) {
        console.log(err.message);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);
        console.log('from th actions');
        console.log(data);
        dispatch({ type: UPDATE, payload: data });
    } catch (err) {
        console.log(err.message);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);

        dispatch({ type: DELETE, payload: { id } });
    } catch (err) {
        console.log(err.message);
    }
}

export const likePost = (id) => async(dispatch) => {
    try {
       const { data } = await api.likePost(id);

       dispatch({ type: LIKE, payload: data })
    } catch (err) {
        console.log(err.message);
    }
}