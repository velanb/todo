// Importing frameworks and modules
const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const cors = require("cors");

//Env variables for dev
if (process.env.NODE_ENV != "production") {
  require("dotenv").config({
    path: "./.env",
  });
}

//Import routes from  modules
const TodoRoutes = require("./src/modules/todoModule/routes");

//Init PORT
const PORT = process.env.PORT;
//Error Handler
const errorHandler = require("./src/middlewares/errorHandler");

//Import modules
const connectDB = require("./config/db"); //Database connection obj

//Initialising the server
const app = express();
const server = http.createServer(app);

//Connect to Database
connectDB(process.env.MONGO_DB_URI);

//Middlewares
//CORS middleware
app.use(cors());

/**
    Incomming req parsers
**/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

//APP routes
app.use("/api/todo", TodoRoutes);

//Error Handler Middleware
app.use(errorHandler);

app.use((req, res) => {
  res.status(404).send("<h1>Sorry Route Unavailable!</h1>");
});

// Opening up a PORT and starting the server
server.listen(PORT, () => {
  console.log(`The app is up and listening to port ${PORT}`);
});
