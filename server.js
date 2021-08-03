const express = require('express');
const path = require('path');

const app = express();

app.use("/public", express.static(path.resolve(__dirname, "frontend", "public")));

app.get("/*" , (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

app.listen(3000, () => {
    console.log("Server listen on port 3000");
})