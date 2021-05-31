import React, { useEffect, useState } from 'react';
import 'fontsource-roboto';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';//alows us to dispatch an action

import {getPosts} from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Forms/Form';
import memories from './images/profile-pic.png';
import useStyles from './styles';

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts())
    }, [currentId, dispatch]);

    return (
     <Container maxWidth="lg" >
         <AppBar position="static" className={classes.appBar} color="inherit">
             <Typography variant="h2" align="center" className={classes.heading}>Memories</Typography>
             <img src={memories} alt="memories" className={classes.image} height="60"/>
         </AppBar>
         <Grow in>
             <Container>
                 <Grid container justify="space-between" alignItems="stretch"/*  spacing='3' */>
                     <Grid item xs={12} sm={7}>
                         <Posts setCurrentId={setCurrentId}/>
                     </Grid>
                     <Grid item xs={12} sm={4}>
                         <Form currentId={currentId} setCurrentId={setCurrentId}/>
                     </Grid>
                 </Grid>
             </Container>
         </Grow>
     </Container>
    );
}

export default App;