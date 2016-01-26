'use strict';

var sample = require('lodash/sample');
var words = require('./words.json');

function porreta() {
  return sample(words);
}

module.exports = porreta;
module.exports.words = words;
