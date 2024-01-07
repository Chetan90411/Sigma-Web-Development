const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
const blog = require('./routes/blog')


app.use(express.static("public"));
app.use('/blog', blog)

// Middleware 1 - logger for our application
app.use((req, res, next) => {
  console.log(req.headers);
  req.harry = "I am Harry Bhai";
  let date = new Date();
  fs.appendFileSync(
    "log.txt",
    `${Date.now()}  ${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()} is a ${req.method}\n`
  );
  console.log(`${Date.now()} is a ${req.method}`);
  // res.send("Hacked by Middleware 1")
  next();
});
// Middleware 2
app.use((req, res, next) => {
  console.log("m2");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("Hello about!" + req.harry);
});

app.get("/contact", (req, res) => {
  res.send("Hello contact!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
