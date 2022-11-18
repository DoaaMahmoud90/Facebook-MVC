const mongoose = require('mongoose');
const userFeed = new mongoose.Schema({
  Name :{
    type: String,
    maxLength: [15, "The name should be maximum 15 chars"],
    require: true
  },
  Message:{
    type: String,
    maxLength: [40, "The message must be no longer than 40 chars"],
    require: true

  }
}, {
  timestamps:true
});

const FEED= mongoose.model('FEED', userFeed);

module.exports = FEED;