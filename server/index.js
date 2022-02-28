const express = require("express");
const cors = require("cors");

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
app.use("/", requests);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
