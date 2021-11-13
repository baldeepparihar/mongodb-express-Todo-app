const express = require('express');
const app = express()

const PORT = process.env.PORT || process.argv[2] || 8080;

app.get('/', (req, res) => {
    res.json({message: "Hi, from message2"});
})

app.listen(PORT, () => console.log(`Listening on ${PORT}`));