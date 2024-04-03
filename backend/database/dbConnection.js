import mongoose from "mongoose";

const connectToMongoDb = async() => {
    try {
        await mongoose.connect(process.env.DB_STRING);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error);
    }
}
export default connectToMongoDb;