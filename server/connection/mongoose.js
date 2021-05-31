import mongoose from 'mongoose';

var CONNECTION_URL = "mongodb://127.0.0.1:27017/memories";

const connect = async() => {
    try {
        await mongoose.connect(CONNECTION_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Database connection successful');
     
    } catch (err) {
        console.log(err.message);
        process.exit();
    }
    mongoose.set('useFindAndModify', false);
}

export default connect;