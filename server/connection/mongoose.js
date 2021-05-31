import mongoose from 'mongoose';

var CONNECTION_URL = process.env.CONNECTION_URL;

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