import axios from 'axios';

const url = 'http://localhost:3001/posts';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => {
    return axios.post(url, newPost);
};
export const updatePost = (id, post) => {
    let newPost = {};
    const allowedKeys = [ "tags", "likeCount", "creator", "title", "message", "selectedFile" ];
    allowedKeys.map((allowedKey) => newPost[allowedKey] = post[allowedKey]);
    return axios.patch(`${url}/${id}`, newPost);
}
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/like`);