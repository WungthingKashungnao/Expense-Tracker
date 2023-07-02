//third party imported packages start
const express = require("express");
const cors = require("cors"); //for passing url from backend to frontend
const { readdirSync } = require("fs"); //readdireSync is used to synchronously read the contents of a given directory
require("dotenv").config(); //configuring dotenv so we can use env file
//third party imported packages end

// importing user created files start
const { db } = require("./db/db.js"); //file to connect to the database
// importing user created files end

const app = express();
const PORT = process.env.PORT; //accessing PORT which is in env file

// middleware start
app.use(express.json()); //very important we need this to send json data, for the routes
app.use(cors()); //for passing url from backend to frontend
// middleware end

// routes start

//readdireSync is used to synchronously read the contents of a given directory
readdirSync("./routes").map((route) =>
  app.use("/api/v1", require(`./routes/` + route))
);

// routes end

app.get("/", (req, res) => {
  res.send("Hello World");
});

// function to start server
const server = () => {
  db(); //imported function calling to connecto to mongodb
  app.listen(PORT, () => {
    console.log(`Server has started on port: ${PORT}`);
  });
};
server();
