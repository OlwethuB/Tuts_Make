const express = require('express'); // Import express
const cors = require("cors"); // Import cors

const app = express(); // Init express
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const router = require("./router/routes"); // Import routes
require("dotenv").config();
const port = process.env.PORT || 5000; // Port...

app.use(express.json()); // Use express json

// Use cors
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Use router
app.use(router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


