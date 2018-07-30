const express = require("express");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const fs = require("fs-extra");

const emptySpace = require("./emptySpace.js");

const dbFile = "data/db.json";
// check if db.json exists and create it if not
fs.ensureFileSync(dbFile);

const adapter = new FileSync(dbFile);
const db = low(adapter);

// populate db.json if empty
db.defaults(emptySpace).write();

let app = express();

app.get("/", (req, res) => {
  let data = db.getState();
  res.json(data);
});

app.listen(3000);
