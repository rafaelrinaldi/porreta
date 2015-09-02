'use strict';

var words = require('./words.json');

var _ = {
  sample: function(collection) {
    return collection[Math.floor((Math.random() * collection.length))]
  }
}

function porreta() {
  return _.sample(words);
}

module.exports = porreta;
module.exports.words = words;
