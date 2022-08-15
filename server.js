import express from "express";
import "dotenv/config";
import cors from "cors";
import router from "./routes/weather-route.js";
import { getCity } from "./helpers/helper.js";

const app = express();


// var bodyParser = require('body-parser')

const port = process.env.PORT || 8080;
app.use(express.json());
app.use(
  cors({
    origin: "*",
    // credentials: true
  })
);

// app.use(bodyParser.json());

// const server = createServer(app);

app.get("/", (req, res) => {
  res.send('Weather forecast Backend');
});

app.use(router);

app.listen(port, (err, res) => {
  console.log(`listening on port ${port}`);
});
