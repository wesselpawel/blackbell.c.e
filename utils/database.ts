import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.DATABASE_URL);

async function connect() {
    await client.connect();
    const db = client.db("blackbell");
    return {db, client};
}

export { connect };