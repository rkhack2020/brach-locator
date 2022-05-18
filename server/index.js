// import modules which you required
const express = require('express');
const dotenv = require('dotenv');
const api = require('./api');
const app = express();

dotenv.config({path: './config.env'});

app.use(express.urlencoded({extended: false}));
app.use(express.json());
// bootpoint from where routing starts
app.use('/api', api);

module.exports = app;