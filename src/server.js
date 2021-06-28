const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt-nodejs");
const cors = require("cors");
var multer = require("multer");
const knex = require("knex");
const fileUpload = require("express-fileupload");

const app = express();
app.use(cors());

const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "postgres",
    password: "2201",
    database: "prms",
  },
});

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "attachments");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

var upload = multer({ storage: storage });

app.post("/upload", upload.single("file"), (req, res) => {
  res.json(req.file);
});

app.get("/", (req, res) => {
  res.send(database.users);
  // res.send('Working!');
});

app.post("/signin", (req, res) => {
  const { reg_no, password } = req.body;

  if (reg_no.length === "13") {
    db("users")
      .select("*")
      .join("student", "users.user_id", "=", "student.user_id")
      .where({ "student.reg_no": reg_no, password: password })
      .then((user) => {
        if (user[0]) {
          res.json(user[0]);
        } else {
          res.json("No such user!");
        }
      })
      .catch((err) => res.json("Invalid credentials!"));
  } else if (reg_no.length === 1) {
    db("users_role")
      .select("*")
      .join("users", "users.user_id", "=", "users_role.user_id")
      .join("role", "role.role_id", "=", "users_role.role_id")
      .where({ "users.user_id": reg_no, password: password })
      .then((user) => {
        if (user[0]) {
          res.json(user[0]);
        } else {
          res.json("No such staff");
        }
      })
      .catch((err) => res.json("Invalid credentials!"));
  } else {
    res.json("Hello admin!");
  }
});

app.post("/upload", (req, res) => {
  const { attachment } = req.body;
  db("postponement_request")
    .select("*")
    .join("users", "users.user_id", "=", "postponement_request.user_id")
    .join("type", "type.type_id", "=", "postponement_request.type_id")
    .then((data) => {
      if (data) {
        res.json("Successfully uploaded");
      } else {
        res.json("Not submitted");
      }
    })
    .catch((err) => res.status(400).json("Error"));
});

app.listen(4000);
