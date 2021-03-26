const express = require("express");
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();

const mongoose = require('mongoose');


const UserRoute = require('./routes/user');


const connectDB = async () => {
    mongoose.set('useFindAndModify', false);
    await mongoose.connect('mongodb+srv://user:user@newsample.jexcb.mongodb.net/testdb?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }, () => {
        console.log("Connection Estabilsed successfully");
    });

}

connectDB();

const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());














const PORT = process.env.PORT || 1001;
//port connection

app.listen(PORT, () => {
    console.log("Server Started");
})

app.use('/api/user', UserRoute);