const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port =5000;

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://123:123@cluster0.jv6ss1v.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri);

const connection= mongoose.connection;
connection.once('open', () => {
    console.log("Mongodb database connection established successfully !!");
})

const api = require('./routes/data');

app.use('/api',api);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});