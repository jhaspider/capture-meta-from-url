const express = require("express");
const cors = require("cors");
// my routings
const requests = require("./src/requests");

// eslint-escape
const corsOptions = {
  origin: true,
};

const app = express();
const port = 8080;
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", requests); // add routes to the express app.

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// exports.amarjit = functions.runWith(runtimeOpts).region("asia-south1").https.onRequest(app);
