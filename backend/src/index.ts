import express from "express";
import session from "express-session"; // TODO use a better session store
import bcrypt from "bcrypt";

import { MemDB } from "./memdb.js";
import { UserInfoDB } from "./user_info_db.js";


// needed to make the express-session login examples work with TS, see https://akoskm.com/how-to-use-express-session-with-custom-sessiondata-typescript
type User = {
  id: string,
}
declare module "express-session" {
  interface SessionData {
    user: User | null,
  }
}


const app = express();
const PORT = process.env.PORT || 3000;

const db: UserInfoDB = MemDB.get_db();


// built in middleware - parses urlencoded and json request bodies into the req.body field
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// express-session middleware
app.use(session({
  secret: 'keyboard cat', // TODO read this secret for cookie generation from ENV/more secure location
  resave: false,
  saveUninitialized: false
}))


// index
app.get("/", (req, res) => {
  console.log(req.session);
  if (req.session.user) {
    console.log("LOG: Got request to index from authenticated user " + req.session.user);
    res.send("Hello DuoCode! Index currently has no content. You are authenticated.");
  } else {
    console.log("LOG: Got request to index from non-authenticated user");
    res.send("Hello DuoCode! Index currently has no content. You are not authenticated.");
  }
});


// sign up endpoint
app.post("/signup", async (req, res) => {
  const hash = await bcrypt.hash(req.body.password, 13);

  const data = {
    user: req.body.name,
    pass_hash: hash
  };

  const check = db.get_entry(data.user);

  if (!check) {
    db.insert_entry(data);
    res.status(201).send("Account created");
  } else {
    res.type("text/plain").status(400).send("User already exists");
  }
});

// express-session code from the examples at https://www.npmjs.com/package/express-session

// log in endppoint - authenticate and then create session
app.post("/login", async (req, res, next) => {
  const check = db.get_entry(req.body.name);

  if (!check) {
    res.send("wrong username"); // TODO bad practice to let users know why the login fails
    return;
  }

  const isValid = await bcrypt.compare(req.body.password, check.pass_hash);

  if (!isValid) {
    res.status(400).send("Incorrect password");
    return;
  }

  // regenerate the session, which is good practice to help
  // guard against forms of session fixation
  req.session.regenerate(function (err) {
    if (err) next(err);

    // store user information in session, typically a user id
    req.session.user = req.body.user;
    console.log("User logged in, their session is now " + req.session);

    // save the session before redirection to ensure page
    // load does not happen before session is saved
    req.session.save(function (err) {
      if (err) return next(err);
      res.redirect("/"); // TODO this sets the cookie on the response, but manually sending a response doesn't
    })
  })
});


// log out endpoint - end session
app.get('/logout', function (req, res, next) {
  // logout logic

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


app.use(express.static("../content"));


// start listening on specified port
app.listen(PORT, () => {
  console.log(`DuoCode server started on port ${PORT}...`)
});
