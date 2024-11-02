import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

async function connect(params) {
    const mongodb = await MongoMemoryServer.create();
    const getUri = mongodb.getUri();
    const db = mongoose.connect(getUri);

    mongoose.set('strictQuery', true);

    console.log("database connected ");

    return db;
}

export default connect;
