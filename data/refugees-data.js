var mongoose = require('mongoose');

var worldSchema = new mongoose.Schema({
  name: String,
  country: String,
  img: String,
  popul: String,
  refugees: String,
  percent: String,
  est: Number
});

var World = mongoose.model('World', worldSchema);

module.exports = World;
