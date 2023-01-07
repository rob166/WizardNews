const express = require("express");
const morgan = require("morgan");
const postBank = require("./postBank");
const postList = require("./views/postList");
const postDetails = require("./views/postDetails");

const app = express();
app.use(morgan('dev'));
app.use(express.static('./public'))

app.get("/", (req, res) => {

  const posts = postBank.list();
  res.send(postList(posts));

});

app.get('/posts/:id', (req, res) => {

  const id = req.params.id;
  const post = postBank.find(id);
  res.send(postDetails(post));

});

// Created a simple error handler, cannot figure out how to call it successfully if !post.id
function errorHandler(err, req, res, next) {
  res.status(500).send({ error: 'Something failed!' })
}

const PORT = 1337;
app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});

