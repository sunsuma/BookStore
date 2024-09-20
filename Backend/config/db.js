import mongoose from "mongoose"
import { configDotenv } from "dotenv";
configDotenv();

export const connectionDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MongoDB_URI)
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1)//1 code means exit with failure, 0 means success
    }
}

export default connectionDB