const express = require("express");
const app = express();
const port = 3000;

app.use(express.static('public'))


// app.get or app.post or app.put or app.delete(path, handler)
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("About Us!");
});

app.get("/contact", (req, res) => {
  res.send("Hello contact me!");
});

app.get("/blog", (req, res) => {
  res.send("Hello Blog!");
});

app.get("/blog/:slug/:second", (req, res) => {
  // logic to fetch {slug} from db
  //   for the following URL
  // http://localhost:3000/blog/ravi/chetan?mode=dark&region=in
  console.log(req.params); // will output { slug: "ravi", second: "chetan"}
  console.log(req.query); // will output { mode: 'dark', region: 'in' }

  res.send(`Hello ${req.params.slug} and ${req.params.second}!`);
});

// app.get('/blog/intro-to-js', (req, res) => {
//     // logic to fetch intro-to-js from db
//   res.send('Hello intro-to-js!')
// })

// app.get('/blog/intro-to-python', (req, res) => {
//     // logic to fetch intro-to-python from db
//   res.send('Hello intro-to-python!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
