const path = require('path');
const express = require("express");
const app = express();
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: path.join(__dirname, 'public')});
})


app.listen(process.env.PORT || 8080, 
	() => console.log("Server is running..."));
//open('http://localhost:3000');

module.exports = app