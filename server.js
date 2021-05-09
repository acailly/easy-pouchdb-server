// server.js
// where your node app starts

// init project
const express = require("express");
const helmet = require("helmet");
const app = express();
const PouchDB = require("pouchdb");
// create pouchdb database in .data
const TempPouchDB = PouchDB.defaults({ prefix: ".data/" });

app.use(helmet());
app.use("/", require("express-pouchdb")(TempPouchDB));

// listen for requests :)
const port = process.env.PORT || 5984;
const listener = app.listen(port, function () {
  console.log("Your PouchDB is listening on port " + listener.address().port);
});
