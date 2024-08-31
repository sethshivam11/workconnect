import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.json({
        status: 200,
        success: true,
        message: "App is running"
    })
});

export default app;