const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const cors =  require('cors');

// const authRoute = require("./routes/auth");
// const userRoute = require("./routes/users");
const projectPostRoute = require("./routes/projectPosts");
const blogPostRoute = require("./routes/blogPosts");
// const categoryRoute = require("./routes/categories");

const app = express();

dotenv.config();
app.use(express.json());
app.use(cors());

// const mongodbUri = process.env.MONGODB_URI || 'https://localhost:5000/';
// const PORT  = 3000;

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


const { createProxyMiddleware } = require('http-proxy-middleware');

app.use('/api/covid', createProxyMiddleware({ 
    target: 'https://covid.ourworldindata.org/data/owid-covid-data.json', //original url
    changeOrigin: true, 
    //secure: false,
    onProxyRes: function (proxyRes, req, res) {
       proxyRes.headers['Access-Control-Allow-Origin'] = '*';
    }
}));


app.use("/api/projectposts", projectPostRoute);
app.use("/api/blogposts", blogPostRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Backend is running, ${process.env.PORT}.`);
});

app.get('/', (req, res) => {
  res.status(200).send('hello world. go ahead and add /api/projectposts or /api/blogposts to view database content.')
});

