import "dotenv/config";
import express from "express";
import NoteModel from "./models/note";

const app = express();

app.get("/", async (req, res) => {
    try {
        const notes = await NoteModel.find().exec();
        res.status(200).json(notes);
    } catch (error) {
        console.log(error);
        let errorMessage = "An Unknown error occured";
        if (error instanceof Error) errorMessage = error.message;
        res.status(500).json({ error: errorMessage });
    }
});

export default app;