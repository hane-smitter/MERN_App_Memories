import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useSelector } from "react-redux";

import { createPost, updatePost } from '../../actions/posts';
import useStyles from './styles';

const Form = ({ currentId, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const postToEdit = useSelector(state => state.posts.find(p => p._id === currentId));

    //creating the post data state
    const [ postData, setPostData ] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    });

    useEffect(() => {
        if(postToEdit) setPostData(postToEdit);
    }, [postToEdit]);

    //when form is submitted
    const handleSubmit = (event) => {
        event.preventDefault();
        if(currentId) {
            dispatch(updatePost(currentId, postData));
        } else {
            dispatch(createPost(postData));
        }
        clear();
    };
    //when form is cleared
    const clear = e => {
        setPostData({
            creator: '',
            title: '',
            message: '',
            tags: '',
            selectedFile: ''
        });
        setCurrentId(null);
    };

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.form} ${classes.root}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? "Editing" : "Creating"} a memory</Typography>
                <TextField name="creator" variant="outlined" label="Creator" onChange={e => setPostData({ ...postData, creator: e.target.value })} value={postData.creator} fullWidth/>
                <TextField name="title" variant="outlined" label="Title" onChange={e => setPostData({ ...postData, title: e.target.value })} value={postData.title} fullWidth/>
                <TextField name="message" variant="outlined" label="Message" onChange={e => setPostData({ ...postData, message: e.target.value })} value={postData.message} fullWidth/>
                <TextField name="tags" variant="outlined" label="Tags" onChange={e => setPostData({ ...postData, tags: e.target.value })} value={postData.tags} fullWidth/>
                {/* input for the image */}
                <div className={classes.fileInput}>
                 <FileBase type="file" multiple={false} onDone={({base64}) => setPostData({ ...postData, selectedFile: base64 })}/>
                </div>
                {/* buttons */}
                <Button className={classes.buttonSubmit} variant="contained" type="submit" size="large" color="primary" fullWidth>Submit</Button>
                <Button variant="contained" size="small" color="secondary" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
}

export default Form;