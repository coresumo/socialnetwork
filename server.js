const express = require("express");
const mongoose = require("mongoose");

const users = require("./routes/api/users");
const posts = require("./routes/api/posts");
const profile = require("./routes/api/profile");

const app = express();

// DB config
const db = require("./config/keys").mongoURI;

// db connectation
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("Mongobd connect"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("hello world"));

// Routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

const port = process.env.port || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
