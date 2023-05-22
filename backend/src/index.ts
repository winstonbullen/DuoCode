import { QuestionContentDB, UserInfoDB } from "./db.js";
import { UsersDB } from "./usersdb.js";
import { ContentDB } from "./contentdb.js";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

import express from "express";
import session from "express-session";
import MongoStore from "connect-mongo";

import path from "path";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config(); // load config from .env file
const db_uri = process.env.MONGODB_INSTANCE as string; // for typescript, cast to string
const cookie_secret = process.env.COOKIE_SECRET as string;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// needed to make the express-session login examples work with TS, see https://akoskm.com/how-to-use-express-session-with-custom-sessiondata-typescript
type User = {
  name: string,
}
declare module "express-session" {
  interface SessionData {
    user: User | null,
  }
}


const app = express();
const PORT = process.env.PORT || 3001;

const db: UserInfoDB = await UsersDB.get_db();
const content_db: QuestionContentDB = await ContentDB.get_db();

const FRONTEND_BUILD = "../frontend/build/index.html";

// use EJS to render web pages somewhat dynamically
app.set("view engine", "ejs");

// built in middleware - parses urlencoded and json request bodies into the req.body field
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// express-session middleware
app.use(session({
  store: MongoStore.create({ mongoUrl: db_uri }),
  secret: cookie_secret,
  resave: false,
  saveUninitialized: false
}))

/// Endpoints
/// For endpoint specification see API.md

// serve landing page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/landing.html'));
});

// serve home page
app.get("/app", (req, res) => {
  if (req.session.user) {
    res.status(200).sendFile(path.resolve(FRONTEND_BUILD));
  } else {
    res.render("login", {error: false});
  }
});

// serve signup page
app.get("/signup", (req, res) => {
  if (req.session.user) {
    res.redirect("/app");
  } else {
    res.render("signup", {error: false});
  }
});

// serve login page
app.get("/login", (req, res) => {
  if (req.session.user) {
    res.redirect("/app");
  } else {
    res.render("login", { error: false });
  }
});

// sign up endpoint
app.post("/signup", async (req, res) => {
  if (!req.body.name || !req.body.password) {
    res.status(400).send("Bad request");
    return;
  }
  const check = await db.get_entry(req.body.name);

  if (!check) {
    const hash = await bcrypt.hash(req.body.password, 13);

    const data = {
      user: req.body.name,
      pass_hash: hash,
      completed: [],
    };

    await db.insert_entry(data);
    return res.render("login", {error: false});
  } else {
    return res.render("signup", {error: true});
  }
});

// log in endppoint - authenticate and then create session
app.post("/login", async (req, res, next) => {
  if (!req.body.name || !req.body.password) {
    return res.render("login", { error: true });
  }
  const check = await db.get_entry(req.body.name);

  if (!check) {
    return res.render("login", { error: true });
  }

  const isValid = await bcrypt.compare(req.body.password, check.pass_hash);

  if (!isValid) {
    return res.render("login", { error: true });
  }

  // regenerate the session, which is good practice to help
  // guard against forms of session fixation
  req.session.regenerate(function (err) {
    if (err) next(err);

    // store user information in session, just name for now
    req.session.user = { name: req.body.name };

    // save the session before redirection to ensure page
    // load does not happen before session is saved
    req.session.save(function (err) {
      if (err) return next(err);
      res.redirect("/app");
    })
  })
});

// log out endpoint - end session
app.get('/logout', (req, res, next) => {
  // clear the user from the session object and save.
  // this will ensure that re-using the old session id
  // does not have a logged in user
  req.session.user = null
  req.session.save(function (err) {
    if (err) next(err)

    // regenerate the session, which is good practice to help
    // guard against forms of session fixation
    req.session.regenerate(function (err) {
      if (err) next(err)
      res.redirect('/')
    })
  })
});

// content endpoint with route parameters to specify content
app.get("/content/:language/:subject/:type/:difficulty/:id", async (req, res) => {

  try {
    let question_json = await content_db.get_question(req.params);
    res.status(200).send(question_json);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
});

// read the user's completion list
app.get("/completion", async (req, res) => {
  if (req.session.user) {
    res.status(200).send((await db.get_entry(req.session.user.name)).completed);
  } else {
    res.status(401).send("Unauthorized"); // client must be authenticated to get their completion
  }
});

// append to the user's completion list
app.post("/completion", async (req, res) => {
  if (req.session.user) {
    if (!req.body.language || !req.body.subject) {
      res.status(400).send("Bad request");
      return;
    }
    let completion_string = `${req.body.language}_${req.body.subject}`;
    if (req.body.level) completion_string += "_" + req.body.level;
    db.append_completion(req.session.user.name, completion_string);
    res.status(200).send("Success");
  } else {
    res.status(401).send("Unauthorized"); // client must be authenticated to get their completion
  }
});

// Static files - content also available through walking file path (discouraged since content also now hosted
// on mongodb instance)
app.use("/content", express.static("../content"));
app.use(express.static("public"));
app.use("/app", express.static("../frontend/build"));

// Needed to make the frontend work with React Router
app.use("/*", (req, res) => {
  res.redirect("/app");
});

// start listening on specified port
app.listen(PORT, () => {
  console.log(`DuoCode server started on port ${PORT}...`)
});

// Close existing connections to MongoDB
process.on("exit", async () => {
  await ContentDB.close();
  await UsersDB.close();
});