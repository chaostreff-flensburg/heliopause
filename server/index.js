const express = require("express");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const fs = require("fs-extra");
const nanoid = require("nanoid");
const next = require("next");

/* ENV */
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";

/* NEXT.JS SETUP */
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

/* DB SETUP */
const emptySpace = require("./emptySpace.js");
const emptySecrets = require("./emptySecrets.js");

const dbFile = "data/db.json";
// check if db.json exists and create it if not
fs.ensureFileSync(dbFile);
const dbAdapter = new FileSync(dbFile);
const db = low(dbAdapter);
// populate db.json if empty
db.defaults(emptySpace).write();

const secretsFile = "data/secrets.json";
// check if secrets.json exists and create it if not
fs.ensureFileSync(secretsFile);
const secretsAdapter = new FileSync(secretsFile);
const secrets = low(secretsAdapter);
// populate secrets.json if empty
secrets.defaults(emptySecrets).write();
// set env token if not allready included
if (
  process.env.TOKEN &&
  !secrets
    .get("token")
    .value()
    .includes(process.env.TOKEN)
) {
  secrets
    .get("token")
    .push(process.env.TOKEN)
    .write();
}

/* EXPRESS SETUP */
let app = express();
app.set("x-powered-by", false);
app.use(express.json());

/* ROUTES */
nextApp.prepare().then(() => {
  app.get("/", (req, res) => {
    let data = db.getState();
    res.json(data);
  });

  app.post("/", (req, res) => {
    let auth = secrets
      .get("token")
      .value()
      .includes(req.body.token);

    if (auth) {
      const newState = req.body.api;
      db.setState(newState).write();
      return res.status(201).send(newState);
    } else {
      return res.sendStatus(401);
    }
  });

  app.post("/door", (req, res) => {
    console.log(req)
    let auth = secrets
      .get("token")
      .value()
      .includes(req.query.token);

    if (auth) {
      db.set("state.open", JSON.parse(req.query.open)).write();
      return res.status(201).send(db.get("state"));
    } else {
      return res.sendStatus(401);
    }
  });

  app.post("/token", (req, res) => {
    let auth = secrets
      .get("token")
      .value()
      .includes(req.body.token);

    if (auth) {
      const newToken = nanoid(32);
      secrets
        .get("token")
        .push(newToken)
        .write();
      return res.status(201).send(newToken);
    } else {
      return res.sendStatus(401);
    }
  });

  // handle all other routes with next.js
  app.get("*", (req, res) => {
    return handle(req, res);
  });

  app.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
