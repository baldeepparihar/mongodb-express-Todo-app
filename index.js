const express = require('express');
const app = express()

const PORT = process.env.PORT || process.argv[2] || 8080;

let todoRoutes = require('./routes/todos')

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send("Hello from the root route");
})

app.use('/apis/todos', todoRoutes)

app.listen(PORT, () => console.log(`Listening on ${PORT}`));