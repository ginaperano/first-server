const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(__dirname + '/public'))

// home route
app.get('/:id', (req, res) => {
    //console.log(req.query);
    //req.query
    //req.body
    //console.log(req.headers);
    console.log(req.params);
    res.status(404).send("not found");
});

app.get('/profile', (req, res) => {
    res.send("getting profile");
});

app.post('/profile', (req, res) => {
    console.log(req.body)
    res.send("success");
});

app.listen(port, () => {
    console.log(`Success! Your application is running on port ${port}.`);
});