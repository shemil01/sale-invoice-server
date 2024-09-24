
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dbConnect = require('./config/DbConnection')
const bodyParser = require('body-parser');
const dotenv = require("dotenv");
dotenv.config({ path: "./config/.env" });
const customerRout = require('./router/customer')
const invoiceRout = require('./router/invoice')

const app = express();
app.use(     
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );
app.use(bodyParser.json());
app.use('/api',customerRout)
app.use('/api',invoiceRout)

dbConnect()

const PORT = process.env.PORT ;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
