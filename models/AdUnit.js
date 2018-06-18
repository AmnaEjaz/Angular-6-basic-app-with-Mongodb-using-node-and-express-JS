// AdUnit.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for AdUnits
let AdUnit = new Schema({
  id: {
    type: String
  },
  name: {
    type: String
  },
  description: {
    type: String
  },
  price: {
    type: Number
  },
  image: {
    type: String
  },
  currency: {
    type: String
  },
  link: {
    type: String
  }
},{
    collection: 'mocks'
});

module.exports = mongoose.model('AdUnit', AdUnit);