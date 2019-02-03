const db = require('../database/index.js');
const parse = require('body-parser');
const express = require('express');
const github = require('../helpers/github.js');
let app = express();


app.use(express.static(__dirname + '/../client/dist'));

app.use(parse.text());

app.post('/repos', function (req, res) {
  let saveRepos = (repos) => repos.forEach(db.save);
  github.getReposByUsername(req.body, saveRepos);
  res.status(200).send('repos saved');
});

// https://github.com/Automattic/mongoose/issues/4951
app.get('/repos', function (req, res) {
  db.fetch()
  .then((repos)=> res.send(repos))//send back to client as a res)

});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

