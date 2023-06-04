import "dotenv/config";

import mongoose from "mongoose";

import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello, World");
});

const port = process.env.PORT;

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
mongoose.connect(process.env.MONGO_CONNECTION_STRING!)
    .then(() => {
        console.log("Mongoose: Connected");
        app.listen(port, () => {
            console.log("Server: Running");
            console.log("Port: " + port);
        });
    })
    .catch(console.error);

