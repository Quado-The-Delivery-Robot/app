import { Collection, Db, MongoClient } from "mongodb";
import { MONGODB_CONNECTION_STRING, NODE_ENV } from "$env/static/private";

const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;
let db: Db;

if (NODE_ENV === "development") {
    if (!(global as any)._mongoClientPromise) {
        client = new MongoClient(MONGODB_CONNECTION_STRING, options);
        (global as any)._mongoClientPromise = client.connect();
        db = client.db("app");
    }
    clientPromise = (global as any)._mongoClientPromise;
} else {
    client = new MongoClient(MONGODB_CONNECTION_STRING, options);
    clientPromise = client.connect();
    db = client.db("app");
}

export default clientPromise;

export function getCollection(collection: string): Collection {
    return db.collection(collection);
}
