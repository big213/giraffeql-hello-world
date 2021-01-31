const express = require("express");

const { initializeJomql } = require("jomql");
require("./schema");

const app = express();
app.use(express.json());
const port = 8080;

initializeJomql(app, {
  debug: true,
  lookupValue: true,
  jomqlPath: "/jomql",
});

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
