const mongoose = require('mongoose');

mongoose.connection.openUri('mongodb://localhost/fetcher')
  .once('open', () => console.log('Good to go !'))
  .on('error', (error) => {
    console.warn('Warning', error);
  });

let repoSchema = new mongoose.Schema({
  _id: Number,
  owner_login: String,
  name: String,
  html_url: String,
  stargazers_count: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repo) => {
  let dump = new Repo({
    _id: repo.id,
    owner_login: repo.owner.login,
    name: repo.name,
    html_url: repo.html_url,
    stargazers_count: repo.stargazers_count
  })

  dump.save((err) => {
    if (err) console.log(err);
  })
}
//https://mongoosejs.com/docs/2.7.x/docs/finding-documents.html
//https://medium.com/@jeanjacquesbagui/in-mongoose-sort-by-date-node-js-4dfcba254110
let fetch = () => {
  let query = Repo.find({}).sort({stargazers_count: 'descending'}).limit(25);
  return query.exec();
}

module.exports.save = save;
module.exports.fetch = fetch;