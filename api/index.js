const express = require('express');
const app = express();


const port = 6001;

app.get('/', (req, res) => {
    res.send('ok');
})

app.listen(port, () => {
    console.log(`Server listen on ${port}`);
})