const express = require("express");

const { initializeGiraffeql } = require("giraffeql");
require("./schema");

const app = express();
app.use(express.json());
const port = 8080;

initializeGiraffeql(app, {
  debug: true,
  lookupValue: true,
});

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
