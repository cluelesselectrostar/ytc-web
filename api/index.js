const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const cors =  require('cors');

// const authRoute = require("./routes/auth");
// const userRoute = require("./routes/users");
const projectPostRoute = require("./routes/projectPosts");
const blogPostRoute = require("./routes/blogPosts");
const stationPostRoute = require("./routes/stationPosts");

const { checkJwt } = require("./authz/check-jwt");

const app = express();

dotenv.config();
app.use(express.json());
app.use(cors({origin: process.env.CLIENT_ORIGIN_URL}));

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
app.use("/api/stationposts", stationPostRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Backend is running, ${process.env.PORT}.`);
});

app.get('/', (req, res) => {
  res.status(200).send('hello world. go ahead and add /api/projectposts or /api/blogposts or /api/stationposts to view database content.')
});

// testing protected api calls
/*
app.get("/api/message", checkJwt, (req, res) => {
  const message = {
    message: "Protected messages obtained.",
  };
  res.status(200).send(message);
});
*/

