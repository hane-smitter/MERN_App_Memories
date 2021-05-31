import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

import conn from './connection/mongoose.js';
import PostsRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//connect to database
conn();

const PORT = process.env.PORT || 3002;

app.use('/posts', PostsRoutes);
app.get('/', (req, res) => {
    res.send('Hello memories API');
});

app.listen(PORT, () => {
    console.log(`app is listening on port: ${PORT}`);
});