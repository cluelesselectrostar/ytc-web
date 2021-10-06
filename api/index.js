const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const cors =  require('cors');

// const authRoute = require("./routes/auth");
// const userRoute = require("./routes/users");
const projectPostRoute = require("./routes/projectPosts");
// const categoryRoute = require("./routes/categories");

const app = express();

dotenv.config();
app.use(express.json());
app.use(cors());

const mongodbUri = process.env.MONGODB_URI || 'mongodb://localhost/5000';
const PORT  = 3000;

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

/*
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/categories", categoryRoute);
*/

app.use("/api/projectposts", projectPostRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Backend is running, ${process.env.PORT}.`);
});

app.get('/', (req, res) => {
  res.status(200).send('hello world')
});

