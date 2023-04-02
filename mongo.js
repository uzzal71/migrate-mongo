import mongoose from "mongoose";

const uri = `mongodb://localhost:27017/testing-migrate`;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

const connectWithDb = async () => {
    const connectionResult = await mongoose.connect(uri, options);
    console.log(`Database connected`);
    return true;
};

export default connectWithDb;