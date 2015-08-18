'use strict';

var _ = require('lodash');
var words = require('./words.json'); 

function porreta() {
  return _.sample(words);
}

module.exports = porreta;
module.exports.words = words;
