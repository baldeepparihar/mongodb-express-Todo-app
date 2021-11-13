const express = require('express');
const app = express();

const PORT = process.env.PORT || process.argv[2] || 8080;

let todoRoutes = require('./routes/todos')

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

app.get('/', (req, res) => {
    res.sendFile("index.html");
})

app.use('/apis/todos', todoRoutes)

app.listen(PORT, () => console.log(`Listening on ${PORT}`));