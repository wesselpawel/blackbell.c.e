import { NextApiRequest, NextApiResponse } from "next";
import { connect } from "../../../utils/database"

// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req: NextApiRequest, res: NextApiResponse) {
    try {
        const {db} = await connect();
        const posts = await db.collection("posts").find({}).toArray();
        return res.json(posts);
    } catch(e) {
        res.status(500);
        res.json({error: "Unable to fetch posts... sorry"});
    }
}