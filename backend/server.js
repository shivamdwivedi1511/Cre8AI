require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running");
});

const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('MongoDB Connected');
    app.listen(port, () => console.log(`Server running on port ${port}`));
})
.catch(err=>console.error('MongoDB connection error:', err));

