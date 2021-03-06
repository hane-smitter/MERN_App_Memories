import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import { ThumbUpAlt, Delete, MoreHoriz } from '@material-ui/icons';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import useStyles from './styles';
import { deletePost, likePost } from '../../../actions/posts';

const Post = ({ post, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleDelete = () => dispatch(deletePost(post._id));
    const handleLike = () => dispatch(likePost(post._id));

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title}>
                <div className={classes.overlay}>
                    <Typography variant="h6">{post.creator}</Typography>
                    <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
                </div>
                <div className={classes.overlay2}>
                    <Button style={{color: 'white'}} size="small" onClick={() => setCurrentId(post._id)}>
                        <MoreHoriz fontSize="default" />
                    </Button>
                </div>
            </CardMedia>

                <Typography variant="body1" alignCenter className={classes.title} gutterBottom>
                    {post.title}
                </Typography>
            <CardContent>
                <Typography variant="body2" alignCenter gutterBottom>
                    {post.message}
                </Typography>
            </CardContent>

            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={handleLike}>
                    <ThumbUpAlt fontSize="small"/>
                    Like 
                    {post.likeCount}
                </Button>
                <Button size="small" color="primary" onClick={handleDelete}>
                    <Delete fontSize="small"/>
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
}

export default Post;