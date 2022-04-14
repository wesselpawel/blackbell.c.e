import { NextApiRequest, NextApiResponse } from "next";
import { connect } from "../../../utils/database"

// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req: NextApiRequest, res: NextApiResponse){
    try{
    const {db} = await connect();
    const {
        data: { title, description, image},
    } = req.body;

    const result = await db.collection("posts").insertOne({
        title:title,
        description:description,
        image:image,
        createdAt: new Date(),
    });

    res.status(201);
    res.json({message: "Post added"})
    } catch(e){
        res.status(500);
        res.json({error: "Something went wrong... sorry"})
    }
}