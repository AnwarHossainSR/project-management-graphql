const express = require('express');
const colors = require('colors');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 5000;
const connectDB = require('./config/db');
const { graphqlHTTP } = require('express-graphql');
const app = express();

// Connect to database
connectDB();

app.use(cors());

app.listen(port, console.log(`Server running on port ${port}`));