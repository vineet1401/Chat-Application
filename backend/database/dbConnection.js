import mongoose from "mongoose";


const connectToMongoDb = async() => {
    const options = {
        // Increase the server selection timeout (in milliseconds)
        serverSelectionTimeoutMS: 10000, // Example: 10 seconds
      
      };
    try {
        await mongoose.connect(process.env.DB_STRING);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error);
    }
}
export default connectToMongoDb;