import { MongoClient } from "mongodb";
import { MONGODB_CONNECTION_STRING } from "$env/static/private";

const mongoClient = new MongoClient(MONGODB_CONNECTION_STRING, {});
export default mongoClient.connect();
